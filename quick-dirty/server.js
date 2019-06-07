'use strict'

const Mqtt = require('mqtt')
const { config } = require('./config')

// Launch the server
const client = Mqtt.connect(config.mqtt.uri) // , config['mqtt']['options']

client.on('connect', (connack) => {
  if (connack.returnCode == 0) {
    console.log('Server Connection Accepted')
  }

  client.subscribe('temperature')
})



client.on('message', (topic, message) => {
  const temp = {temp: parseInt(JSON.parse(message).temp, 10)}
  console.log(temp)
})
