import Itinerary from "../Itinerary.js";
import 'dotenv/config.js'
import '../../config/database.js'

const itineraries=[{
    cityId:'654403aa9d43634693759749',
    userId:'65440355816697efb6a2b237',
    photo:'https://teatrocolon.org.ar/sites/default/files/styles/d8/public/teatro-colon-argentina-image_1366_768.jpg?itok=bpxe64GH',
    price:[1,2],
    duration:150,
    hashtags:['#Buenos Aires','#Music','#Theater'],
    ubication:'https://maps.app.goo.gl/sfqRWo88aCDitn7b6'
},
{
    cityId:'654403aa9d43634693759749',
    userId:'65440355816697efb6a2b237',
    photo:'https://media-cdn.tripadvisor.com/media/photo-s/24/1d/97/e7/don-julio.jpg',
    price:[2,3],
    hashtags:['#Buenos Aires','#Music','#Food'],
    ubication:'https://maps.app.goo.gl/b7A7GZTT55hWPi7N6'
}]

Itinerary.insertMany(itineraries)