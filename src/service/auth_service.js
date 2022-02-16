import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
    login(providerName) {
        // const provider = new GoogleAuthProvider();
        // Google 경우, Google가 들어가도록 설정
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }
}

export default AuthService;