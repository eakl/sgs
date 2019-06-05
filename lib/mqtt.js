'use strict'

// Refers to client instance in the config object to use the client accros all file
// with const mqttClient = require('../config').mqtt

const Mqtt = require('mqtt')
const config = require('../config/index.json')

const client  = Mqtt.connect(config['uri'], config['options'])

async function mqttConnect () {
  if (config.mqtt.instance) {
    return congif.mqtt.instance
  } else {
    try {
      console.log(`Connection to ${config.mqtt.uri} on port ${config.mqtt.port}`)
      config.mqtt.instance = Mqtt.connect(config.mqtt.uri, config.mqtt.options)
      console.log(`Connected to ${config.mqtt.instance} on port ${config.mqtt.port}`)
      return config.mqtt.instance
    } catch (err) {
      throw new Error (err)
    }
  }
}

// Recurring task should be an async function?
function pub(topic, message, every) {
  if (config.mqtt.instance) {
    if (every) {
      client.publish(topic, message)
    } else {
      client.publish(topic, message) // do something with a recurring delay - not setInterval
    }
  } else {
    // Recursive pub function?
    // Function to be fixed
    await mqttConnect().then(() => pub(topic, message, every))
  }
}

// async function connect (dbName) {
//   if (config[dbName].db) {
//     return config[dbName].db
//   } else {
//     try {
//       const url = `mongodb://${config[dbName].host}:${config[dbName].port}/${config[dbName].name}`
//       console.log(`Connecting to ${url}`)
//       config[dbName].db = await MongoClient.connect(url, config[dbName].opts)
//       console.log(`Connected to MongoDB: ${config[dbName].db.s.databaseName}`)
//       return config[dbName].db
//     } catch (err) {
//       throw new Error(err)
//     }
//   }
// }
//
// function close (dbName) {
//   if (config[dbName].db) {
//     console.log(`Closing ${config[dbName].name} connection.`)
//     config[dbName].db.close()
//   }
// }

module.exports = {
  connect,
  pub,
  sub
}
