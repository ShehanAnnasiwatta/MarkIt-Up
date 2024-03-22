import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../config/firebaseConfig";


export const addfile = (file) => {
    return new Promise((resolve, reject) => {
        const storageRef = ref(storage, `files/${file.name}`)

        uploadBytes(storageRef, file).then(async () => {
            const fileURL = await getDownloadURL(storageRef)
            console.log("file url :", fileURL)
            resolve(fileURL)
        }).catch((err) => {
            console.log("Error :", err)
            reject(err)
        })
    })

}
