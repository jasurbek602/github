const request = new XMLHttpRequest();
// request.setRequestHeader('Content-Type', 'application/json');
// request.open('GET' , 'https://github.com/jasurbek602/jsonserver/blob/7dfdbeb099e645e3876a2b5876d0d6fb7556bd07/db.json');
request.open('GET', 'https://raw.githubusercontent.com/jasurbek602/jsonserver/main/db.json');
var json=JSON.stringify(request.response)
console.log(json);
// console.log("https://github.com/jasurbek602/jsonserver/blob/7dfdbeb099e645e3876a2b5876d0d6fb7556bd07/db.json");