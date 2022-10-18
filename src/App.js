// https://dev.to/janjibdev/problem-with-react-router-app-and-github-pages-lij

import './styles/base.scss';
import{
  BrowserRouter as Router,
  Route, 
  Routes
} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className={`app ${localStorage.getItem('mode') === 'dark' ? 'dark' : ''}` } >
      <Router>
        <div className='header'>
          <Header />
        </div>
        <div className='page'>
          <Routes>
            <Route path="/PersonalPage/" element={<Home />}/>
            <Route path="/PersonalPage/about" element={<About />}/>
          </Routes>
        </div>
      </Router>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
