
import './App.css'
import FormularioLogin from './components/FormularioLogin';
import Navbar from './components/Navbar';
import { useCookies } from 'react-cookie';
import Inventario from './components/Inventario';

function App() {
  
  const [cookies] = useCookies(['login']);
  
  
  
  return (

    <div className="App">

      <Navbar>
      </Navbar>
      <div  id="divContent">{cookies.vali ? <Inventario></Inventario> : <FormularioLogin></FormularioLogin>}
        
      </div>
    </div>
  );
}

export default App;
