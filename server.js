const express = require('express');
const hbs = require('hbs');
const request = require('request');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
const port = process.env.PORT || 3000;

var app = express();

app.set('view engine','hbs'); 
app.use(express.static(__dirname + '/views'));

var train_List = '';
//console.log('where');

app.get('/',(req,res) => {
  res.render('integratedHTML.hbs',{
    name:'Home page'
  });
});
// console.log('ch');
app.post('/thank', urlencodedParser, (req, res) => {
  var ava = false;
  // console.log(req.body.dates);
  // console.log(req.body.source);
  // console.log(req.body.dest);
  var temp = req.body.dates;
  var dd = temp[8] + temp[9];
  dd = parseInt(dd,10);
  //console.log(dd);
  var mm = temp[5] + temp[6];
  mm = parseInt(mm,10);
  //console.log(mm);
  var y = temp[0] + temp[1] + temp[2] + temp[3];
  y = parseInt(y,10);
  //console.log(y);
  var t = [ 0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4 ]; 
      y -= mm < 3; 
      var day = (y + y/4 - y/100 + y/400 + t[mm-1] + dd) % 7;
      day = parseInt(day,10);
      var days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
      //console.log(day); 
      var date = temp[8] + temp[9] + '-' + temp[5] + temp[6] + '-' + temp[0] + temp[1] + temp[2] + temp[3];
     // console.log(date);
      var src = req.body.source;
      var dst = req.body.dest;
      //console.log(src,dst);
      var dt = req.body.dates;
      var u = 'https://api.railwayapi.com/v2/between/source/' + src +'/dest/' + dst + '/date/' + date + '/apikey/lsru18ofu2/';
      
      request({
        url:u,
        json:true
      },(error,resp,body) => {
         console.log(u);
        if(error){
          train_List = 'Unable to fetch the train details';
          //console.log(train_List);
        }else{
          //console.log('code : ',body.response_code);
          if(body.response_code === 200)
          {
            JSON.stringify(body);
        train_List = '<tr>' + '<th>Train No.</th><th>Source</th><th>Destination</th><th>Train Name</th><th>Travel time</th><th></th>' 
        if(day === 0)
        {
          for(let i=0;i<body.trains.length;i++)
          {
            if(body.trains[i].days[6].code === 'Y')
              { 
                ava = true;          
                train_List  += '<tr>'+ '<td>' + body.trains[i].number + '</td>' + '<td>' + body.trains[i].from_station.name + '(' + body.trains[i].src_departure_time + ')' +  '</td>' + '<td>' + body.trains[i].to_station.name  + '(' + body.trains[i].dest_arrival_time + ')'  +'</td>' + '<td>' + body.trains[i].name + '</td> ' + '<td>' + body.trains[i].travel_time  +'</td>' + '</tr>'; 
              }          }
          }else{
            day--;
            //console.log('check ');
            for(let i=0;i<body.trains.length;i++)
            {
              if(body.trains[i].days[day].runs === 'Y')
                { 
                  ava = true;          
                  train_List  += '<tr>'+ '<td>' + body.trains[i].number + '</td>' + '<td>' + body.trains[i].from_station.name + '(' + body.trains[i].src_departure_time + ')' +  '</td>' + '<td>' + body.trains[i].to_station.name  + '(' + body.trains[i].dest_arrival_time + ')'  +'</td>' + '<td>' + body.trains[i].name + '</td> ' + '<td>' + body.trains[i].travel_time  +'</td>' + '</tr>'; 
                }         
            }
          }
        if(ava === false)
        train_List = 'No trains found'
      }else{
          train_List = 'An error has occured';
          //console.log('np trains found');
        }
      }
      res.render('about.hbs',{
         name:train_List
     });
       
      });
   });


app.listen(port,() => {
    console.log(`Server is up on port ${port}`);
});

//https://sensationnel-moliere-25779.herokuapp.com/