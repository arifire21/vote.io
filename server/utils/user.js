const cockroach = require('./cockroach')

module.exports = {
    async getUserFromToken(jwt){
        const result = await cockroach.findWhere('TOKEN', {token: jwt})
        if (result && result.length > 0){
            const [{user_id}] = result
            return user_id
        }
    }
}