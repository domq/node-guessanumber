function xmlhttpPost(strURL) {
    var xmlHttpReq = false;
    var self = this;
    // Mozilla/Safari
    if (window.XMLHttpRequest) {
        self.xmlHttpReq = new XMLHttpRequest();
    }
    // IE
    else if (window.ActiveXObject) {
        self.xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
    }
    self.xmlHttpReq.open('POST', strURL, true);
    self.xmlHttpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    self.xmlHttpReq.onreadystatechange = function() {
        if (self.xmlHttpReq.readyState == 4) {
            updatepage(self.xmlHttpReq.responseText);
        }
    }
    self.xmlHttpReq.send(getquerystring());
    return false;
}

function getquerystring() {
    var form = document.forms['calculator'];
    var sender = form.Zonecalcul.value;
    qstr = 'Zonecalcul=' + escape(sender);
    // Remarque: pas de '?' avant la chaîne de requête
    return qstr;
}

function updatepage(str){
    document.getElementById("result").innerHTML = str;
}