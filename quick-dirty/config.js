'use strict'

const config = {
  mqtt: {
    uri: 'mqtt://test.mosquitto.org',
    port: 3000,
    options: {
      clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
      clean: true, // set to false to receive QoS 1 and 2 messages while offline
      keepalive: 60, // seconds, set to 0 to disable
      reconnectPeriod: 1000, // milliseconds, interval between two reconnections
      connectTimeout: 30 * 1000, // milliseconds, time to wait before a CONNACK is received
      username: 'elias',
      password: '1234',
      will: {
        topic: '',
        payload: '',
        qos: 2,
        retain: 1
      }
    }
  }
}

module.exports = {
  config
}
