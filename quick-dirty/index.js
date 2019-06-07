'use strict'

const Mqtt = require('mqtt')
const { config } = require('./config')


/**
 * 1. Connect
 * 2. Check that the connection is fine.
 * 3.
 * 4.
 * 5.
 * 6. Reconnect if needed
 */





// Launch the server
const client = Mqtt.connect(config.mqtt.uri) // , config['mqtt']['options']

client.on('connect', (connack) => {
  if (connack.returnCode == 0) {
    console.log('Connection Accepted')
  }

  setInterval(() => {
    const payload = {temp: Math.random().toString(10).substr(2,2)}
    client.publish('temperature', JSON.stringify(payload))
  }, 100)
})


function sendSys () {}
function sendData () {}

// Subscribe
'ping'

// When the ping is received, a pong (with system data and sensor data must be sent back) --> If no ping is received, put the wall on survial mode (default)
client.on('message', (tpc, msg, pck) => {
  switch (msg.req) {
    case 'sys':
      sendSys(msg.id)
      break
    case 'data':
      sendData(msg.id)
      break
    default:
      handleDefault()
  }
})



// function subscribe () {
//   client.subscribe('topic', (err, granted) => {
//     granted.forEach(
//       console.log(`Successfully subscribed to ${}`)
//     )
//   })
// }










  // connack.sessionPresent // true
  // connack.returnCode // 0
  // 0: 'Connection accepted'
  // 1: 'Connection refused; unacceptable protocol version'
  // 2: 'Connection refused; identifier rejected'
  // 3: 'Connection refused; server unavailable'
  // 4: 'Connection refused; bad user name or password'
  // 5: 'Connection refused; not authorized'







// client.on('error', (err) => {
//   console.log('ERROR: ', err)
// })
//
// client.on('connect', (connack) => {
//   console.log(connack)
//   console.log('connected')
// })
//
//
// client.publish('topic', "{test1: true}", () => {
//   console.log('published:')
// })


// options.protocol
// options.host
// options.port
// options.hostname
// options.keepalive: 60
// options.clean: true
// options.clientId: 'mqttjs_8abdf304'
