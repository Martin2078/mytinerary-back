// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { v4 } from "uuid";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export default async function firebaseComments(req, res, next) {
    const firebaseConfig = {
        apiKey: "AIzaSyCzS1bzOgwuo2FEhn5yOR4_gBfLloAE1ns",
        authDomain: "mytineraryfirebase.firebaseapp.com",
        projectId: "mytineraryfirebase",
        storageBucket: "mytineraryfirebase.appspot.com",
        messagingSenderId: "90155251498",
        appId: "1:90155251498:web:95c3201589a49b559ad053",
        measurementId: "G-M5VYVR4ZJZ"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app)
    
    try {
        req.body.valoration={}
        req.body.valoration.value=req.body.valorationValue
        req.body.valoration.textValue=req.body.valorationTextValue
        if (req.files==null) {
            next()
        }
        let commentPhotos=[]
        for (const img of req.files.photo) {
            const storageRef = ref(storage, `commentsPhotos/${v4()}`)
            const activityPhotoMetadata = {
                contentType: img.mimetype,
                size: img.size
            }
            await uploadBytes(storageRef, img.data, activityPhotoMetadata)
            const url = await getDownloadURL(storageRef)
            commentPhotos.push(url)
        }
        req.body.photo=commentPhotos
        console.log(req.body);
        return next()
        
    } catch (error) {

    }
}
