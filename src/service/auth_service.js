import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
    login(providerName) {
        // const provider = new GoogleAuthProvider();
        // Google 경우, Google가 들어가도록 설정
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }

    //login이 되어있다면 바로 main 화면으로 전환
    onAuthChnage(onUserChanged) {
        firebase.auth().onAuthStateChanged(user => {
            onUserChanged(user);
        })
    }

    logout() {
        firebase.auth().signOut();
    }
}

export default AuthService;