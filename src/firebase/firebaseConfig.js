import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
	apiKey: 'AIzaSyAkOIxQG23ASZ3d1gGrAZ2YXxTlR9PXiKQ',
	authDomain: 'react-ecommerce-7cd40.firebaseapp.com',
	projectId: 'react-ecommerce-7cd40',
	storageBucket: 'react-ecommerce-7cd40.appspot.com',
	messagingSenderId: '377326482646',
	appId: '1:377326482646:web:5bcf6fe4ee1a3f881b8577',
	measurementId: 'G-EEFT4L6JP5'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
