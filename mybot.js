const {
  Wechaty,
  Message
} = require('wechaty')

global.threshold = 500;

Wechaty.instance({
    profile: 'kangkang'
  })
  .on('scan', (url, code) => console.log(`Scan QR Code to login: ${code}\n${url}`))
  .on('login', user => console.log(`User ${user} logined`))
  .on('message', message => {

    console.log(`Message: ${message}`);

    if (typeof global.nextTime === 'undefined') {
      global.nextTime = Date.now() + global.threshold;
    } else if (Date.now() < global.nextTime) {
      return false;
    } else {
      global.nextTime = Date.now() + global.threshold;
    }

    const fromContact = message.from()
    const fromContent = message.content()
    debugger
    if (!message.self() && /ruobing|大家爱我|丁鸽/.test(fromContact.obj.name)) {
      if (/\d|康|我|你|他|这|哇|啊|呀|吼|惹|肥/.test(fromContent)) {
        var dice100 = Math.round(Math.random() * 100);
        var text = ':3';
        if (dice100 < 25) text = '喵喵喵 🐱'
        if (dice100 > 25 && dice100 < 50) text = '咩咩咩 🐸'
        if (dice100 > 50 && dice100 < 75) text = 'biubiubiu 🐶'
        if (dice100 > 75 && dice100 < 100) text = ' 🌚 🌚 🌚'
        console.log(dice100)
        console.log(text);
        message.say(text);
      }
    }
  })
  // .on('friend', async function (contact, request) {
  //   if (request) {
  //     await request.accept()
  //     await contact.say('halo 这里是康康酱 :3 请随意~')
  //   }
  // })
  .init()