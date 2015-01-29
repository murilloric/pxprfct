PxPrfct - A light JS Network Layer, I promise.
=======

<p>Hello Pxprfct is a light JavaScript network layer that uses Promises for asynchronous operation.</p>

<b>Browser Support</b>
	<p> FireFox: 33 + , 
	    Chrome: 35 + , 
		Safari: 7.1 + ,
		I.E.: 10 + ,
		OPERA: not tested,
		Chrome Mobile: Not tested,
		Safari Mobile: Not tested</p>

	*** Polyfill: http://rsvpjs-builds.s3.amazonaws.com/rsvp-latest.min.js


<br/>
<b>How to use pxprfct</b>
<p>First you need to initialze the service:	</p>
<textarea>
	
	<script type="text/javascript" src="http://pxprfct.appspot.com/app/lib/1.0.1/pxprfct.min.js"> </script>
	var initPxprfct = new pxprfct.init({dev_env:true,
	        dev_host:'http://localhost:8000',
	        live_host:'http://api.pxprfct.com',
	        api_end_points: {'POST_API_NAME', '/url_end_point', 'GET_API_NAME', '/url_end_point'},
	        api_request_headers:[{'header_key_one':'key_value'}, {'header_key_two':'key_value'}]});

</textarea>
<br/>
<p>Second you need to make a network call:</p>

	function yourFunction(){
		var payload = {'name': 'Ric Murillo', 'city': 'Los Angeles'}
        pxprfct.callAPI('GET', 'POST_API_NAME', payload).then(function(success){
	    	console.log("api success", success);
	    }).catch(function(error){
	    	console.log("api error", error);
	    });
	}

<p>That's it.  If you can't get it to work.  Let me know and I try to help out.</p>
<p>FYI. I have not tested file upload.</p> 
<br/>
<br/>

Enjoy!
<br/>
-Ric Murillo
