const cockroach = require('./cockroach')



module.exports = {
    async auth(req) {
        try {
            const authHeaders = req.headers['authorization']
            if (authHeaders !== undefined) {
                const [, jwt] = authHeaders.split(' ')
                const result = await cockroach.findWhere('TOKEN', { token: jwt })
                if(result && result.length > 0){
                    const [{token}] = result
                    return token
                }
                else return false
                    
            }
            else return false

        }
        catch (e) {
            return false
        }

    }
}