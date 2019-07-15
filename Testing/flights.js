var express = require('express');
var bodyParser =  require('body-parser');
var request = require('request');
var urlencodedParser = bodyParser.urlencoded({extended:true});

var app = express();
app.set('view engine','hbs');
app.use(express.static(__dirname + '/views'));

app.get('/',(req,res) => {
   res.render('integratedHTML.hbs',{

   });
});
// console.log('check');
// app.post('/schedule',(req,res) => {
//     console.log('yeah');

//     var data = [{AirlineId:218,name:"Air India Limited",IATA:"AI",ICAO:"AIC",Country:"India",Active:"Y"},{AirlineId:241,name:"Air Sahara",IATA:"S2",ICAO:"RSH",Country:"India",Active:"Y"},{AirlineId:569,name:"Air India Express",IATA:"IX",ICAO:"AXB",Country:"India",Active:"Y"},{AirlineId:1026,name:"Alliance Air",IATA:"CD",ICAO:"LLR",Country:"India",Active:"N"},{AirlineId:1370,name:"Blue Dart Aviation",IATA:"BZ",ICAO:"BDA",Country:"India",Active:"N"},{AirlineId:2001,name:"Deccan Aviation",IATA:"",ICAO:"DKN",Country:"India",Active:"N"},{AirlineId:2575,name:"Go Air",IATA:"G8",ICAO:"GOW",Country:"India",Active:"Y"},{AirlineId:2634,name:"Gujarat Airways",IATA:"G8",ICAO:"GUJ",Country:"India",Active:"N"},{AirlineId:2850,name:"IndiGo Airlines",IATA:"6E",ICAO:"IGO",Country:"India",Active:"Y"},{AirlineId:2851,name:"India International Airways",IATA:"",ICAO:"IIL",Country:"India",Active:"N"},{AirlineId:2852,name:"Indian Air Force",IATA:"",ICAO:"IFC",Country:"India",Active:"N"}];
//     data = data.concat([{AirlineId:2853,name:"Indian Airlines",IATA:"IC",ICAO:"IAC",Country:"India",Active:"Y"},{AirlineId:3000,name:"Jet Airways",IATA:"9W",ICAO:"JAI",Country:"India",Active:"Y"},{AirlineId:3142,name:"Kingfisher Airlines",IATA:"IT",ICAO:"KFR",Country:"India",Active:"Y"},{AirlineId:3907,name:"Paramount Airways",IATA:"I7",ICAO:"PMW",Country:"India",Active:"Y"},{AirlineId:3918,name:"Pawan Hans",IATA:"",ICAO:"PHE",Country:"India",Active:"Y"},{AirlineId:4375,name:"Spicejet",IATA:"SG",ICAO:"SEJ",Country:"India",Active:"Y"},{AirlineId:13105,name:"Air India Regional",IATA:"CD",ICAO:"\N",Country:"India",Active:"Y"},{AirlineId:13106,name:"MDLR Airlines",IATA:"9H",ICAO:"",Country:"India",Active:"Y"},{AirlineId:13107,name:"Jagson Airlines",IATA:"",ICAO:"JGN",Country:"India",Active:"Y"},{AirlineId:13905,name:"Skyline nepc",IATA:"D5",ICAO:"",Country:"India",Active:"N"},{AirlineId:16327,name:"Indya Airline Group",IATA:"G1",ICAO:"IG1",Country:"India",Active:"Y"}]);
//     data = data.concat([{AirlineId:16362,name:"OCEAN AIR CARGO",IATA:"",ICAO:"IXO",Country:"India",Active:"Y"},{AirlineId:16738,name:"NEPC Airlines",IATA:"D5",ICAO:"",Country:"India",Active:"N"},{AirlineId:16901,name:"12 North",IATA:"12",ICAO:"N12",Country:"India",Active:"Y"},{AirlineId:19451,name:"Air Costa",IATA:"LB",ICAO:"",Country:"India",Active:"Y"},{AirlineId:20264,name:"Air Vistara",IATA:"UK",ICAO:"VTI",Country:"India",Active:"Y"},{AirlineId:20286,name:"Air Pegasus",IATA:"OP",ICAO:"PPL",Country:"India",Active:"Y"},{AirlineId:21270,name:"Air Carnival",IATA:"2S",ICAO:"",Country:"India",Active:"Y"}]);
//     request({
//       url:'http://aviation-edge.com/v2/public/routes?key=[API_KEY]&departureIata=OTP&departureIcao=LROP&airlineIata=0B&airlineIcao=BMS&flightNumber=101',
//       JSON:true
//     },(error,resp,body) => {
//       if(error){
//         console.log('Unable to fetch the data');
//       }else{

//         res.render('flight.hbs',{

//         });
//       }
//     });
// });

app.listen(3002,() => {
  console.log('Server is up on port 3002');
});