'use strict'

const Mqtt = require('mqtt')
const { config } = require('./config')

// Launch the server
const client = Mqtt.connect(config.mqtt.uri) // , config['mqtt']['options']

client.on('connect', (connack) => {
  if (connack.returnCode == 0) {
    console.log('Connection Accepted')
  }
})



function subscribe () {
  client.subscribe('topic', (err, granted) => {
    granted.forEach(
      console.log(`Successfully subscribed to ${}`)
    )
  })
}



client.publish('topic', data, )




  console.log(connack)

  connack.sessionPresent // true
  connack.returnCode // 0
  0: 'Connection accepted'
  1: 'Connection refused; unacceptable protocol version'
  2: 'Connection refused; identifier rejected'
  3: 'Connection refused; server unavailable'
  4: 'Connection refused; bad user name or password'
  5: 'Connection refused; not authorized'
  connack
  connack
  connack
  connack
  connack
  connack
  connack
  connack






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
