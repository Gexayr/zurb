//stack
    
var addedElement = document.createElement('style');
addedElement.appendChild(document.createTextNode('.stof-ph-circle-fill{background-color:#303030!important;}    .stof-ph-img-circle{background-color:#303030!important;}div#callme::after{content: \'\';position: absolute;left: 102px;bottom: 37px;border: 10px solid transparent;transform: rotate(-90deg);z-index: -10;border-top: 17px solid #303030;}.cme-btn, .cme-form .cme-btn{background:#303030!important;}.cme-form h6{background:#303030!important;}.cme-form .cme-cls{ background:url(https://xn--80aaxadpodfvnz1a1g.xn--p1ai/script/templates/blackred/escape2.png) repeat-x, linear-gradient(45deg, #303030 86%, rgba(254, 254, 254, 0) 53%, rgba(254,254,254,0) 100%)!important;background-repeat-y: no-repeat!important;}'));
var ssA = document.getElementsByTagName('script')[0]; 
ssA.parentNode.insertBefore(addedElement, ssA);
                

var ready = (function(){    




    var readyList,
        DOMContentLoaded,
        class2type = {};
        class2type["[object Boolean]"] = "boolean";
        class2type["[object Number]"] = "number";
        class2type["[object String]"] = "string";
        class2type["[object Function]"] = "function";
        class2type["[object Array]"] = "array";
        class2type["[object Date]"] = "date";
        class2type["[object RegExp]"] = "regexp";
        class2type["[object Object]"] = "object";

    var ReadyObj = {
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,
        // A counter to track how many items to wait for before
        // the ready event fires. See #6781
        readyWait: 1,
        // Hold (or release) the ready event
        holdReady: function( hold ) {
            if ( hold ) {
                ReadyObj.readyWait++;
            } else {
                ReadyObj.ready( true );
            }
        },
        // Handle when the DOM is ready
        ready: function( wait ) {
            // Either a released hold or an DOMready/load event and not yet ready
            if ( (wait === true && !--ReadyObj.readyWait) || (wait !== true && !ReadyObj.isReady) ) {
                // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
                if ( !document.body ) {
                    return setTimeout( ReadyObj.ready, 1 );
                }

                // Remember that the DOM is ready
                ReadyObj.isReady = true;
                // If a normal DOM Ready event fired, decrement, and wait if need be
                if ( wait !== true && --ReadyObj.readyWait > 0 ) {
                    return;
                }
                // If there are functions bound, to execute
                readyList.resolveWith( document, [ ReadyObj ] );

                // Trigger any bound ready events
                //if ( ReadyObj.fn.trigger ) {
                //  ReadyObj( document ).trigger( "ready" ).unbind( "ready" );
                //}
            }
        },
        bindReady: function() {
            if ( readyList ) {
                return;
            }
            readyList = ReadyObj._Deferred();

            // Catch cases where $(document).ready() is called after the
            // browser event has already occurred.
            if ( document.readyState === "complete" ) {
                // Handle it asynchronously to allow scripts the opportunity to delay ready
                return setTimeout( ReadyObj.ready, 1 );
            }

            // Mozilla, Opera and webkit nightlies currently support this event
            if ( document.addEventListener ) {
                // Use the handy event callback
                document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );
                // A fallback to window.onload, that will always work
                window.addEventListener( "load", ReadyObj.ready, false );

            // If IE event model is used
            } else if ( document.attachEvent ) {
                // ensure firing before onload,
                // maybe late but safe also for iframes
                document.attachEvent( "onreadystatechange", DOMContentLoaded );

                // A fallback to window.onload, that will always work
                window.attachEvent( "onload", ReadyObj.ready );

                // If IE and not a frame
                // continually check to see if the document is ready
                var toplevel = false;

                try {
                    toplevel = window.frameElement == null;
                } catch(e) {}

                if ( document.documentElement.doScroll && toplevel ) {
                    doScrollCheck();
                }
            }
        },
        _Deferred: function() {
            var // callbacks list
                callbacks = [],
                // stored [ context , args ]
                fired,
                // to avoid firing when already doing so
                firing,
                // flag to know if the deferred has been cancelled
                cancelled,
                // the deferred itself
                deferred  = {

                    // done( f1, f2, ...)
                    done: function() {
                        if ( !cancelled ) {
                            var args = arguments,
                                i,
                                length,
                                elem,
                                type,
                                _fired;
                            if ( fired ) {
                                _fired = fired;
                                fired = 0;
                            }
                            for ( i = 0, length = args.length; i < length; i++ ) {
                                elem = args[ i ];
                                type = ReadyObj.type( elem );
                                if ( type === "array" ) {
                                    deferred.done.apply( deferred, elem );
                                } else if ( type === "function" ) {
                                    callbacks.push( elem );
                                }
                            }
                            if ( _fired ) {
                                deferred.resolveWith( _fired[ 0 ], _fired[ 1 ] );
                            }
                        }
                        return this;
                    },

                    // resolve with given context and args
                    resolveWith: function( context, args ) {
                        if ( !cancelled && !fired && !firing ) {
                            // make sure args are available (#8421)
                            args = args || [];
                            firing = 1;
                            try {
                                while( callbacks[ 0 ] ) {
                                    callbacks.shift().apply( context, args );//shifts a callback, and applies it to document
                                }
                            }
                            finally {
                                fired = [ context, args ];
                                firing = 0;
                            }
                        }
                        return this;
                    },

                    // resolve with this as context and given arguments
                    resolve: function() {
                        deferred.resolveWith( this, arguments );
                        return this;
                    },

                    // Has this deferred been resolved?
                    isResolved: function() {
                        return !!( firing || fired );
                    },

                    // Cancel
                    cancel: function() {
                        cancelled = 1;
                        callbacks = [];
                        return this;
                    }
                };

            return deferred;
        },
        type: function( obj ) {
            return obj == null ?
                String( obj ) :
                class2type[ Object.prototype.toString.call(obj) ] || "object";
        }
    }
    // The DOM ready check for Internet Explorer
    function doScrollCheck() {
        if ( ReadyObj.isReady ) {
            return;
        }

        try {
            // If IE is used, use the trick by Diego Perini
            // http://javascript.nwbox.com/IEContentLoaded/
            document.documentElement.doScroll("left");
        } catch(e) {
            setTimeout( doScrollCheck, 1 );
            return;
        }

        // and execute any waiting functions
        ReadyObj.ready();
    }
    // Cleanup functions for the document ready method
    if ( document.addEventListener ) {
        DOMContentLoaded = function() {
            document.removeEventListener( "DOMContentLoaded", DOMContentLoaded, false );
            ReadyObj.ready();
        };

    } else if ( document.attachEvent ) {
        DOMContentLoaded = function() {
            // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
            if ( document.readyState === "complete" ) {
                document.detachEvent( "onreadystatechange", DOMContentLoaded );
                ReadyObj.ready();
            }
        };
    }
    function ready( fn ) {
        // Attach the listeners
        ReadyObj.bindReady();

        var type = ReadyObj.type( fn );

        // Add the callback
        readyList.done( fn );//readyList is result of _Deferred()
    }
    return ready;
})();
//end stack

