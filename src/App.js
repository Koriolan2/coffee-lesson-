import './App.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Shop } from './Components/Shop';
import { Cart } from './Components/Cart';
import { Header } from './Components/Header';
import { useCart } from './Components/useCart';
import { useAuth } from './Components/useAuth';

const firebaseConfig = {
  apiKey: "AIzaSyBedKxBsi828EUcdOTV6rKYlqntgNq5o_M",
  authDomain: "coffes.firebaseapp.com",
  projectId: "coffes",
  storageBucket: "coffes.appspot.com",
  messagingSenderId: "156055095103",
  appId: "1:156055095103:web:e471e09b8f49b8f42f758a"
};


firebase.initializeApp(firebaseConfig);

function App() {
  const authFirebase = firebase.auth;

  const auth = useAuth(authFirebase);

  const toCart = useCart();
  
  return (
    <>
      <Header {...auth}/>
      <div className="wrapper">
        <Shop toCart = {toCart}/>
        <Cart {...toCart}/>
      </div>
    </>
  );
}

export default App;
