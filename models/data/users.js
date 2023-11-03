import User from '../User.js'
import 'dotenv/config.js'
import '../../config/database.js'

let users = [{
    name: 'Ricky',
    surname:'Fort',
    email: 'mytinerary@gmail.com',
    password:'$2a$10$XZBDuOYHcHSzZNzf2ws7Quvu3YmKgSagWRUG1eGlBLSdxJunpN1LC',
    photo: 'https://i.postimg.cc/fyJsspq8/image.png',
    online: false,
    role:1
}]

User.insertMany(users)