var re=/scrip[^/].{23}/;
function getScriptFolder (e) { // find script folder
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].src.indexOf(e) >= 0) {
            var res = scripts[i].src.substring(0, scripts[i].src.indexOf(e));
        }
    }

    return res.replace(re, "script");

}

var cmeData = {
    // показывать кнопку справа? (1 - да, 0 - нет)
    "showButton":   "1", 

    // укажите через запятую названия полей
    // textarea: ставьте перед названием минус (-)
    // select: ставьте перед названием "!" и разделяйте варианты для выбора таким же символом
    // checkbox: знак вопроса перед именем
    // если поле должно быть обязательно заполнено, после его название добавьте * (например, имя*)
    "fields": "Телефон: (Введите номер телефона), -Представьтесь: (Введите Ваше имя)",

    // заголовок формы
    "title": "Заказать обратный звонок",

    // надпись на кнопке
    "button": "Жду звонка", 

    // показывать ли время звонка (1 - да, 0 - нет)
    "callTime": "0", 
    "txt.callTime": "Время звонка",
    "txt.today": "сегодня",
    "txt.tmrw": "завтра",
    "txt.till": "до",
    "txt.hours": "час.",

    "alert.sending": "Идет отправка", // идет отправка
    "alert.setCallTime": "Укажите время звонка", // Укажите время звонка

    "mail.referrer": "Источник трафика", // откуда пришел посетитель
    "mail.url": "Страница с запросом", // страница, откуда отправлен запрос

    // начало и конец рабочего дня в часах, используется для времени звонка
    "workStart": "8",
    "workEnd": "19",

    // центрировать форму на экране? (1 - центр экрана, 0 - у места клика)
    "center": "1",

    // шаблон (default, apple, vk, fb, blackred, pink)
    "template": "blackred",

    // лицензия (можно купить на get.nazartokar.com)
    "license": "0",
    "showCopyright": "1"
}

   

   callMe();








