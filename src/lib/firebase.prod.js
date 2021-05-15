import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBRHq9gwWYsHsZc_yii1BTgN7XFwkvk9do',
	authDomain: 'dev-pranab-netflix.firebaseapp.com',
	projectId: 'dev-pranab-netflix',
	storageBucket: 'dev-pranab-netflix.appspot.com',
	messagingSenderId: '451194581822',
	appId: '1:451194581822:web:f34c3f9f56bdd48480726f',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
