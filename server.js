var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var getJSON = require('get-json')


app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/index.html');
});

server.listen(80);

var server = app.listen(8081, function() {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})

io.on('connection', function(socket) {
  socket.on('askWeather', function(data) {
    getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + data.lat + "&lon=" + data.lon + "&APPID=740d258738b933a9bc226c2106809d6c", function(error, jsonWeather) {
      getJSON("http://api.openweathermap.org/data/2.5/forecast?lat=" + data.lat + "&lon=" + data.lon + "&APPID=740d258738b933a9bc226c2106809d6c", function(error, jsonForecast) {
        socket.emit('repWeather', {
          jsonWeather: jsonWeather,
          jsonForecast: jsonForecast,
        });
      });
    });
  });
  socket.on('askJSON', function(data) {
    var name = data.name;
    var commune;
switch (name) {
  case "ain":
   commune = "01-ain/communes-01-ain.geojson";
   break;
  case "aisne":
   commune = "02-aisne/communes-02-aisne.geojson";
   break;
  case "allier":
   commune = "03-allier/communes-03-allier.geojson";
   break;
  case "alpesdehauteprovence":
   commune = "04-alpes-de-haute-provence/communes-04-alpes-de-haute-provence.geojson";
   break;
  case "hautesalpes":
   commune = "05-hautes-alpes/communes-05-hautes-alpes.geojson";
   break;
  case "alpesmaritimes":
   commune = "06-alpes-maritimes/communes-06-alpes-maritimes.geojson";
   break;
  case "ardeche":
   commune = "07-ardeche/communes-07-ardeche.geojson";
   break;
  case "ardennes":
   commune = "08-ardennes/communes-08-ardennes.geojson";
   break;
  case "ariege":
   commune = "09-ariege/communes-09-ariege.geojson";
   break;
  case "aube":
   commune = "10-aube/communes-10-aube.geojson";
   break;
  case "aude":
   commune = "11-aude/communes-11-aude.geojson";
   break;
  case "aveyron":
   commune = "12-aveyron/communes-12-aveyron.geojson";
   break;
  case "bouchesdurhone":
   commune = "13-bouches-du-rhone/communes-13-bouches-du-rhone.geojson";
   break;
  case "calvados":
   commune = "14-calvados/communes-14-calvados.geojson";
   break;
  case "cantal":
   commune = "15-cantal/communes-15-cantal.geojson";
   break;
  case "charente":
   commune = "16-charente/communes-16-charente.geojson";
   break;
  case "charentemaritime":
   commune = "17-charente-maritime/communes-17-charente-maritime.geojson";
   break;
  case "cher":
   commune = "18-cher/communes-18-cher.geojson";
   break;
  case "correze":
   commune = "19-correze/communes-19-correze.geojson";
   break;
  case "cotedor":
   commune = "21-cote-d-or/communes-21-cote-d-or.geojson";
   break;
  case "cotesdarmor":
   commune = "22-cotes-d-armor/communes-22-cotes-d-armor.geojson";
   break;
  case "creuse":
   commune = "23-creuse/communes-23-creuse.geojson";
   break;
  case "dordogne":
   commune = "24-dordogne/communes-24-dordogne.geojson";
   break;
  case "doubs":
   commune = "25-doubs/communes-25-doubs.geojson";
   break;
  case "drome":
   commune = "26-drome/communes-26-drome.geojson";
   break;
  case "eure":
   commune = "27-eure/communes-27-eure.geojson";
   break;
  case "eureetloir":
   commune = "28-eure-et-loir/communes-28-eure-et-loir.geojson";
   break;
  case "finistere":
   commune = "29-finistere/communes-29-finistere.geojson";
   break;
  case "corsedusud":
   commune = "2A-corse-du-sud/communes-2A-corse-du-sud.geojson";
   break;
  case "hautecorse":
   commune = "2B-haute-corse/communes-2B-haute-corse.geojson";
   break;
  case "gard":
   commune = "30-gard/communes-30-gard.geojson";
   break;
  case "hautegaronne":
   commune = "31-haute-garonne/communes-31-haute-garonne.geojson";
   break;
  case "gers":
   commune = "32-gers/communes-32-gers.geojson";
   break;
  case "gironde":
   commune = "33-gironde/communes-33-gironde.geojson";
   break;
  case "herault":
   commune = "34-herault/communes-34-herault.geojson";
   break;
  case "illeetvilaine":
   commune = "35-ille-et-vilaine/communes-35-ille-et-vilaine.geojson";
   break;
  case "indre":
   commune = "36-indre/communes-36-indre.geojson";
   break;
  case "indreetloire":
   commune = "37-indre-et-loire/communes-37-indre-et-loire.geojson";
   break;
  case "isere":
   commune = "38-isere/communes-38-isere.geojson";
   break;
  case "jura":
   commune = "39-jura/communes-39-jura.geojson";
   break;
  case "landes":
   commune = "40-landes/communes-40-landes.geojson";
   break;
  case "loiretcher":
   commune = "41-loir-et-cher/communes-41-loir-et-cher.geojson";
   break;
  case "loire":
   commune = "42-loire/communes-42-loire.geojson";
   break;
  case "hauteloire":
   commune = "43-haute-loire/communes-43-haute-loire.geojson";
   break;
  case "loireatlantique":
   commune = "44-loire-atlantique/communes-44-loire-atlantique.geojson";
   break;
  case "loiret":
   commune = "45-loiret/communes-45-loiret.geojson";
   break;
  case "lot":
   commune = "46-lot/communes-46-lot.geojson";
   break;
  case "lotetgaronne":
   commune = "47-lot-et-garonne/communes-47-lot-et-garonne.geojson";
   break;
  case "lozere":
   commune = "48-lozere/communes-48-lozere.geojson";
   break;
  case "maineetloire":
   commune = "49-maine-et-loire/communes-49-maine-et-loire.geojson";
   break;
  case "manche":
   commune = "50-manche/communes-50-manche.geojson";
   break;
  case "marne":
   commune = "51-marne/communes-51-marne.geojson";
   break;
  case "hautemarne":
   commune = "52-haute-marne/communes-52-haute-marne.geojson";
   break;
  case "mayenne":
   commune = "53-mayenne/communes-53-mayenne.geojson";
   break;
  case "meurtheetmoselle":
   commune = "54-meurthe-et-moselle/communes-54-meurthe-et-moselle.geojson";
   break;
  case "meuse":
   commune = "55-meuse/communes-55-meuse.geojson";
   break;
  case "morbihan":
   commune = "56-morbihan/communes-56-morbihan.geojson";
   break;
  case "moselle":
   commune = "57-moselle/communes-57-moselle.geojson";
   break;
  case "nievre":
   commune = "58-nievre/communes-58-nievre.geojson";
   break;
  case "nord":
   commune = "59-nord/communes-59-nord.geojson";
   break;
  case "oise":
   commune = "60-oise/communes-60-oise.geojson";
   break;
  case "orne":
   commune = "61-orne/communes-61-orne.geojson";
   break;
  case "pasdecalais":
   commune = "62-pas-de-calais/communes-62-pas-de-calais.geojson";
   break;
  case "puydedome":
   commune = "63-puy-de-dome/communes-63-puy-de-dome.geojson";
   break;
  case "pyreneesatlantiques":
   commune = "64-pyrenees-atlantiques/communes-64-pyrenees-atlantiques.geojson";
   break;
  case "hautespyrenees":
   commune = "65-hautes-pyrenees/communes-65-hautes-pyrenees.geojson";
   break;
  case "pyreneesorientales":
   commune = "66-pyrenees-orientales/communes-66-pyrenees-orientales.geojson";
   break;
  case "basrhin":
   commune = "67-bas-rhin/communes-67-bas-rhin.geojson";
   break;
  case "hautrhin":
   commune = "68-haut-rhin/communes-68-haut-rhin.geojson";
   break;
  case "rhone":
   commune = "69-rhone/communes-69-rhone.geojson";
   break;
  case "hautesaone":
   commune = "70-haute-saone/communes-70-haute-saone.geojson";
   break;
  case "saoneetloire":
   commune = "71-saone-et-loire/communes-71-saone-et-loire.geojson";
   break;
  case "sarthe":
   commune = "72-sarthe/communes-72-sarthe.geojson";
   break;
  case "savoie":
   commune = "73-savoie/communes-73-savoie.geojson";
   break;
  case "hautesavoie":
   commune = "74-haute-savoie/communes-74-haute-savoie.geojson";
   break;
  case "paris":
   commune = "75-paris/communes-75-paris.geojson";
   break;
  case "seinemaritime":
   commune = "76-seine-maritime/communes-76-seine-maritime.geojson";
   break;
  case "seineetmarne":
   commune = "77-seine-et-marne/communes-77-seine-et-marne.geojson";
   break;
  case "yvelines":
   commune = "78-yvelines/communes-78-yvelines.geojson";
   break;
  case "deuxsevres":
   commune = "79-deux-sevres/communes-79-deux-sevres.geojson";
   break;
  case "somme":
   commune = "80-somme/communes-80-somme.geojson";
   break;
  case "tarn":
   commune = "81-tarn/communes-81-tarn.geojson";
   break;
  case "tarnetgaronne":
   commune = "82-tarn-et-garonne/communes-82-tarn-et-garonne.geojson";
   break;
  case "var":
   commune = "83-var/communes-83-var.geojson";
   break;
  case "vaucluse":
   commune = "84-vaucluse/communes-84-vaucluse.geojson";
   break;
  case "vendee":
   commune = "85-vendee/communes-85-vendee.geojson";
   break;
  case "vienne":
   commune = "86-vienne/communes-86-vienne.geojson";
   break;
  case "hautevienne":
   commune = "87-haute-vienne/communes-87-haute-vienne.geojson";
   break;
  case "vosges":
   commune = "88-vosges/communes-88-vosges.geojson";
   break;
  case "yonne":
   commune = "89-yonne/communes-89-yonne.geojson";
   break;
   case "territoire de belfort":
    commune = "90-territoire-de-belfort/communes-90-territoire-de-belfort.geojson"
   break;
  case "essonne":
   commune = "91-essonne/communes-91-essonne.geojson";
   break;
  case "hautsdeseine":
   commune = "92-hauts-de-seine/communes-92-hauts-de-seine.geojson";
   break;
  case "seinesaintdenis":
   commune = "93-seine-saint-denis/communes-93-seine-saint-denis.geojson";
   break;
  case "valdemarne":
   commune = "94-val-de-marne/communes-94-val-de-marne.geojson";
   break;
  case "valdoise":
   commune = "95-val-d-oise/communes-95-val-d-oise.geojson";
   break;
  case "guadeloupe":
   commune = "971-guadeloupe/communes-971-guadeloupe.geojson";
   break;
  case "martinique":
   commune = "972-martinique/communes-972-martinique.geojson";
   break;
  case "guyane":
   commune = "973-guyane/communes-973-guyane.geojson";
   break;
  case "lareunion":
   commune = "974-la-reunion/communes-974-la-reunion.geojson";
   break;
  case "mayotte":
   commune = "976-mayotte/communes-976-mayotte.geojson";
   break;
  default:
    commune = "75-paris/communes-75-paris.geojson";

    }
    console.log(commune);
    var json = JSON.parse(require('fs').readFileSync('public/geojson/departements/' + commune, 'utf8'));
    socket.emit('repJSON', {
      geojson: json
    });
  });
});