function callMe() {

var tpl = {}, cmeForm, cmeCSS = document.createElement("link"); // add css
cmeCSS.type="text/css";
cmeCSS.rel="stylesheet";
cmeCSS.href=getScriptFolder("callback_st_of.js") + "templates/" + cmeData["template"] + "/style.css";
document.getElementsByTagName("head")[0].appendChild(cmeCSS);








var hr = new Date().getHours(); // get usr hour

var callmeData = { // data to send
    fields: cmeData["fields"],
    title: cmeData["title"],
    calltime: cmeData["callTime"],
    time_start: cmeData["startWork"],
    time_end: cmeData["endWork"],
    button: cmeData["button"],
    hr: hr
};

function replaceData(data, key, str) {  // replace template
    if (!data || !key || !str) { return ""; }
    return data = data.replace((new RegExp("{{:"+key+"}}", "gi")), str);
}

function rpl(e,d,r) { // replace
    if (!d) {
        var t = ["\"", "'", "~", ";", "{", "}"];
        for (var i=0; i<t.length; i++) {
            var o = new RegExp(t[i], "g");
            e = e.replace(o, "");
        }
    } else {
        o = new RegExp(d, "g");
        e = e.replace(o, r);
    }
    return e;
};


function loadHTML() { // load templates html
var schetchik=0; 
    if (!tpl.length) { 
            var elementsn = document.querySelectorAll(".cme-form .cme-template");
            Array.prototype.forEach.call(elementsn, function(el){
                schetchik++;
     
            if(schetchik<=6){tpl[getData(el)] = el.innerHTML;
            el.innerHTML = ""}
        });
    }; 

}; 

function isIE() { // check if IE
    var msie = window.navigator.userAgent.indexOf("MSIE ");
    return msie > 0 ? true : false;
}

function getData(e) { // get "data-bs" attribute
    return e.getAttribute("data-cme") ? e.getAttribute("data-cme") : false;
}

function getPlaceholder(e,t) { // find placeholder and caption
    var f = [" ", e];
    if (e.lastIndexOf("(") != "-1") { // если указан placeholder
        f[0] = e.replace(/.*\(|\)/gi,""); // достать placeholder между скобками
        f[1] = e.substring(0, e.lastIndexOf("(")); // достать имя поля
    }
    return t == 1 ? f[0] : f[1];
}

//








var ajax = {};
ajax.x = function() {
    if (typeof XMLHttpRequest !== "undefined") {
        return new XMLHttpRequest();  
    }
    var versions = [
        "MSXML2.XmlHttp.5.0",   
        "MSXML2.XmlHttp.4.0",  
        "MSXML2.XmlHttp.3.0",   
        "MSXML2.XmlHttp.2.0",  
        "Microsoft.XmlHttp"
    ];

    var xhr;
    for(var i = 0; i < versions.length; i++) {  
        try {  
            xhr = new ActiveXObject(versions[i]);  
            break;  
        } catch (e) {
        }  
    }
    return xhr;
};

ajax.send = function(url, callback, method, data, sync) {
    var x = ajax.x();
    x.open(method, url, sync);
    x.onreadystatechange = function() {
        if (x.readyState == 4) {
            callback(x.responseText)
        }
    };
    if (method == "POST") {
        x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    }
    x.send(data)
};

ajax.get = function(url, data, callback, sync) {
    var query = [];
    for (var key in data) {
        query.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
    }
    ajax.send(url + "?" + query.join("&"), callback, "GET", null, sync)
};

ajax.post = function(url, data, callback, sync) {
    var query = [];
    for (var key in data) {
        query.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
    }
    ajax.send(url, callback, "POST", query.join("&"), sync)
};









ajax.get("https://xn--80aaxadpodfvnz1a1g.xn--p1ai/script/templates/form.html", {foo: "bar"},


    function (d) {
        function replaceData(data, key, str) {  // replace template
    if (!data || !key || !str) { return ""; }
    return data = data.replace((new RegExp("{{:"+key+"}}", "gi")), str);
}
   













    var keys = Object.keys(cmeData);
    for (var i=0; i<keys.length; i++) {
        d = replaceData(d, keys[i], cmeData[keys[i]]);
    }

ready(function(){
var div = document.createElement("div");
div.innerHTML+=d;
document.body.appendChild(div);
loadHTML();
function loadScript(url){    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    head.appendChild(script);
}
loadScript("https://apis.google.com/js/platform.js");

// console.log(document.documentElement.clientHeight+"cccccccccccccc")
});









var kuda=0;
var timerx;
var timer;
window.onscroll = function(e) {
 if ( timerx ) clearTimeout(timerx);
 






    var x =document.body.scrollTop;

if(x==0){x=document.documentElement.scrollTop;}




 if ( timer ) clearTimeout(timer);
 timer = setTimeout(function(){

document.getElementById("callme").style.top=document.documentElement.clientHeight+window.pageYOffset-150+"px";


              
                
          document.getElementById("callme").classList.remove("f");     
          document.getElementById("callme").classList.remove("j");    
 }, 10);


};






ready(function(){


// обработка полей для формы
    var fields, fieldType, f, required, selects, data="", selectData="";
    fields = rpl(cmeData["fields"], ", ", ","); // убираем лишние запятые
    fields = rpl(fields).split(","); // создаем массив полей

    var cmeFields = document.querySelector(".cme-form .cme-fields"); // указываем блок, куда сохранять поля

    for (var i=0; i < fields.length; i++) {
        if (fields[i].charAt(fields[i].length-1) == "*") {
            fields[i] = fields[i].substring(0,fields[i].length-1);
            required = 0;
        } else { 
            required = 1;
        }

        switch (fields[i].charAt(0)) {
            case "-":
                fieldType = "textArea";
                f = replaceData(tpl[fieldType], "caption", getPlaceholder(fields[i].substring(1,fields[i].length), 0));
                f = replaceData(f, "placeholder", getPlaceholder(fields[i].substring(1,fields[i].length), 1));
                f = required==0 ? rpl(f, "required",  "") : f;
                break;
            case "?":
                fieldType = "checkBox";
                f = replaceData(tpl[fieldType], "caption", fields[i].substring(1,fields[i].length));
                break;
            case "!":
                fieldType = "select";
                f = tpl[fieldType]; 
                //f = required==0 ? rpl(f, "required",  "") : f;
                selects = fields[i].split("!");
                f = replaceData(f, "caption", selects[1]);
                for (var k = 2; k < f.length; k++) {
                    selectData += replaceData(tpl["selectOption"], "option", selects[k]);
                }
                f = replaceData(f, "selectArea", selectData);
                break;
            default:
                fieldType = "textField";
                f = replaceData(tpl[fieldType], "caption", getPlaceholder(fields[i],0));
                f = replaceData(f, "placeholder", getPlaceholder(fields[i],1));
                f = required==0 ? rpl(f, "required",  "") : f;
        }
        data += f;
    }

    if (parseInt(cmeData["callTime"]) == 1) { // время звонка
        var curHour = new Date().getHours(), hours;

        var workStart = curHour < Number(cmeData["workStart"]) ? Number(cmeData["workStart"]) : curHour;
        workStart = curHour < Number(cmeData["workEnd"]) ?  workStart : Number(cmeData["workStart"]);

        var workDay = curHour > Number(cmeData["workEnd"]) ? cmeData["txt.tmrw"] : cmeData["txt.today"];
        var f = replaceData(tpl["selectTime"], "txt.day", workDay);

        hours = "<option value=''>~</option>";

        for (var i = workStart; i <= Number(cmeData["workEnd"]); i++) {
            hours += "<option value='"+i+"'>"+i+"</option>";
        }
        f = replaceData(f, "time.start", hours);

        hours = "<option value=''>~</option>";

        var workEnd = workDay == cmeData["txt.tmrw"] ? cmeData["workStart"] : curHour;
        for (var i = workStart; i <= Number(cmeData["workEnd"]); i++) {
            hours += "<option value='"+i+"'>"+i+"</option>";
        }
        f = replaceData(f, "time.end", hours);
        data += f;
    }


// 
 
 cmeFields.innerHTML += data;

cmeForm = document.querySelector(".cme-form");


})
    function dl (f,t) { // delay
        var t = t * 1000;
        setTimeout(function(){
            eval(f+"()");
        }, t); 
    }



    function cmeMsg (c,t) { // set status
        document.querySelector(".cme-form .callme-result").innerHTML=(c.length > 0 ? "<div class='"+c+"'>"+t+"</div>" : "");
   }

    function cmeClr () { // clear form
      
        document.querySelectorAll(".cme-form .cme-txt")[0].value ="";
        document.querySelectorAll(".cme-form .cme-txt")[1].value ="";
       // document.querySelectorAll(".cme-form .cme-txt")[2].value ="";
        cmeMsg ("", "");
    } 

    function cmeHide () { // show/hide

        document.querySelector(".cme-form").classList.remove("flipInY");
        
        document.querySelector(".cme-form").classList.add("skakok");
        
        document.getElementById("cme-back").style.display="none";
        document.getElementById("callme").style.display="block";
        document.querySelector(".callme_viewform").classList.add("croot");
        setTimeout('document.querySelector(".cme-form").classList.remove("skakok");document.querySelector(".cme-form").style.display="none";',1000)
    }

    function cmeShow (e, a) {
            cmeForm.style.position= "absolute";
            cmeForm.classList.remove("flipInY");
        
        if (cmeForm.style.display==="block")  {  


            
            cmeForm.style.display="none"
            document.getElementById("cme-back").style.display="none";
            


        } else {

            var dh = window.innerHeight; // высота документа
            var wh = window.innerHeight; 
            var dw = document.documentElement.clientWidth; // ширина окна

            if (cmeData["center"] == 0) {
                tp_cr = e.pageY + 20;
                tp = dh - e.pageY;
                
                if (tp < 300) { tp_cr = dh - 280; } // близко к низу
                
                lf_cr = e.pageX - 150;
                lf = dw - e.pageX;
                    
                if (lf < 300) { lf_cr = dw - 350; } // близко к правому
                
                if (e.pageX < 300) { lf_cr = e.pageX + 20; } // близко к левому

            } else {
                lf_cr = dw/2 - 150;
                tp_cr = wh/2 - 250 + window.pageYOffset; 
            }

            if (tp_cr < 0) { 
                tp_cr = 0; 
            } // если слишком близко к верху страницы

            var computedStyle = getComputedStyle(cmeForm);
            var sd=computedStyle.height;
            cmeForm.style.top-=sd
            cmeForm.style.left=lf_cr+"px";
            cmeForm.style.top=tp_cr+"px";
            document.getElementById("cme-back").style.height=window.innerHeight; 
            document.getElementById("cme-back").style.display="block";
            document.getElementById("callme").style.display="none";   
            document.getElementById("clbh_phone_div").classList.remove("croot");
            cmeForm.style.display="block";
            cmeForm.classList.add("flipInY");
            document.querySelectorAll(".cme-txt")[0].focus();

           
            cmeClr();
        }
    } 


    function cmeSend () { // send data
var error_sending = 0, allRequired = 1;
var elementsXZ = document.querySelectorAll(".cme-form [type=text], .cme-form textarea");
Array.prototype.forEach.call(elementsXZ, function(elx){
         if (elx.hasAttribute("required")) {  allRequired = 0; }
         if (elx.value.length < 1 && elx.hasAttribute("required")){
                elx.classList.add("has-error");
                error_sending = 1;} });
         if (allRequired == 1) { 
       var elementsXZX = document.querySelectorAll(".cme-form [type=text], .cme-form textarea");
Array.prototype.forEach.call(elementsXZX, function(elxX){
         if (elxX.value.length < 2 ) {  error_sending = 1;  elxX.classList.add("has-error"); }
}); }
if(error_sending == 0){
        cmeMsg ("sending", cmeData["alert.sending"]);
        var cnt = getCookie("callme-sent"); // load sent time
        if (!cnt) { cnt = 0; }
        var cs = [];
        var os = [];
      var element = document.querySelectorAll(".cme-form [type=text], .cme-form textarea");
Array.prototype.forEach.call(element, function(el){
         if (el.value.length > 2 ) {  
      
           cs.push(el.getAttribute("data-cme"));
           os.push(el.value);

         }
});
        var rf = getCookie("cmeRef"); // источник трафика
        if ((rf) && (rf.length > 0) ) {
            cs.push(cmeData["mail.referrer"]);
            os.push(rf);
        }

        cs.push(cmeData["mail.url"]); // страница с запросом
        os.push(location.href);


var gezmo;
if(navigator.userAgent.toLowerCase().indexOf("firefox") > -1)
{
     //Do Firefox-related activities
//Javascript Punycode converter derived from example in RFC3492.
//This implementation is created by some@domain.name and released into public domain
var punycode = new function Punycode() {
    // This object converts to and from puny-code used in IDN
    //
    // punycode.ToASCII ( domain )
    // 
    // Returns a puny coded representation of "domain".
    // It only converts the part of the domain name that
    // has non ASCII characters. I.e. it dosent matter if
    // you call it with a domain that already is in ASCII.
    //
    // punycode.ToUnicode (domain)
    //
    // Converts a puny-coded domain name to unicode.
    // It only converts the puny-coded parts of the domain name.
    // I.e. it dosent matter if you call it on a string
    // that already has been converted to unicode.
    //
    //
    this.utf16 = {
        // The utf16-class is necessary to convert from javascripts internal character representation to unicode and back.
        decode:function(input){
            var output = [], i=0, len=input.length,value,extra;
            while (i < len) {
                value = input.charCodeAt(i++);
                if ((value & 0xF800) === 0xD800) {
                    extra = input.charCodeAt(i++);
                    if ( ((value & 0xFC00) !== 0xD800) || ((extra & 0xFC00) !== 0xDC00) ) {
                        throw new RangeError("UTF-16(decode): Illegal UTF-16 sequence");
                    }
                    value = ((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000;
                }
                output.push(value);
            }
            return output;
        },
        encode:function(input){
            var output = [], i=0, len=input.length,value;
            while (i < len) {
                value = input[i++];
                if ( (value & 0xF800) === 0xD800 ) {
                    throw new RangeError("UTF-16(encode): Illegal UTF-16 value");
                }
                if (value > 0xFFFF) {
                    value -= 0x10000;
                    output.push(String.fromCharCode(((value >>>10) & 0x3FF) | 0xD800));
                    value = 0xDC00 | (value & 0x3FF);
                }
                output.push(String.fromCharCode(value));
            }
            return output.join("");
        }
    }

    //Default parameters
    var initial_n = 0x80;
    var initial_bias = 72;
    var delimiter = "\x2D";
    var base = 36;
    var damp = 700;
    var tmin=1;
    var tmax=26;
    var skew=38;
    var maxint = 0x7FFFFFFF;

    // decode_digit(cp) returns the numeric value of a basic code 
    // point (for use in representing integers) in the range 0 to
    // base-1, or base if cp is does not represent a value.

    function decode_digit(cp) {
        return cp - 48 < 10 ? cp - 22 : cp - 65 < 26 ? cp - 65 : cp - 97 < 26 ? cp - 97 : base;
    }

    // encode_digit(d,flag) returns the basic code point whose value
    // (when used for representing integers) is d, which needs to be in
    // the range 0 to base-1. The lowercase form is used unless flag is
    // nonzero, in which case the uppercase form is used. The behavior
    // is undefined if flag is nonzero and digit d has no uppercase form. 

    function encode_digit(d, flag) {
        return d + 22 + 75 * (d < 26) - ((flag != 0) << 5);
        //  0..25 map to ASCII a..z or A..Z 
        // 26..35 map to ASCII 0..9
    }
    //** Bias adaptation function **
    function adapt(delta, numpoints, firsttime ) {
        var k;
        delta = firsttime ? Math.floor(delta / damp) : (delta >> 1);
        delta += Math.floor(delta / numpoints);

        for (k = 0; delta > (((base - tmin) * tmax) >> 1); k += base) {
                delta = Math.floor(delta / ( base - tmin ));
        }
        return Math.floor(k + (base - tmin + 1) * delta / (delta + skew));
    }

    // encode_basic(bcp,flag) forces a basic code point to lowercase if flag is zero,
    // uppercase if flag is nonzero, and returns the resulting code point.
    // The code point is unchanged if it is caseless.
    // The behavior is undefined if bcp is not a basic code point.

    function encode_basic(bcp, flag) {
        bcp -= (bcp - 97 < 26) << 5;
        return bcp + ((!flag && (bcp - 65 < 26)) << 5);
    }

    // Main decode
    this.decode=function(input,preserveCase) {
        // Dont use utf16
        var output=[];
        var case_flags=[];
        var input_length = input.length;

        var n, out, i, bias, basic, j, ic, oldi, w, k, digit, t, len;

        // Initialize the state: 

        n = initial_n;
        i = 0;
        bias = initial_bias;

        // Handle the basic code points: Let basic be the number of input code 
        // points before the last delimiter, or 0 if there is none, then
        // copy the first basic code points to the output.

        basic = input.lastIndexOf(delimiter);
        if (basic < 0) basic = 0;

        for (j = 0; j < basic; ++j) {
            if(preserveCase) case_flags[output.length] = ( input.charCodeAt(j) -65 < 26);
            if ( input.charCodeAt(j) >= 0x80) {
                throw new RangeError("Illegal input >= 0x80");
            }
            output.push( input.charCodeAt(j) );
        }

        // Main decoding loop: Start just after the last delimiter if any
        // basic code points were copied; start at the beginning otherwise. 

        for (ic = basic > 0 ? basic + 1 : 0; ic < input_length; ) {

            // ic is the index of the next character to be consumed,

            // Decode a generalized variable-length integer into delta,
            // which gets added to i. The overflow checking is easier
            // if we increase i as we go, then subtract off its starting 
            // value at the end to obtain delta.
            for (oldi = i, w = 1, k = base; ; k += base) {
                    if (ic >= input_length) {
                        throw RangeError ("punycode_bad_input(1)");
                    }
                    digit = decode_digit(input.charCodeAt(ic++));

                    if (digit >= base) {
                        throw RangeError("punycode_bad_input(2)");
                    }
                    if (digit > Math.floor((maxint - i) / w)) {
                        throw RangeError ("punycode_overflow(1)");
                    }
                    i += digit * w;
                    t = k <= bias ? tmin : k >= bias + tmax ? tmax : k - bias;
                    if (digit < t) { break; }
                    if (w > Math.floor(maxint / (base - t))) {
                        throw RangeError("punycode_overflow(2)");
                    }
                    w *= (base - t);
            }

            out = output.length + 1;
            bias = adapt(i - oldi, out, oldi === 0);

            // i was supposed to wrap around from out to 0,
            // incrementing n each time, so well fix that now: 
            if ( Math.floor(i / out) > maxint - n) {
                throw RangeError("punycode_overflow(3)");
            }
            n += Math.floor( i / out ) ;
            i %= out;

            // Insert n at position i of the output: 
            // Case of last character determines uppercase flag: 
            if (preserveCase) { case_flags.splice(i, 0, input.charCodeAt(ic -1) -65 < 26);}

            output.splice(i, 0, n);
            i++;
        }
        if (preserveCase) {
            for (i = 0, len = output.length; i < len; i++) {
                if (case_flags[i]) {
                    output[i] = (String.fromCharCode(output[i]).toUpperCase()).charCodeAt(0);
                }
            }
        }
        return this.utf16.encode(output);
    };

    //** Main encode function **

    this.encode = function (input,preserveCase) {
        //** Bias adaptation function **

        var n, delta, h, b, bias, j, m, q, k, t, ijv, case_flags;

        if (preserveCase) {
            // Preserve case, step1 of 2: Get a list of the unaltered string
            case_flags = this.utf16.decode(input);
        }
        // Converts the input in UTF-16 to Unicode
        input = this.utf16.decode(input.toLowerCase());

        var input_length = input.length; // Cache the length

        if (preserveCase) {
            // Preserve case, step2 of 2: Modify the list to true/false
            for (j=0; j < input_length; j++) {
                case_flags[j] = input[j] != case_flags[j];
            }
        }

        var output=[];


        // Initialize the state: 
        n = initial_n;
        delta = 0;
        bias = initial_bias;

        // Handle the basic code points: 
        for (j = 0; j < input_length; ++j) {
            if ( input[j] < 0x80) {
                output.push(
                    String.fromCharCode(
                        case_flags ? encode_basic(input[j], case_flags[j]) : input[j]
                    )
                );
            }
        }

        h = b = output.length;

        // h is the number of code points that have been handled, b is the
        // number of basic code points 

        if (b > 0) output.push(delimiter);

        // Main encoding loop: 
        //
        while (h < input_length) {
            // All non-basic code points < n have been
            // handled already. Find the next larger one: 

            for (m = maxint, j = 0; j < input_length; ++j) {
                ijv = input[j];
                if (ijv >= n && ijv < m) m = ijv;
            }

            // Increase delta enough to advance the decoders
            // <n,i> state to <m,0>, but guard against overflow: 

            if (m - n > Math.floor((maxint - delta) / (h + 1))) {
                throw RangeError("punycode_overflow (1)");
            }
            delta += (m - n) * (h + 1);
            n = m;

            for (j = 0; j < input_length; ++j) {
                ijv = input[j];

                if (ijv < n ) {
                    if (++delta > maxint) return Error("punycode_overflow(2)");
                }

                if (ijv == n) {
                    // Represent delta as a generalized variable-length integer: 
                    for (q = delta, k = base; ; k += base) {
                        t = k <= bias ? tmin : k >= bias + tmax ? tmax : k - bias;
                        if (q < t) break;
                        output.push( String.fromCharCode(encode_digit(t + (q - t) % (base - t), 0)) );
                        q = Math.floor( (q - t) / (base - t) );
                    }
                    output.push( String.fromCharCode(encode_digit(q, preserveCase && case_flags[j] ? 1:0 )));
                    bias = adapt(delta, h + 1, h == b);
                    delta = 0;
                    ++h;
                }
            }

            ++delta, ++n;
        }
        return output.join("");
    }

    this.ToASCII = function ( domain ) {
        var domain_array = domain.split(".");
        var out = [];
        for (var i=0; i < domain_array.length; ++i) {
            var s = domain_array[i];
            out.push(
                s.match(/[^A-Za-z0-9-]/) ?
                "xn--" + punycode.encode(s) :
                s
            );
        }
        return out.join(".");
    }
    this.ToUnicode = function ( domain ) {
        var domain_array = domain.split(".");
        var out = [];
        for (var i=0; i < domain_array.length; ++i) {
            var s = domain_array[i];
            out.push(
                s.match(/^xn--/) ?
                punycode.decode(s.slice(4)) :
                s
            );
        }
        return out.join(".");
    }
}();

 gezmo=punycode.ToASCII(location.hostname)

} else {gezmo=location.hostname}

  
var data = {
            contentType: "text/html; charset=utf-8",
            cs: cs,
            os: os,
            ctime: cnt,
            idr:"9406998736",
            dmn:gezmo
};



var dataStr = Object.keys(data).map(function(key){ 

    if (key === "os" || key === "cs") {
      var arr = data[key];
      var str = "";
      for (var i=0; i<arr.length; i++) {
        str += encodeURIComponent(key) + "[]=" + encodeURIComponent(arr[i]) + ((i === arr.length - 1) ? "" : "&");
      }

      return str;
    }
    else {
      return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]); 
    }
  }).join("&");


var request = new XMLHttpRequest();
request.open("GET", getScriptFolder("callback_st_of.js") + "lib/send.php?"+dataStr, true);

    setTimeout(function(){cmeMsg("c_success","Спасибо, сообщение отправлено"); },2000)

dl("cmeHide", 6);
dl("cmeClr", 7);


request.onload = function(i) {

  if (request.status >= 200 && request.status < 400) {
      
      var i = JSON.parse(request.responseText);


      cmeMsg(i.cls,i.message);  


            if (i.result == "success") {
                setCookie("callme-sent", i.time);
                // dl("cmeHide", 4);
                // dl("cmeClr", 5);
            }
  }};
request.onerror = function() {};

request.send()}};





ready(function(){
document.querySelector(".callme_viewform").addEventListener("click", function(e) {
    cmeShow(e);

        return false;
});

document.querySelector(".cme-form .cme-cls").addEventListener("click", function(e) {
      cmeHide();
        return false;
});

document.querySelector("#cme-back").addEventListener("click", function(e) {
      cmeHide();
});
  
document.querySelector(".cme-form .cme-btn").addEventListener("click", function(e) {

      cmeSend();
});

// document.querySelectorAll(".cme-form [type=text], .cme-form textarea")[0].addEventListener("keypress", function() {
//       this.classList.remove("has-error");});
document.querySelectorAll(".cme-form [type=text], .cme-form textarea")[1].addEventListener("keypress", function() {
      this.classList.remove("has-error");});

// document.querySelectorAll(".cme-form [type=text], .cme-form textarea")[2].addEventListener("keypress", function() {
//       this.classList.remove("has-error");});


// document.querySelector(".cme-form .cme-ct-start").addEventListener("change", function(pll) {

// var elementsZ = document.querySelectorAll(".cme-ct-finish option");

// Array.prototype.forEach.call(elementsZ, function(el){

// el.removeAttribute("disabled");

// });

//  var cme_h = Number(document.querySelector(".cme-ct-start option:checked").value) + 1;


// var elementsR = document.querySelectorAll(".cme-ct-finish option");
// Array.prototype.forEach.call(elementsR, function(el){

//  if (el.value < cme_h){el.setAttribute("disabled", "disabled");}

// });

 

// var m = document.querySelector(".cme-ct-finish"), c = m.style;
// c.backgroundColor = "#dff0d8";


// });


// document.querySelector(".cme-form .cme-ct-finish").addEventListener("change", function(pllX) {
// var m = document.querySelector(".cme-ct-finish"), c = m.style;
// c.backgroundColor = "white";
// })


}); // ready

    var ref = getCookie("cmeRef"); // load sent time
    if ((!ref) && (document.referrer)) {
        ref = document.referrer;
        setCookie("cmeRef", ref);
    }

    function getCookie(e) { // get cookie
        var name = e + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name)==0) return c.substring(name.length,c.length);
        }
        return false;
    }

    function setCookie(e,v) { // save cookie
        var d = new Date();
        d.setTime(d.getTime()+(5*24*60*60*1000));
        var expires = "expires="+d.toGMTString();
        document.cookie = e + "=" + v + "; " + expires;
    }




   

