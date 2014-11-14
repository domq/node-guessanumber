function xmlhttpPost(strURL) {
    var form = document.forms['calculator'];
    var sender = form.Zonecalcul.value;
    $.get( strURL,{Zonecalcul:sender}, function(data) {
        updatepage(data);
    });
    return false;
}
function updatepage(str){
    document.getElementById("result").innerHTML = str;
}
$( document ).ready(function() {
    $( "#calculator" ).submit(function( event ) {
        xmlhttpPost("/calc");
        event.preventDefault();
    });
});