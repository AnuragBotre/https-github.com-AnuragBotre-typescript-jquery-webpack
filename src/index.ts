import jQuery from 'jquery';

var $ = jQuery;

$("body").html("<div>Hello</div>");


jQuery.ajax("test.html",{
    method : "post",
    data : {
        param1 : "",
        param2 : ""        
    }
}).then( (data,status,jQxhr) => {
    alert("here");
}).fail( () => {
    
});