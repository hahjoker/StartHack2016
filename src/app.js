var UI = require('ui');
var Vector2 = require('vector2');
var ajax = require('ajax');
var main = new UI.Menu({
	sections: 
	[{
		title: 'Receipts',
		items:[{  title: 'Order 08852',
						subtitle: 'Driving Simulator 2016',
						icon: 'images/fmb.png'
	
					},
					{
						title: 'Order 08853',
						subtitle: 'Racing Gloves',
						icon: 'images/fmb.png'
					},
					{
						title: 'Order 08854',
						subtitle: 'Helmet',
						icon: 'images/fmb.png'
					},
					{
						title: 'Order 08855',
						subtitle: 'Racing Suit',
						icon: 'images/fmb.png'
					},
					{
						title: 'Order 08856',
						subtitle: 'Roll Cage',
						icon: 'images/fmb.png'
					}]
	}]
});

main.show();
main.on('select',function(e) 
	{	
		var secondScreen= new UI.Window({fullscreen: true}); 
		secondScreen.action('select', 'images/menuicon.png');
		var img= new UI.Image({
			image: 'images/qr.png'	});	
		secondScreen.add(img);		
		secondScreen.show();
		secondScreen.on('click', 'select', function(e){
			var menu=new UI.Menu({
					sections: 
			[{
				title: 'Options',
				items:[{  title: 'Pay For',
									icon: 'images/dollar.png',
								subtitle:'Complete Order'

							},//check elemmenent epre sossfsldkjfslkdjf
							{
								title: 'Check Shipping',
								icon: 'images/truck.png'
							},
							{
								title: 'Return',
								icon: 'images/return.png'
							},
							{
								title: 'Cancel Order',
								icon: 'images/cancel.png'
							}]
					}]
				});
				menu.show();
			var finalmenu= new UI.Card({scrollable: true}, {style: "small"} );
				menu.on('select',function(e) {
						switch(e.itemIndex) {
    						case 0:
										ajax(
										{
											url: 'http://testhorizon.gothiagroup.com/eCommerceServicesWebApi_ver339/api/v3/checkout/03780080-b083-409c-bbc6-9713a45849b9/complete',
											//type: 'application/json',
											headers: {'X-Auth-Key':'fa3724bca93ddb81b0618f11eb0d4230777c786d7a8cbcc7f026acd85965ae56'}
										},function(data, status, request) {
											finalmenu.body(data);
											
										},
											function(error, status, request) {
												finalmenu.body('The ajax request failed: ' + error);
											}
										);
       							break;
    						case 1:
									//shipping
								ajax(
										{url: 'http://testhorizon.gothiagroup.com/eCommerceServicesWebApi_ver339/api/v3/orders/ORDER08853/shipments',
											//type: 'application/json',
											headers: {'X-Auth-Key':'fa3724bca93ddb81b0618f11eb0d4230777c786d7a8cbcc7f026acd85965ae56'}
										},
										function(data, status, request) {
											finalmenu.body(data);
											
										},
										function(error, status, request) {
											console.log('The ajax request failed: ' + error);
										}
									);
									
        					break;
								case 2:
									//return
								ajax(
										{url: 'http://testhorizon.gothiagroup.com/eCommerceServicesWebApi_ver339/api/v3/orders/ORDER08853/refunds/full',
											//type: 'application/json',
											headers: {'X-Auth-Key':'fa3724bca93ddb81b0618f11eb0d4230777c786d7a8cbcc7f026acd85965ae56'}
										},
										function(data, status, request) {
											finalmenu.body(data);
											
										},
										function(error, status, request) {
											console.log('The ajax request failed: ' + error);
										}
									);
       						break;
    						case 3:
									//cancel order
									ajax(
										{url: 'http://testhorizon.gothiagroup.com/eCommerceServicesWebApi_ver339/api/v3/orders/ORDER08853/shipments',
											//type: 'application/json',
											headers: {'X-Auth-Key':'fa3724bca93ddb81b0618f11eb0d4230777c786d7a8cbcc7f026acd85965ae56'}
										},
										function(data, status, request) {
											finalmenu.body(data);
											
										},
										function(error, status, request) {
											console.log('The ajax request failed: ' + error);
										}
									);
        					break;
							}
						finalmenu.show();
						 console.log('Currently selected item is #' + e.itemIndex + ' of section #' + e.sectionIndex);
						 console.log('The item is titled "' + e.item.title + '"');
				});
		});
	});