import { addDoc, collection } from "firebase/firestore";
import { createStore } from "vuex";
import { db } from "../services/firebaseConnection"

export default createStore({
    actions: {
        async createQuestion(object, question) {
            console.log(question)
            // 'questions' collection reference
            const colRef = collection(db, 'questions')
            // data to send
            const dataObj = {
                name: question.nome,
                question: question.question,
                created: new Date(),
            };
            // create document and return reference to it
            const docRef = await addDoc(colRef, dataObj)

            // access auto-generated ID with '.id'
            console.log('Document was created with ID:', docRef.id)
        }
    }
})