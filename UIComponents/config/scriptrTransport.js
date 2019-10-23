var wssConfig = ["wsClientProvider",function (wsClientProvider) {
  wsClientProvider.setBaseUrl("wss://api-convergia.scriptrapps.io");  
  wsClientProvider.setToken("UjlENDA1QUFCRA==");
  wsClientProvider.setPublishChannel("requestChannel");
  wsClientProvider.setSubscribeChannel("responseChannel");
}];

var httpsConfig = ["httpClientProvider",function (httpClientProvider) {
  httpClientProvider.setBaseUrl("https://api-convergia.scriptrapps.io");
  httpClientProvider.setToken("UjlENDA1QUFCRA==");
}]