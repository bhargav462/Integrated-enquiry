var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.set('view engine','hbs'); 
app.use(express.static(__dirname + '/HTML'));
app.get('/', (req, res) => {
res.render('about.hbs');
});
 
app.post('/thank', urlencodedParser, (req, res) => {
//   var reply='';
//   reply += "Your name is" + req.body.source;
//   reply += "Your E-mail id is" + req.body.dest; 
//   reply += "Your address is" + req.body.dates;
//   console.log(reply);
//   reply += "Your mobile number is" + req.body.mobilno;
//   res.send(reply);
console.log(req.body.dates);
var temp = req.body.dates;
var dd = temp[8] + temp[9];
dd = parseInt(dd,10);
console.log(dd);
var mm = temp[5] + temp[6];
mm = parseInt(mm,10);
console.log(mm);
var y = temp[0] + temp[1] + temp[2] + temp[3];
y = parseInt(y,10);
console.log(y);
var t = [ 0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4 ]; 
    y -= mm < 3; 
    var day = (y + y/4 - y/100 + y/400 + t[mm-1] + dd) % 7;
    day = parseInt(day,10);
    var days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    console.log(day); 
    res.render('deletion.hbs',{
      name:'Bhargav'
    });
 });

 app.listen(8082, ()  => {
    console.log("Example app listening at 8082");
  });