



/****************************************************************************************

         ******************/





var pxprfct = {}
pxprfct._PRIVATE_ = {}
pxprfct._PRIVATE_.CONFIG;

pxprfct.init = function(args){
    console.log('init args', args.dev_env);
    this.dev_env = args.dev_env;
    this.dev_host = args.dev_host;
    this.live_host = args.live_host;
    this.api_end_points = args.api_end_points;
    this.api_request_headers = args.api_request_headers;

    this.getRequestHeaders = function(){
        return this.api_request_headers;
    }
    this.getApiHost = function(){
        var url;
        if(this.dev_env){
            url = this.dev_host;
        }else{
            url = this.live_host;
        }
        return url
    }
    this.getApiEndPoint = function(end_point){
        var end_point = this.api_end_points[end_point]
        var found_it  = (end_point != undefined)?end_point:false
        return found_it;
    }
    pxprfct._PRIVATE_.CONFIG = this;
    return this
}

pxprfct._GLOBAL_ = {}
pxprfct._GLOBAL_._can_promise = !! window.Promise || false;
pxprfct._GLOBAL_._promise_version = window['Promise'];


pxprfct._UTILS_ = {}


pxprfct._UTILS_.lootsieVALID = function(args){
    var arg = {method:args[0], path:args[1], payload:args[2]}
    if(args.length!= 3){
        return false
    }else if(arg.method != 'GET' && arg.method != 'POST' && arg.method != 'PUT'){
        return false
    }else if(pxprfct._PRIVATE_.CONFIG.getApiEndPoint(arg.path) === false){
        return false
    }else if(typeof arg.payload != 'object'){
        return false
    }else{
        return true
    }
}

pxprfct._UTILS_.callNETWORK = function(args){
    function makeHttpObject() {
      try {return new XMLHttpRequest();}
      catch (error) {}
      try {return new ActiveXObject("Msxml2.XMLHTTP");}
      catch (error) {}
      try {return new ActiveXObject("Microsoft.XMLHTTP");}
      catch (error) {}
      throw new Error("Could not create HTTP request object.");
    }

    var networkArgs = {method:args[0], path:args[1], payload:args[2]}

    try{
        if(!pxprfct._GLOBAL_._can_promise){
            pxprfct._GLOBAL_._promise_version = window['RSVP']['Promise']
        }
        return new pxprfct._GLOBAL_._promise_version(function(resolve, reject){

            var req_headers = pxprfct._PRIVATE_.CONFIG.getRequestHeaders();
            var end_point = pxprfct._PRIVATE_.CONFIG.getApiEndPoint(networkArgs.path);
            var url = pxprfct._PRIVATE_.CONFIG.getApiHost() + end_point


            var request = new makeHttpObject();
         
            request.open(networkArgs.method, url, true);
            request.setRequestHeader("Content-Type", "application/json");
            if(req_headers.length >=1){
                for(var rh = 0; rh < req_headers.length; rh++){
                    var header_key;
                    var header_key;
                    for(var ob in req_headers[rh]){
                        header_key = ob
                        header_val = req_headers[rh][ob]
                    }
                    request.setRequestHeader(header_key, header_val);
                }    
            }
            request.send(JSON.stringify(networkArgs.payload));

            request.onerror = function(e) { 
                reject({status:request.status, message:"Error", data:[]})
            };
            request.onreadystatechange=function() {
                // 0: request not initialized 
                // 1: server connection established
                // 2: request received 
                // 3: processing request 
                // 4: request finished and response is ready
                console.log('req', request);
    
                if (request.readyState===4) {
                    
                    if(request.status === 0 || request.status >= 400){
                        reject({status:request.status, message:"Error", data:[]})
                    }else{
                        var data = JSON.stringify(request.responseText)
                        var json_data = JSON.parse(data);
                        resolve({status:request.status, message:'Success', data:json_data})
                    }
                    // var return_data = request.responseText
                    // var check_data = JSON.parse(return_data)
                    // var message = 'Success';
                    // var data = check_data;
                    // if(request.status >=400){
                    //     message = 'Error';
                    //     reject({status:request.status, message:message, data:data})
                    // }else{
                    //     resolve({status:request.status, message:message, data:data})
                    // }
                }
            }
        })
    }catch(e){
        //return e;
    }
}

pxprfct.callAPI = function(args){
    try{
        var apiArgs = [arguments[0], arguments[1], arguments[2]]
        if(!pxprfct._GLOBAL_._can_promise){
            pxprfct._GLOBAL_._promise_version = window['RSVP']['Promise']
        }
        return new pxprfct._GLOBAL_._promise_version(function(resolve, reject){
            var is_valid = pxprfct._UTILS_.lootsieVALID(apiArgs);
            if(is_valid){
                var networkRequest = pxprfct._UTILS_.callNETWORK(apiArgs)
                    networkRequest.then(function(success){
                        resolve(success);
                    });
                    networkRequest.catch(function(error){
                        reject(error);
                    });
            }else{
                reject('not valid');
            }
        });
    }catch(e){
        //return e;
    }
}

/******************  ******************  ******************
                    POLYFILL PROMISE
******************  ******************  ******************/


pxprfct._UTILS_.polyFillPromise = function(){
    var d = document;
    var s = 'script';
    var id = 'polyfill-promise';
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "http://rsvpjs-builds.s3.amazonaws.com/rsvp-latest.min.js";
    fjs.parentNode.insertBefore(js, fjs);
}


/******************  ******************  ******************
                  END POLYFILL PROMISE
******************  ******************  ******************/






if(!pxprfct._GLOBAL_._can_promise){
    pxprfct._UTILS_.polyFillPromise();
        document.onreadystatechange = function(){
        if(document.readyState === 'complete'){
            //window.lootsieInit();
            console.log('add polyFillPromise')
        }
    };      
}else{
    console.log('promises are supported')
    //window.lootsieInit();
    //window.pxprfctINIT();
            
}



