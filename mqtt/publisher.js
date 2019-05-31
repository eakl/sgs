'use strict'

const Mqtt = require('mqtt')
const client  = Mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', () => {
  setInterval(() => {
    client.publish('sensor', 'Hello mqtt')
  }, 1000)
})
