const {
  Wechaty,
  Message
} = require('wechaty')

Wechaty.instance({
    profile: 'kangkang'
  })
  .on('scan', (url, code) => console.log(`Scan QR Code to login: ${code}\n${url}`))
  .on('login', user => console.log(`User ${user} logined`))
  .on('message', message => {
    console.log(`Message: ${message}`);

    const fromContact = message.from()
    const fromContent = message.content()
    if (!message.self() && /ruobing/.test(fromContact)) {
      if (/康|我|你|他|这|哇|啊|呀|吼|惹|肥/.test(fromContent)) {
        var dice100 = Math.round(Math.random()*100);
        var text = ':3';
        if(dice100 < 25) text = '喵喵喵 🐱'
        if(dice100 < 50) text = '咩咩咩 🐸'
        if(dice100 < 75) text = 'biubiubiu 🐶'
        if(dice100 < 100) text = ' 🌚 🌚 🌚'
        console.log(text);
      }
    }
  })
  .on('friend', async function (contact, request) {
    if (request) {
      await request.accept()
      await contact.say('halo 这里是康康酱 :3 请随意~')
    }
  })
  .init()