const os = require('os')
// info abot the current user
const user = os.userInfo()
console.log(user)
// method to get system uptime  
console.log(`the system has been running for ${os.uptime()} seconds`)