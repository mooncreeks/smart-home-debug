const devices = require('./devices');
//'use strict';

var deviceManager = devices.deviceManager;

function sleep(seconds) {
  console.log('Sleeping ' + seconds + 's');
  setTimeout(() => {
    console.log('Waked up');
  }, seconds * 1000);
}

function sync(body, response) {
  var agentUserId = '200'; // TODO: should be an unique hash number for each user
  var devicesArray = deviceManager.getSyncDevicesArray();

  sleep(5);

  var responseData = {
    requestId: body.requestId,
    payload: {
      // errorCode
      // debugString
      agentUserId: agentUserId, // Requid for REQUEST_SYNC
      devices: devicesArray,
    }
  };

  console.log(JSON.stringify(responseData));
  response.status(200).json(responseData);
}

exports.sync = sync;
