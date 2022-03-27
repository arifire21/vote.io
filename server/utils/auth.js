const cockroach = require('./cockroach')



module.exports = {
    async auth(req) {
        try {
            const authHeaders = req.headers['authorization']
            if (authHeaders !== undefined) {
                const [, jwt] = authHeaders.split(' ')
                const result = await cockroach.findWhere('TOKEN', { token: jwt })
                return result.length > 0
            }
            else return false

        }
        catch (e) {
            return false
        }

    }
}