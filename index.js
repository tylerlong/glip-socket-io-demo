const GlipSocket = require('glip.socket.io')
const client = new GlipSocket({
  host: process.env.HUBOT_GLIP_HOST || 'app.glip.com',
  port: process.env.HUBOT_GLIP_PORT || 443,
  user: process.env.HUBOT_GLIP_EMAIL,
  password: process.env.HUBOT_GLIP_PASSWORD
})
client.on('message', (type, data) => {
  console.log(data)
})
client.start()
