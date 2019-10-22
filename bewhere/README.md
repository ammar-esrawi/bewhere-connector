# BeWhere Connector
- A simple connector to the BeWhere Service

## Pre-requisites
- account in BeWhere Service
- underscore module installed in Scriptr.io IDE


## Configure the connector

- edit the file ./config
```javascript
const bewhere = {
    baseUrl: "virtserver.swaggerhub.com/bewhere/BeWhere/4.0.0",
    endPoint: "https://virtserver.swaggerhub.com/bewhere/BeWhere/4.0.0/",
    name: "BeWhere ACOUNT NAME",//not used for now but it will help you distinguish your apps
    data: {
        //you can add more default config here
        
    }

};

```
## Use the connector
```javascript
var bwModule = require('./BeWhere');

var bw=new bwModule.BeWhere();
var cnMngr=bw.getConnectorManager();
var myConnector=cnMngr.getConnector();


try{
    
    var result= myConnector.getTypesBeacons();
  	return result;
}catch(exception){
    return exception;
}
```
