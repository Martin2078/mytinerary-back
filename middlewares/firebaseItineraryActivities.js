// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { v4 } from "uuid";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export default async function firebaseItineraryActivities(req, res, next) {
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
    let i = 0;
    let keyName;
    let activitiesArray = []
    try {
        do {
            let activity = {
                name: undefined,
                description: undefined,
                ubication: undefined,
                photo: []
            }
            keyName = `activity${i}`
            activity.name = req.body[keyName + `name`]
            activity.description = req.body[keyName + `description`]
            activity.ubication = req.body[keyName + `ubication`]
            if (req.files[keyName + `photo`].length>1) {
                for (const img of req.files[keyName + `photo`]) {
                    const storageRef = ref(storage, `activitiesPhotos/${v4()}`)
                    let archivo = img.data
                    const activityPhotoMetadata = {
                        contentType: img.mimetype,
                        size: img.size
                    }
                    await uploadBytes(storageRef, archivo, activityPhotoMetadata)
                    const url = await getDownloadURL(storageRef)
                    activity.photo.push(url)
                }
            }else{
                let archivo=req.files[keyName + `photo`].data
                const activityPhotoMetadata = {
                    contentType: req.files[keyName + `photo`].mimetype,
                    size: req.files[keyName + `photo`].size
                }
                const storageRef = ref(storage, `activitiesPhotos/${v4()}`)
                await uploadBytes(storageRef, archivo, activityPhotoMetadata)
                const url = await getDownloadURL(storageRef)
                activity.photo.push(url)
            }

            activitiesArray.push(activity)
            i = i + 1
        } while (req.body[`activity${i}name`] !== undefined)
        
        req.body.activities = activitiesArray
        return next()
        
    } catch (error) {

    }
}
