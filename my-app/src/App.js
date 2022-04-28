import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import './components/fontawesome'
import './Media.css';
import './index.css';
// eslint-disable-next-line
import Preloader from './components/preloader';
// eslint-disable-next-line
import Navbar from './components/navbar';
import Main from './components/main';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Preloader />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}



export default App;
