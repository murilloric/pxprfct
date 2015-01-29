PxPrfct - A light JS Network Layer, I promise.
=======

<p>Hello Pxprfct is a light JavaScript network layer that uses Promises for asynchronous operation.</p>
<br/>
<br/>
<b>Browser Support</b>
	<p>FireFox: 33 +</p><br/>
	<p>Chrome: 35 +</p><br/>
	<p>Safari: 7.1 +</p><br/>
	<p>I.E.: 10 + </p><br/>
	<p>OPERA: not tested</p><br/>
	<p>Chrome Mobile: Not tested</p><br/>
	<p>Safari Mobile: Not tested</p>

	*** Polyfill: http://rsvpjs-builds.s3.amazonaws.com/rsvp-latest.min.js


<br/>
<b>How to use pxprfct</b>
<p>First you need to initialze the service:	</p>
<br/>
<textarea>

	var initPxprfct = new pxprfct.init({dev_env:true,
	        dev_host:'http://localhost:8000',
	        live_host:'http://api.pxprfct.com',
	        api_end_points: {'POST_API_NAME', '/url_end_point', 'GET_API_NAME', '/url_end_point'},
	        api_request_headers:[{'header_key_one':'key_value'}, {'header_key_two':'key_value'}]});

</textarea>
<br/>
<p>Second you need to make a network call:</p>
<br/>

	function yourFunction(){
		var payload = {'name': 'Ric Murillo', 'city': 'Los Angeles'}
        pxprfct.callAPI('GET', 'POST_API_NAME', payload).then(function(success){
	    	console.log("api success", success);
	    }).catch(function(error){
	    	console.log("api error", error);
	    });
	}

<p>That's it.  If you can't get it to work.  Let me know and I try to help out.</p>
<br/>
<p>FYI. I have not tested file upload.</p> 
<br/>

<br/>

Enjoy!
<br/>
-Ric Murillo
