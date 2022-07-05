const bite = require('./core/bite')
const crypt = require('./core/crypt')
const salt = require('./core/salt')

exports.encode = function (code, content) {
    const serials = salt.serial(code)
    return crypt.encode(bite.text2Bin(content), serials)
}

exports.decode = function (code, content) {
    const serials = salt.reverseSerial(code)
    return bite.bin2Text(crypt.decode(content, serials))
}