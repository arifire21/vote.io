export async function generateAndSaveKeys(){
    const generateKeys = async () => {
        const options = {
            name: 'RSASSA-PKCS1-v1_5',
            modulusLength: 2048,
            publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
            hash: { name: 'SHA-256' },
        };

        return await window.crypto.subtle.generateKey(
            options,
            true, // non-exportable (public key still exportable)
            ['sign', 'verify'],
        );
    };

    const { publicKey, privateKey } = await generateKeys()
    const pubKeyExport = await window.crypto.subtle.exportKey('spki', publicKey);
    let pubKey = window.btoa(String.fromCharCode(...new Uint8Array(pubKeyExport)));
    pubKey = pubKey.match(/.{1,64}/g).join('\n');
    const pub = `-----BEGIN PUBLIC KEY-----\n${pubKey}\n-----END PUBLIC KEY-----`
    console.log(pub)
    

    let privKeyExport = await window.crypto.subtle.exportKey("pkcs8",privateKey)
    let privKey = window.btoa(String.fromCharCode(...new Uint8Array(privKeyExport)));
    document.cookie = `privatekey=${privKey};`
    
    return pub
    
}

function str2ab(str) {
    const buf = new ArrayBuffer(str.length);
    const bufView = new Uint8Array(buf);
    for (let i = 0, strLen = str.length; i < strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  }

async function loadPrivateKey(){
    const privateKey = document.cookie.split('privatekey=')[1].split(';')[0]
    const binaryDerString = window.atob(privateKey)
    const binaryDer = str2ab(binaryDerString)
    return await window.crypto.subtle.importKey("pkcs8",binaryDer,{name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256'},true,['sign'])
}

export async function sign(message) {
    const encoder = new TextEncoder()
    const algorithmParameters = { name: 'RSASSA-PKCS1-v1_5' }
    const privateKey = await loadPrivateKey()
    console.log(privateKey)
    const signatureBytes = await window.crypto.subtle.sign(
        algorithmParameters,
        privateKey,
        encoder.encode(message)
    )
    const base64Signature = window.btoa(
        String.fromCharCode.apply(null, new Uint8Array(signatureBytes))
    )
    return base64Signature
}

export async function doubleHash(ssn){
    const generateHash = async (message) => {
        const encoder = new TextEncoder();
        const buffer = encoder.encode(message);
      
        const digest = await window.crypto.subtle.digest('SHA-256', buffer);
      
        // Convert to hex string
        return [...new Uint8Array(digest)]
          .map(v => v.toString(16).padStart(2, '0')).join('');;
      };
      const hash1 = await generateHash(ssn)
      const hash2 = await generateHash(hash1)
      return hash2
}

export function returnJWT() {
    const jwt = document.cookie.split('jwt=')[1].split(';')[0]
    return jwt
}