import Itinerary from "../Itinerary.js";
import 'dotenv/config.js'
import '../../config/database.js'

const itineraries=[{
    cityId:'654403aa9d43634693759749',
    userId:'65440355816697efb6a2b237',
    photo:'https://media-cdn.tripadvisor.com/media/photo-s/01/d1/e2/88/buenos-aires.jpg',
    price:[2,3],
    duration:300,
    hashtags:['#Buenos Aires','#Food','#Theater',"Nature"],
    title:'Night On The City',
    activities:[
        {
            name:'Don Julio',
            photo:'https://media-cdn.tripadvisor.com/media/photo-s/24/1d/97/e7/don-julio.jpg',
            description:'Don Julio is a famous steakhouse in Buenos Aires, Argentina, renowned for its top-quality Argentine beef and traditional grilling methods. Since 1999, it has drawn acclaim for its delicious cuts, offering an authentic dining experience in a cozy, rustic setting.',
            ubication:'Guatemala 4699, CABA, Buenos Aires'
        },
        {
            name:'Teatro Colon',
            photo:'https://teatrocolon.org.ar/sites/default/files/styles/d8/public/teatro-colon-argentina-image_1366_768.jpg?itok=bpxe64GH',
            description:'The Teatro Colón is a renowned opera house located in Buenos Aires, Argentina. It stands as one of the most prestigious venues for opera and ballet worldwide. With a rich history dating back to its inauguration in 1908, the theater boasts stunning architectural design, remarkable acoustics, and opulent interiors. Its stage has hosted world-class performances by renowned artists and companies, cementing its status as an iconic cultural landmark in South America and beyond.',
            ubication:'Cerrito 628, CABA, Buenos Aires'
        },
        {
            name:'The Japanese Garden',
            photo:'https://www.infoviajera.com/wp-content/uploads/2021/10/visita-jardin-japones-buenos-aires-2021-32-min.jpg',
            description:'The Japanese Garden is a beautiful space in Buenos Aires, Argentina, reflecting the serenity and beauty of Japanese culture. Designed as an oasis of peace, this garden offers a harmonious fusion of natural elements like ponds, bridges, pathways, and lush vegetation, combined with architecture and details characteristic of Japanese tradition. Visitors can indulge in contemplative calm, partake in tea ceremonies, explore a variety of plants, and discover meaningful symbols representing Japanese philosophy and aesthetics, making it a charming place for reflection and connection with nature.',
            ubication:'Av. Casares 3450, Palermo, Buenos Aires'
        }
    ]
},
]

Itinerary.insertMany(itineraries)