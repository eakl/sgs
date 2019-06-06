'use strict'

const Mqtt = require('mqtt')
const config = require('./config.json')


// Launch the server
const client = Mqtt.connect(config['mqtt']['uri'], config['mqtt']['options'])




client.on('error', (err) => {
  console.log(err)
})

client.on('connect', (connack) => {
  console.log(connack)
})

client.on('reconnect', () => {})


client.on('message', (topic, message, packet) => {})

client.on('packetsend', (packet) => {})
client.on('packetreceive', (packet) => {})

client.on('close', () => {})
client.on('offline', () => {})
client.on('end', () => {})








client.publish('topic', 'message', opts, (err))

['topic1', 'topic2', 'topic3']
{'topic1': {qos: 0}, 'topic2': {qos: 1}}
client.subscribe('topic', opts, (err, granted))

['topic1', 'topic2', 'topic3']
client.unsubscribe('topic', opts, (err))

client.end(())

client.reconnect()

client.connected()


client.getLastMessageId()


client.reconnecting()



// Store

const store = Mqtt.store(opts) // {clean: bool}

store.put({messageId: 0, ...}, ())
store.createStream()
store.del({messageId: 0, ...}, ())
store.close(())




//
//
//
//
//
//
//
//
//
//
//
//
// async function mqttConnect () {
//   if (config.mqtt.instance) {
//     return congif.mqtt.instance
//   } else {
//     try {
//       console.log(`Connection to ${config.mqtt.uri} on port ${config.mqtt.port}`)
//       config.mqtt.instance = await Mqtt.connect(config.mqtt.uri, config.mqtt.options)
//       console.log(`Connected to ${config.mqtt.instance} on port ${config.mqtt.port}`)
//       return config.mqtt.instance
//     } catch (err) {
//       throw new Error (err)
//     }
//   }
// }
//
// // Recurring task should be an async function?
// function pub(topic, message, every) {
//   if (config.mqtt.instance) {
//     if (every) {
//       client.publish(topic, message)
//     } else {
//       client.publish(topic, message) // do something with a recurring delay - not setInterval
//     }
//   } else {
//     // Recursive pub function?
//     // Function to be fixed
//     await mqttConnect().then(() => pub(topic, message, every))
//   }
// }
//
// function sub(topic, message, every) {
//   if (config.mqtt.instance) {
//     if (every) {
//       client.publish(topic, message)
//     } else {
//       client.publish(topic, message) // do something with a recurring delay - not setInterval
//     }
//   } else {
//     // Recursive pub function?
//     // Function to be fixed
//     await mqttConnect().then(() => pub(topic, message, every))
//   }
// }
