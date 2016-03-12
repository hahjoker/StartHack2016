var UI = require('ui');
var Vector2 = require('vector2');
var ajax = require('ajax');

ajax(
  {
    url: 'http://testhorizon.gothiagroup.com/eCommerceServicesWebApi_ver339/api/v3/version',
		//url: 'localhost:8888',
		type: 'application/json',
		headers: {'X-Auth-Key':'fa3724bca93ddb81b0618f11eb0d4230777c786d7a8cbcc7f026acd85965ae56'}
  },
  function(data, status, request) {
		console.log('Version Data is: ' + data.version);
  },
  function(error, status, request) {
    console.log('The ajax request failed: ' + error);
		console.log(ajax);
  }
);

var main = new UI.Menu({
	sections: [{
		title: 'Receipts',
		items:[{
	
}]
}]
});
  

main.show();
