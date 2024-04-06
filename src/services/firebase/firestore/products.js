import { getDocs, collection, query, where, orderBy, doc, getDoc} from 'firebase/firestore'
import { db } from '../firebaseConfig'
import { createProductAdaptedFromFirestore } from '../../../adapters/createProductAdaptedFromFirestore'

export const getProducts = (categoryId) => {

    const productsCollection = categoryId ? (
        query(collection(db, 'products'), where('category', '==', categoryId))
    ) : (
        query(collection(db, 'products'), orderBy('name','desc'))
    )

    return getDocs(productsCollection)
        .then(querySnapshot => {
            const productsAdapted = querySnapshot.docs.map(doc => {
                return createProductAdaptedFromFirestore(doc)
            })

            return productsAdapted
        })
        .catch((error) => {
            return error
        }) 
}

export const getProductById = (itemId) => {
    const productDoc = doc(db, 'products', itemId)

    return getDoc(productDoc)
        .then(queryDocumentSnapshot => {
            const productAdapted = createProductAdaptedFromFirestore(queryDocumentSnapshot)

            return productAdapted
        })
        .catch(error => {
            return error
        })
}