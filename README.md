PxPrfct.com - A light Network Layer, I promise.
=======

Hello Pxprfct is a light network layer that uses Promises for asynchronous operation.
<br/>
<b>Browser Support</b>
	FireFox: 33 +
	Chrome: 35 +
	Safari: 7.1 +
	I.E.: 10 + 
	OPERA: not tested
	Chrome Mobile: Not tested
	Safari Mobile: Not tested

	*** Polyfill: http://rsvpjs-builds.s3.amazonaws.com/rsvp-latest.min.js
<br/>
<b>How to use pxprfct</b>

<br/>

<p>First you need to initialze the service. Here is an example:	
</p>
<br/>
<textarea>

	var initPxprfct = new pxprfct.init({dev_env:true,
	        dev_host:'http://localhost:8000',
	        live_host:'http://pxprfct.com',
	        api_end_points: {'POST_API_NAME', '/url_end_point', 'GET_API_NAME', '/url_end_point'},
	        api_request_headers:[{'header_key_one':'key_value'}, {'header_key_two':'key_value'}]});

</textarea>
<br/>
<p>Second you need to make a network call. Here is an example:</p>
<br/>
<textarea>
		var payload = {'name': 'Ric Murillo', 'city': 'Los Angeles'}
        pxprfct.callAPI('GET', 'POST_API_NAME', payload).then(function(success){
	    	console.log("api success", success);
	    }).catch(function(error){
	    	console.log("api error", error);
	    });

</textarea>

<p>That's it.  If you can't get it to work.  Let me know and I try to help out.</p>
<br/>
<p>FYI. I have not tested file upload.</p> 
<br/>

<br/>

Enjoy!
<br/>
-Ric Murillo
