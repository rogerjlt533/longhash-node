const string = require('./string')

exports.text2Bin = function (content) {
    const hexes = []
    const code_list = new TextEncoder().encode(content)
    for (const item of code_list) {
        hexes.push(string.parseBit(item.toString(2)))
    }
    return hexes.join("");
}

exports.bin2Text = function (content) {
    const hexes = []
    while (content.length > 0) {
        const value = parseInt(content.slice(0, 8), 2)
        hexes.push(value)
        content = content.substr(8)
    }
    return new TextDecoder().decode(new Uint8Array(hexes))
}