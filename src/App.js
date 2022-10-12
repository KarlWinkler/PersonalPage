import './styles/base.scss';
import{
  BrowserRouter as Router,
  Route, 
  Routes
} from "react-router-dom";
import Home from './Pages/Home';
import Header from './Components/Header';

function App() {
  return (
    <div className='app'>
      <Router>
        <div className='header'>
          <Header />
        </div>
        <div className='page'>
          <Routes>
            <Route path="/" exact element={<Home />}/>
          </Routes>
        </div>
      </Router>
      <div className='footer'>
        <div>Footer</div>
      </div>
    </div>
  );
}

export default App;
