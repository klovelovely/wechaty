const { Wechaty } = require('wechaty')

Wechaty.instance({profile: 'kangkang'})
.on('scan', (url, code) => console.log(`Scan QR Code to login: ${code}\n${url}`))
.on('login',       user => console.log(`User ${user} logined`))
.on('message',  message => console.log(`Message: ${message}`))
.on('friend', async function(contact, request){
  if(request){
    await request.accept()
    await contact.say('halo 这里是康康酱 :3 请随意~')
  }
})
.init()
