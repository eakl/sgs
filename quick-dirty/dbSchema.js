'use strict'






const fact_temperature = {
  _id: 1,
  sensorId: c2347df,
  timestamp: '0000-00-00 00:00:00',
  value: 23
}

const dim_customer = {
  _id: 1,
  customerId: b3259874,
  customerType: 'business',
  _name: 'elly',
  contact: 'email',
  country: 'fr',
  city: 'paris',
  long: 1.255688,
  lat: 1.479423
}

const dim_device
- id
- model



dim_plant
- id
- care_information
- age


dim_sensor
- id
- device_id
- position



fact_subscription


fact_temperature
- id
- sensorId
- ts
- value

fact_humidity
- id
- sensorId
- ts
- value
