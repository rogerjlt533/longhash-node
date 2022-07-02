const bite = require('./core/bite')
const crypt = require('./core/crypt')
const salt = require('./core/salt')
const string = require('./core/string')

exports.encode = function (code, content) {
    const serials = salt.serial(code)
    return crypt.encode(bite.text2Bin(content), serials)
}

exports.decode = function (code, content) {
    const serials = salt.reverseSerial(code)
    return bite.bin2Text(crypt.decode(content, serials))
}

var str = "牛耀\n民";
console.log(this.encode("longhash", str))
console.log(this.decode('longhash', 'MTExMDAxMTExMDAwMTAwMTEwMTExMDAxMTEwMDEwMTAxMDAwMDAwMDEwMDAwMDAwMDAxMDEwMDAxMTEwMDExMDEwMDEwMDEwMTAwMTAwMDE='))

// console.log(new Buffer.from("hello").toString('base64'))
// console.log(new Buffer.from('MTExMDAxMTExMDAwMTAwMTEwMTExMDAxMTEwMDEwMTAxMDAwMDAwMDEwMDAwMDAwMDAxMDEwMDAxMTEwMDExMDEwMDEwMDEwMTAwMTAwMDE=', 'base64').toString())
// console.log(new Array(new TextEncoder().encode('牛耀民')).map(v => v.toString(16)))
// (new Array(...x)).map(v=>v.toString(16)).join()
// //"e4,b8,ad,e6,96,87"  上面先转普通数组, TypedArray不能用map将数字转为字符串, 然后再转16进制表示的字符串,再连接

// 逆类是TextDecoder, 这个支持gbk
// new TextDecoder().decode(new Uint8Array([228, 184, 173, 230, 150, 135]))
// //输出 "中文"
// new TextDecoder('gbk').decode(new Uint8Array([0xd6,0xd0, 0xce, 0xc4]))
// //输出 "中文"
// (new TextDecoder('gbk')).decode(new Uint16Array([0xd6d0, 0xcec4]))
// // "兄奈", 字节序问题, 这儿应该是小端字节序, 将字节反过来就对了
// (new TextDecoder('gbk')).decode(new Uint16Array([0xd0d6, 0xc4ce]))
// // "中文"
// console.log(new TextEncoder().encode('牛耀民'))
// console.log(bite.text2Bin(str))
// var val = "";
// for(var i = 0; i < str.length; i++){
//     if (val == "")
//         val = str.charCodeAt(i).toString(16);
//     else
//         val += "," + str.charCodeAt(i).toString(16);
// }
// console.log(val);
// console.log(parseInt("725b", 16).toString(2))
// console.log(bite.text2Bin("a\nb"))

// console.log(salt.serial('ab'))

