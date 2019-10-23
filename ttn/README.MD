# TTN Connector
- A simple connector to the TTN(The Things Network) Service

## Pre-requisites
- account in TTN Service

## config the connector
  open config file
- protocol: must be MQTT
- name: is user defined
- url: is the end point of the ttn service 
- port: 1883, or 8883 for TLS
- clientID: optinal 
- tobic: is <ttn-app-id>/devices/<ttn-dev-id>/up
- username: Application ID
- password: Application Access Key

for more info visit https://www.thethingsnetwork.org/docs/applications/mqtt/api.html

## Setup the bridg 
- if not activated the bridge go to account settings ,go to channels and click on bridges under any channel and clicking on free trial button
- run the setup script it will setup the bridge , link it to channel , and make the api subscribe to the channel 
- you can subscribe any script to the channel