
import './App.css';
import FormularioLogin from './components/FormularioLogin';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div><FormularioLogin></FormularioLogin></div>
    </div>
  );
}

export default App;
