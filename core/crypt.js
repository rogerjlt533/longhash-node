const string = require('./string')

exports.filterSerial = function (serials) {
    if (serials.length === 0) {
        return {count: 0, serials: []}
    }
    if (serials.length === 1) {
        if (serials[0] === 7) {
            serials.push(0)
        } else {
            serials.push(7)
        }
    }
    return {count: serials.length, serials}
}

exports.convert = function (value, serials) {
    const result = this.filterSerial(serials)
    if (result.count === 0) {
        return value
    }
    let values = value.split('')
    for (let index = 0; index < result.serials.length - 1; index ++) {
        const from = result.serials[index]
        const dest = result.serials[index + 1]
        let temp = values[from]
        values[from] = values[dest]
        values[dest] = temp
        temp = null
    }
    return values.join('')
}

exports.encode = function (content, serials = []) {
    if (serials.length === 0) {
        return string.base64_encode(content)
    }
    const values = []
    while (content.length > 0) {
        values.push(this.convert(content.slice(0, 8), serials))
        content = content.substr(8)
    }
    return string.base64_encode(values.join(''))
}

exports.decode = function (content, serials = []) {
    content = string.base64_decode(content);
    if (serials.length === 0) {
        return content
    }
    const values = []
    while (content.length > 0) {
        values.push(this.convert(content.slice(0, 8), serials))
        content = content.substr(8)
    }
    return values.join('')

}