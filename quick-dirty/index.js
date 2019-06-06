'use strict'

const Mqtt = require('mqtt')
const config = require('./config.json')


// Launch the server
const client = Mqtt.connect(config['mqtt']['uri'], config['mqtt']['options'])

client.on('error', (err) => {
  console.log('ERROR: ', err)
})

client.on('connect', (connack) => {
  console.log(connack)
  console.log('connected')
})


client.publish('topic', "{test1: true}", () => {
  console.log('published:')
})
