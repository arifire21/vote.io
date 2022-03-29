const format = require('pg-format')

module.exports = {
    formatObj(entry) {
        const keys = []
        const values = []
        Object.entries(entry).forEach(([_key, _value]) => {
            // TODO ESCAPE THIS LATER
            const key = format('%I',_key)
            const value = format('%s',_value)
            // TODO ESCAPE THIS LATER
            keys.push(key)
            values.push(value)
        })

        return {
            keys: keys,
            values: values,
            placeholderValues: values.map((_,idx) => '$'+ String(idx + 1))
        }
    }
}