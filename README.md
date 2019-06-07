# sgs


### Objectives

- **Keep plants at an optimal soil moisture level:** An intelligent algorithm takes care of deciding when it is appropriate to water the plants.
- **Obtain data from a local network of sensors:** A local network of sensors acquires useful data such as temperature, humidity, soil moisture, water level, rainfall, and light exposure from the plants and transmits it to the central controller (Arduino)
- **Control a water delivery system in an unobtrusive way:** The controller manages a new or existing watering system by controlling either a pump or a solenoid.
- **Obtain up-to-date weather forecasts for the current location of the device:** By using an available internet connection to parse data from an open source weather website.
- **Implement a zero-configuration environment:** By employing self-learning algorithms the system is able to optimally configure itself to the setup in which is installed.
- **Respond to external events (e.g. the plants have been watered by the user):** By intelligently using the sensors the system can detect if external events require modification to its plan of action.
- **Compensate possible hardware failures:** If the network sensor is degraded the system will resort to a fail-safe configuration. Furthermore, using carefully designed circuitry and software, reliable operation of the water delivery system is ensured.
- **Present the data gathered to the user in an intuitive way:** By means of a locally available webserver acting as a gateway between the user and the controller software.
- **Allow manual control of the watering system:** The option to manually override the system is available to the user, should the need arise.
- **Offer the possibility of fine-tuning the system, especially for advanced users:** The compromises required by the autoconfiguration can be removed if the user is willing to provide additional feedback to the system.
- **Be easily extensible: sensors should be easily added to a pre-existing network:** Flexibility is always important. The sensor network is designed so that the user can, when desired, extend it.




http://ami-2014.github.io/NULL/details.html
