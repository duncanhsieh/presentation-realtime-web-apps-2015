xRTML.Config.debug=true;

var connectionConfig = {
  id:'myConnection',
  appKey:'3aExwQ',
  authToken:'myAuthToken',
  url:'http://ortc-developers.realtime.co/server/2.1',
  channels:[{name:'myChannel'}]
}

xRTML.ready(function(){
  xRTML.ConnectionManager.create(connectionConfig);
});

var pollConfig = {
    name:'Poll',
    id:'poll02',
    channelId: 'myChannel',
    connections:['myConnection'],
    target:'#poll02',
    votesAllowed:500,
    triggers:[{name:'poll2Trigger'}],
    voteItems:[{name:'還沒用過'},{name:'用過socket.io'},{name:'用過其他framework'}]
}

xRTML.TagManager.create(pollConfig);
