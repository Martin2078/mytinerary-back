import City from "../City.js";
import 'dotenv/config.js'
import '../../config/database.js'

let cities=[{
    cityName:'Buenos Aires',
    country:'Argentina',
    photo:['https://www.cronista.com/files/image/352/352344/61251b22add52.jpg','https://media.istockphoto.com/id/667138246/es/foto/argentina-buenos-aires-amanecer-en-el-centro-con-hora-punta.jpg?s=612x612&w=0&k=20&c=tpvOrY5aqJBBaqb5X27WjlhDsUB0GHJWc1GRD5Z5icQ=','https://media.vivieloeste.com.ar/p/c134f5cff37a84a4c9b3c90c8659daa3/adjuntos/320/imagenes/000/064/0000064827/1200x0/smart/jardin-japones-2jpg.jpg'],
    popularity:0,
    description:"Buenos Aires, the capital of Argentina, is a dynamic and culturally rich metropolis that combines stunning architecture with a vibrant art scene and delicious cuisine. Known for its passion for tango and European-influenced architecture, the city offers a unique blend of history and modernity in its diverse neighborhoods, each with its own charm. Porteño cafes, bars, and restaurants provide an exceptional culinary experience, while parks and plazas offer green spaces amidst the bustling urban life. Buenos Aires is a place where culture and passion intertwine, creating a captivating atmosphere that attracts visitors from around the world."
},{
    cityName:'Rome',
    country:'Italy',
    photo:['https://www.cronista.com/files/image/352/352344/61251b22add52.jpg','https://media.istockphoto.com/id/667138246/es/foto/argentina-buenos-aires-amanecer-en-el-centro-con-hora-punta.jpg?s=612x612&w=0&k=20&c=tpvOrY5aqJBBaqb5X27WjlhDsUB0GHJWc1GRD5Z5icQ=','https://media.vivieloeste.com.ar/p/c134f5cff37a84a4c9b3c90c8659daa3/adjuntos/320/imagenes/000/064/0000064827/1200x0/smart/jardin-japones-2jpg.jpg'],
    popularity:0,
    description:"Rome, the 'Eternal City,' is an extraordinary destination in the heart of Italy that blends a rich historical heritage with contemporary vitality. This timeless metropolis is celebrated for its iconic landmarks, such as the majestic Colosseum and the historic Roman Forum, which evoke the grandeur of the Roman Empire. In addition to its ancient legacy, Rome is renowned for its exceptional cuisine, where you can delight in authentic pizzas, pastas, and gelato in picturesque corners of the city. With cobbled streets and impressive architecture at every turn, Rome offers an unforgettable experience that combines history, culture, and culinary delights in an unparalleled setting."
},
{
    cityName:'Paris',
    country:'France',
    photo:['https://www.cronista.com/files/image/352/352344/61251b22add52.jpg','https://media.istockphoto.com/id/667138246/es/foto/argentina-buenos-aires-amanecer-en-el-centro-con-hora-punta.jpg?s=612x612&w=0&k=20&c=tpvOrY5aqJBBaqb5X27WjlhDsUB0GHJWc1GRD5Z5icQ=','https://media.vivieloeste.com.ar/p/c134f5cff37a84a4c9b3c90c8659daa3/adjuntos/320/imagenes/000/064/0000064827/1200x0/smart/jardin-japones-2jpg.jpg'],
    popularity:0,
    description:"Paris, known as the 'City of Light,' is a magical enclave in the heart of France that dazzles with its elegance and sophistication. This iconic city is famous for its emblematic architecture, including the majestic Eiffel Tower, its broad boulevards, and Notre-Dame Cathedral. In addition to its architectural heritage, Paris is a center of art and culture, home to some of the world's most renowned museums such as the Louvre and the Musée d'Orsay. Parisian cuisine is unparalleled, with delicious croissants, cheeses, and wines immersing you in the delightful French culinary tradition. Strolling along the Seine's banks and enjoying life in its cafes are experiences that reflect the city's charm. Paris is undoubtedly an essential destination that combines beauty, culture, and romance in an unforgettable package."
},
{
    cityName:'Kyoto',
    country:'Japan',
    photo:['https://www.cronista.com/files/image/352/352344/61251b22add52.jpg','https://media.istockphoto.com/id/667138246/es/foto/argentina-buenos-aires-amanecer-en-el-centro-con-hora-punta.jpg?s=612x612&w=0&k=20&c=tpvOrY5aqJBBaqb5X27WjlhDsUB0GHJWc1GRD5Z5icQ=','https://media.vivieloeste.com.ar/p/c134f5cff37a84a4c9b3c90c8659daa3/adjuntos/320/imagenes/000/064/0000064827/1200x0/smart/jardin-japones-2jpg.jpg'],
    popularity:0,
    description:"Kyoto, the ancient capital of Japan, is a treasure trove of Japanese culture that immerses you in a unique atmosphere of serenity and tradition. The city is dotted with majestic temples, meticulously maintained gardens, and historic streets that evoke centuries of history. Among the highlights is the resplendent Kinkaku-ji Temple, whose golden walls shimmer next to a serene lake. Kyoto is also home to the Gion district, where you can encounter iconic geishas and savor authentic Japanese cuisine in cozy restaurants. The city offers a palette of colors in every season, from cherry blossoms in spring to the vibrant autumnal hues of bamboo forests. In Kyoto, beauty and tranquility intertwine to provide an unforgettable cultural and spiritual experience."
},
{
    cityName:'Rio de Janeiro',
    country:'Brazil',
    photo:['https://www.cronista.com/files/image/352/352344/61251b22add52.jpg','https://media.istockphoto.com/id/667138246/es/foto/argentina-buenos-aires-amanecer-en-el-centro-con-hora-punta.jpg?s=612x612&w=0&k=20&c=tpvOrY5aqJBBaqb5X27WjlhDsUB0GHJWc1GRD5Z5icQ=','https://media.vivieloeste.com.ar/p/c134f5cff37a84a4c9b3c90c8659daa3/adjuntos/320/imagenes/000/064/0000064827/1200x0/smart/jardin-japones-2jpg.jpg'],
    popularity:0,
    description:"Rio de Janeiro, the 'Marvelous City' of Brazil, is an iconic destination that combines spectacular natural beauty with vibrant Carioca culture. Nestled between golden sand beaches and hills covered in lush tropical vegetation, the city provides a unique backdrop for a rich cultural life and an unrestrained passion for music and dance. From the iconic Christ the Redeemer statue on Corcovado Mountain to the famous carnival parade in the Sambadrome, Rio de Janeiro is a celebration of life and diversity. With its effervescent character and stunning natural setting, this city is a place where beauty, music, and the joy of living come together in an unforgettable experience."
},
{
    cityName:'Moscow',
    country:'Russia',
    photo:['https://www.cronista.com/files/image/352/352344/61251b22add52.jpg','https://media.istockphoto.com/id/667138246/es/foto/argentina-buenos-aires-amanecer-en-el-centro-con-hora-punta.jpg?s=612x612&w=0&k=20&c=tpvOrY5aqJBBaqb5X27WjlhDsUB0GHJWc1GRD5Z5icQ=','https://media.vivieloeste.com.ar/p/c134f5cff37a84a4c9b3c90c8659daa3/adjuntos/320/imagenes/000/064/0000064827/1200x0/smart/jardin-japones-2jpg.jpg'],
    popularity:0,
    description:"Moscow, the capital of Russia, is a city that encapsulates a rich history and a contemporary ambiance. With its imposing golden domes, Moscow serves as a constant reminder of its imperial and Soviet past, with the Kremlin at the center of its historical heritage. Red Square, featuring the majestic St. Basil's Cathedral as its architectural jewel, is an iconic symbol evoking Russian splendor. However, Moscow is not just an open-air museum but also a bustling metropolis with modern skyscrapers, a thriving art scene, and a lively nightlife. The city's unique character, where the grandeur of its legacy converges with the energy of a modern city, makes exploring it a fascinating experience."
},
{
    cityName:'Londres',
    country:'United Kingdom',
    photo:['https://www.cronista.com/files/image/352/352344/61251b22add52.jpg','https://media.istockphoto.com/id/667138246/es/foto/argentina-buenos-aires-amanecer-en-el-centro-con-hora-punta.jpg?s=612x612&w=0&k=20&c=tpvOrY5aqJBBaqb5X27WjlhDsUB0GHJWc1GRD5Z5icQ=','https://media.vivieloeste.com.ar/p/c134f5cff37a84a4c9b3c90c8659daa3/adjuntos/320/imagenes/000/064/0000064827/1200x0/smart/jardin-japones-2jpg.jpg'],
    popularity:0,
    description:"London, the capital of the United Kingdom, dazzles with its rich history, impressive architecture, and cultural diversity. From iconic landmarks to the lively streets of its eclectic neighborhoods, the city offers a unique experience. With a vibrant art scene, world-renowned museums, and a blend of international cuisine, London is a melting pot of cultures and an endless source of experiences in one of the world's most iconic cities."
},
{
    cityName:'New York',
    country:'United States',
    photo:['https://www.cronista.com/files/image/352/352344/61251b22add52.jpg','https://media.istockphoto.com/id/667138246/es/foto/argentina-buenos-aires-amanecer-en-el-centro-con-hora-punta.jpg?s=612x612&w=0&k=20&c=tpvOrY5aqJBBaqb5X27WjlhDsUB0GHJWc1GRD5Z5icQ=','https://media.vivieloeste.com.ar/p/c134f5cff37a84a4c9b3c90c8659daa3/adjuntos/320/imagenes/000/064/0000064827/1200x0/smart/jardin-japones-2jpg.jpg'],
    popularity:0,
    description:'Buenos Aires, la capital de Argentina, es una metrópolis dinámica y culturalmente rica que combina una arquitectura impresionante con una escena artística vibrante y una deliciosa gastronomía. Conocida por su pasión por el tango y la arquitectura de influencia europea, la ciudad ofrece una mezcla única de historia y modernidad en sus variados barrios, cada uno con su propio encanto. Los cafés, bares y restaurantes porteños brindan una experiencia culinaria excepcional, mientras que los parques y plazas ofrecen espacios verdes en medio de la bulliciosa vida urbana. Buenos Aires es un lugar donde la cultura y la pasión se entrelazan, creando un ambiente cautivador que atrae a visitantes de todo el mundo.'
},
{
    cityName:'Barcelona',
    country:'Spain',
    photo:['https://www.cronista.com/files/image/352/352344/61251b22add52.jpg','https://media.istockphoto.com/id/667138246/es/foto/argentina-buenos-aires-amanecer-en-el-centro-con-hora-punta.jpg?s=612x612&w=0&k=20&c=tpvOrY5aqJBBaqb5X27WjlhDsUB0GHJWc1GRD5Z5icQ=','https://media.vivieloeste.com.ar/p/c134f5cff37a84a4c9b3c90c8659daa3/adjuntos/320/imagenes/000/064/0000064827/1200x0/smart/jardin-japones-2jpg.jpg'],
    popularity:0,
    description:'Barcelona, a jewel on the Mediterranean coast of Spain, is a city that seamlessly blends its rich historical heritage with vibrant modernity and a zest for life. With its unique architecture, embodied by the masterpieces of Antoni Gaudí, such as the Sagrada Familia and Park Güell, the city is a visual feast that combines architectural innovation with tradition. The bustling Ramblas, historic neighborhoods like the Gothic Quarter and El Raval, and the golden sandy beaches along the Mediterranean are just some of the facets of this ever-evolving metropolis. Barcelona is known for its artistic culture, lively culinary scene, and love for music and football. The Catalan city envelops you in a unique atmosphere where creativity, diversity, and passion flow freely, making each visit an unforgettable experience.'
},
{
    cityName:'Dubai',
    country:'United Arab Emirates',
    photo:['https://www.cronista.com/files/image/352/352344/61251b22add52.jpg','https://media.istockphoto.com/id/667138246/es/foto/argentina-buenos-aires-amanecer-en-el-centro-con-hora-punta.jpg?s=612x612&w=0&k=20&c=tpvOrY5aqJBBaqb5X27WjlhDsUB0GHJWc1GRD5Z5icQ=','https://media.vivieloeste.com.ar/p/c134f5cff37a84a4c9b3c90c8659daa3/adjuntos/320/imagenes/000/064/0000064827/1200x0/smart/jardin-japones-2jpg.jpg'],
    popularity:0,
    description:"Dubai, the jewel of the United Arab Emirates, is a city of superlatives that marries the rich heritage of the Arabian Peninsula with a futuristic skyline and a relentless spirit of innovation. This metropolis is renowned for its iconic skyscrapers, such as the Burj Khalifa, the world's tallest building, and the Palm Jumeirah, an engineering marvel that juts into the Persian Gulf. Amidst the desert sands, you'll find a vibrant and multicultural city where traditional souks and modern shopping malls coexist. Dubai is a global hub for business, luxury shopping, and entertainment, offering a wide array of experiences, from desert safaris and pristine beaches to world-class cuisine and a thriving arts scene. It's a place where the past and the future merge, creating an extraordinary destination that continues to redefine opulence and ambition."
},
{
    cityName:'Athens',
    country:'Greece',
    photo:['https://www.cronista.com/files/image/352/352344/61251b22add52.jpg','https://media.istockphoto.com/id/667138246/es/foto/argentina-buenos-aires-amanecer-en-el-centro-con-hora-punta.jpg?s=612x612&w=0&k=20&c=tpvOrY5aqJBBaqb5X27WjlhDsUB0GHJWc1GRD5Z5icQ=','https://media.vivieloeste.com.ar/p/c134f5cff37a84a4c9b3c90c8659daa3/adjuntos/320/imagenes/000/064/0000064827/1200x0/smart/jardin-japones-2jpg.jpg'],
    popularity:0,
    description:"Athens, the cradle of Western civilization and the capital of Greece, is a city steeped in history, philosophy, and mythology. As you wander through its ancient streets, you'll encounter iconic landmarks like the Acropolis, where the Parthenon stands as a testament to the city's glorious past. Athens is a unique blend of antiquity and modernity, with classical ruins harmonizing with a bustling urban landscape. The Plaka district, with its narrow alleys and traditional tavernas, offers a taste of Greek culture, while the National Archaeological Museum showcases a treasure trove of ancient artifacts. The city is a vibrant center for the arts, culture, and intellectual discourse, and its lively atmosphere, Mediterranean cuisine, and warm hospitality make it a destination that celebrates its rich heritage while embracing the contemporary world. Athens is a place where the echoes of philosophers and the whispers of ancient myths infuse the air, making every visit a journey through time and intellect."
},
{
    cityName:'Bangkok',
    country:'Thailand',
    photo:['https://www.cronista.com/files/image/352/352344/61251b22add52.jpg','https://media.istockphoto.com/id/667138246/es/foto/argentina-buenos-aires-amanecer-en-el-centro-con-hora-punta.jpg?s=612x612&w=0&k=20&c=tpvOrY5aqJBBaqb5X27WjlhDsUB0GHJWc1GRD5Z5icQ=','https://media.vivieloeste.com.ar/p/c134f5cff37a84a4c9b3c90c8659daa3/adjuntos/320/imagenes/000/064/0000064827/1200x0/smart/jardin-japones-2jpg.jpg'],
    popularity:0,
    description:"Bangkok, the vibrant capital of Thailand, is a city of captivating dualities where the ancient and the modern seamlessly intertwine. Its skyline, adorned with gleaming skyscrapers, stands in contrast to the serene beauty of its ornate temples, such as Wat Pho and Wat Arun. The bustling street markets and the grandeur of the Grand Palace reflect the city's dynamic spirit, while the Chao Phraya River winds through the urban landscape, offering picturesque boat rides. Bangkok's street food is a culinary adventure, and its diverse neighborhoods cater to every taste, from upscale dining to lively nightlife. This city is an open invitation to explore a rich tapestry of culture, cuisine, and history while being embraced by the pulse of contemporary life, making it a unique destination where the past and the future harmoniously converge."
},
{
    cityName:'Mexico City',
    country:'Mexico',
    photo:['https://www.cronista.com/files/image/352/352344/61251b22add52.jpg','https://media.istockphoto.com/id/667138246/es/foto/argentina-buenos-aires-amanecer-en-el-centro-con-hora-punta.jpg?s=612x612&w=0&k=20&c=tpvOrY5aqJBBaqb5X27WjlhDsUB0GHJWc1GRD5Z5icQ=','https://media.vivieloeste.com.ar/p/c134f5cff37a84a4c9b3c90c8659daa3/adjuntos/320/imagenes/000/064/0000064827/1200x0/smart/jardin-japones-2jpg.jpg'],
    popularity:0,
    description:"Mexico City, the sprawling and vibrant capital of Mexico, is a city of immense cultural richness and historical significance. Its heart beats with a blend of pre-Hispanic heritage, colonial architecture, and modernity. The historic center, a UNESCO World Heritage site, is a tapestry of grand churches, ornate palaces, and bustling markets, including the Zócalo, one of the world's largest public squares. The city is a treasure trove of art and culture, with world-class museums like the Museo Frida Kahlo and the Palacio de Bellas Artes. Its culinary scene is celebrated globally, offering everything from street tacos to haute cuisine. Mexico City's green spaces, like Chapultepec Park, provide a respite from urban life, while neighborhoods like Coyoacán and Condesa exude a bohemian charm. This metropolis is a dynamic crossroads where tradition and innovation intersect, making it a captivating destination that invites exploration at every corner."
},
{
    cityName:'Beijing',
    country:'China',
    photo:['https://www.cronista.com/files/image/352/352344/61251b22add52.jpg','https://media.istockphoto.com/id/667138246/es/foto/argentina-buenos-aires-amanecer-en-el-centro-con-hora-punta.jpg?s=612x612&w=0&k=20&c=tpvOrY5aqJBBaqb5X27WjlhDsUB0GHJWc1GRD5Z5icQ=','https://media.vivieloeste.com.ar/p/c134f5cff37a84a4c9b3c90c8659daa3/adjuntos/320/imagenes/000/064/0000064827/1200x0/smart/jardin-japones-2jpg.jpg'],
    popularity:0,
    description:"Beijing, China's capital, harmonizes a tapestry of ancient heritage and modern energy in a single vibrant mosaic. The city's historical epicenter, the Forbidden City, echoes the grandeur of China's imperial past, while Tiananmen Square stands as a symbol of contemporary political significance. Beijing's intricate network of hutongs unveils traditional life, contrasting against the contemporary skyline adorned with architectural marvels. Culinary experiences range from Peking duck to local delights, and the city thrives with art, music, and serene temples like the Temple of Heaven. Beijing is a dynamic canvas where history intertwines with innovation, offering visitors a unique blend of China's rich past and its forward-looking aspirations in a singular, awe-inspiring setting."
},
{
    cityName:'Cordoba',
    country:'Argentina',
    photo:['https://www.cronista.com/files/image/352/352344/61251b22add52.jpg','https://media.istockphoto.com/id/667138246/es/foto/argentina-buenos-aires-amanecer-en-el-centro-con-hora-punta.jpg?s=612x612&w=0&k=20&c=tpvOrY5aqJBBaqb5X27WjlhDsUB0GHJWc1GRD5Z5icQ=','https://media.vivieloeste.com.ar/p/c134f5cff37a84a4c9b3c90c8659daa3/adjuntos/320/imagenes/000/064/0000064827/1200x0/smart/jardin-japones-2jpg.jpg'],
    popularity:0,
    description:"Córdoba, a historic city in the heart of Argentina, is a captivating blend of colonial charm and modern vitality. Nestled in the Sierras de Córdoba, the city is surrounded by stunning natural beauty, making it a paradise for outdoor enthusiasts. Córdoba's colonial architecture, exemplified by the iconic Jesuit Block, is a UNESCO World Heritage site and a testament to its rich history. The city's vibrant cultural scene includes numerous theaters, museums, and universities, earning it a reputation as Argentina's 'University City.' Córdoba's nightlife and culinary offerings are equally dynamic, offering a taste of the local culture. With a welcoming atmosphere, a rich cultural heritage, and a backdrop of breathtaking landscapes, Córdoba invites exploration and celebration of Argentina's diverse and vibrant identity."
}]

City.insertMany(cities)
