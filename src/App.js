import './App.css';
import { HashRouter as Router, Routes, Route, } from 'react-router-dom';
import { HomeScreen } from './pages/homescreen';
import { PlaceToStayScreen } from './pages/placeToStayscreen';
import { Errorpage } from './components/errorpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={ <HomeScreen/> }/>
        <Route exact path='/placeToStay' element={ <PlaceToStayScreen/> }/>
        <Route exact path='/nft' element={ <Errorpage/> }/>
        <Route exact path='/community' element={ <Errorpage/> }/>
      </Routes>
    </Router>
  );
}

export default App;
