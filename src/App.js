import './App.css';
import Card from './components/card/Card';
import CardDetails from './components/card/CardDetails';
import CardExpand from './components/card/CardExpand';
import Slider from './components/sidebar/Slider';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Slider/>
      <Routes>
        <Route path="/" element={<CardExpand/>}/>
        <Route path="data/:id/" element={<CardDetails/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
