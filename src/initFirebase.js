import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import router from './router';
import store from './store';

const configOptions = {
  apiKey: "AIzaSyBe23vGrWbbtK6cWQflEewoDvTBtKWQEBM",
  authDomain: "test-project-116cf.firebaseapp.com",
  databaseURL: "https://test-project-116cf.firebaseio.com",
  projectId: "test-project-116cf",
  storageBucket: "test-project-116cf.appspot.com",
  messagingSenderId: "507446435196",
  appId: "1:507446435196:web:8a13dc8c60ddcf65e058f9",
  measurementId: "G-H01LY21GK7",
};

firebase.initializeApp(configOptions);

export const auth = firebase.auth();

firebase.auth().onAuthStateChanged((user) => {
  store.dispatch('fetchUser', user);
  if (router.currentRoute.meta.requiresAuth && !user) {
    router.push('/login');
  } else if (router.currentRoute.meta.login && user) {
    router.push('/about');
  }
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !auth.currentUser) {
    router.push('/login')
      .catch(() => {});
  } else if (to.meta.login && auth.currentUser) {
    router.push(from.path)
      .catch(() => {});
  } else next();
});

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();
