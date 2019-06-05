'use strict'

// Refers to client instance in the config object to use the client accros all file
// with const mqttClient = require('../config').mqtt

const Mqtt = require('mqtt') // to delete
const client  = Mqtt.connect('mqtt://test.mosquitto.org') // to delete
