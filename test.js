const tool = require('./index')

const content = "test\n中文"

console.log(tool.encode('longhash', content))
console.log("==================")
const value = tool.decode('longhash', tool.encode('longhash', content))
console.log(value)