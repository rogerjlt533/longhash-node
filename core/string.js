exports.parseBit = function (number) {
    if (number.length === 8) {
        return number
    }
    const count = number.length
    for (let index = 0; index < 8 - count; index ++) {
        number = '0' + number
    }
    return number
}

exports.base64_encode = function (content) {
    return new Buffer.from(content).toString('base64')
}

exports.base64_decode = function (code) {
    return new Buffer.from(code, 'base64').toString()
}