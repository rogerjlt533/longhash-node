exports.serialNum = function (code = '') {
    const codes = code.split('')
    let num = 0
    for (const index in codes) {
        num += (parseInt(index) + 1) * codes[index].charCodeAt(0)
    }
    return num
}

exports.serial = function (code) {
    return this.serialNum(code).toString(8).split('')
}

exports.reverseSerial = function (code) {
    const serials = this.serial(code)
    if (serials.length === 0) {
        return []
    }
    const out = []
    for (let index = serials.length; index > 0; index --) {
        out.push(serials[index - 1])
    }
    return out
}