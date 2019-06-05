'use strict'

const Mqtt = require('Mqtt')
const client = Mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', () => {
  client.subscribe('sensor')
})

client.on('message', (topic, message) => {
  console.log(message.toString())
})
