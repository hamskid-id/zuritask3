import './App.css';
import { HashRouter as Router, Routes, Route, } from 'react-router-dom';
import { HomeScreen } from './pages/homescreen';
import { NftScreen } from './pages/nftscreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={ <HomeScreen/> }/>
        <Route exact path='/nft' element={ <NftScreen/> }/>
      </Routes>
    </Router>
  );
}

export default App;
