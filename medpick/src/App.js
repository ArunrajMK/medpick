import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <SignIn/>
    <Footer/>
    </div>
  );
}

export default App;