ready(function(){
 

ready(function(){
    
// console.log(window.pageYOffset+"ЖЖ")
document.getElementById("callme").style.top=document.documentElement.clientHeight+window.pageYOffset-150+"px";

// document.getElementById("callme").style.top= height+"px";

}); 




function toggleClass(el, className) {
  if (el.classList) {
    el.classList.toggle(className);
  } else {
    var classes = el.className.split(" ");
    var existingIndex = classes.indexOf(className);

    if (existingIndex >= 0)
      classes.splice(existingIndex, 1);
    else
      classes.push(className);

    el.className = classes.join(" ");
  }
}



function treo(){

                document.getElementById("cruu").classList.add("maharuX");  
                var el = document.querySelector(".stof-ph-img-circle");
                var xSxX = Math.floor((Math.random() * 3) + 1);

                
                if(xSxX==1){el.innerHTML = "<div class='textix'>ЗАКАЗАТЬ<br>ЗВОНОК</div>";}
                else if(xSxX==2){el.innerHTML = "<div style='font-size: 9px;' class='textix'>ПЕРЕЗВОНИМ<br>БЕСПЛАТНО</div>";}
                else if(xSxX==3){el.innerHTML = "<div class='textix'>ОБРАТНАЯ<br>СВЯЗЬ</div>";}
               
                setTimeout(function(){var el = document.querySelector(".stof-ph-img-circle");
                el.innerHTML = "<i  class='fa fa-phone DJZI'></i>";
                document.getElementById("cruu").classList.remove('maharuX');
            },15000)


};
                





setInterval(function() {treo();}, 30000)




});

}
);


}




