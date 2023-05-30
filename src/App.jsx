import { useState } from 'react';
import './App.css';
import GridCss from './Proyectos/GridCss';
import GripLineas from './Proyectos/GripLineas';
import Instagram from './Proyectos/Instagram';
import Menu from './Proyectos/Menu';
import HeaderPerfil from './Proyectos/HeaderPerfil';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='App'>

        <div className='contentHeader'>
          <HeaderPerfil />
        </div>
        <Menu />
        <div className='contentInstagram'>
          <Instagram />
        </div>
      </div>
    </>
  );
}

export default App;
