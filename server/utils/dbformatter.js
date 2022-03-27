const escape = require('sql-escape')

module.exports = {
    format(entry) {
        const keys = []
        const values = []
        Object.entries(entry).forEach(([_key, _value]) => {
            const key = escape(_key)
            const value = escape(_value)
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