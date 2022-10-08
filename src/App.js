import "./App.css";

import Header from "./Header";
import Cuerpo from "./Cuerpo";
import Pie from "./Pie"

import Inicio from "./paginas/Inicio";
import Acercade from "./paginas/Acercade";
import Info from "./paginas/Info";
import Juegos from "./paginas/Juegos";
import Camara from "./paginas/Camara";
import Localizacion from "./paginas/Localizacion";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App () {
return (
    <div className="App">
      
      <BrowserRouter>
      <Header/>
      <Routes>

        <Route path="/inicio" element =
        {<Inicio/>}/>
        
        <Route path="/acercade" element =
        {<Acercade/>}/>

       <Route path="/info" element =
        {<Info/>}/>

       <Route path="/juegos" element =
        {<Juegos/>}/>
        
        <Route path="/Camara" element =
        {<Camara/>}/>

        <Route path="/localizacion" element =
        {<Localizacion/>}/>
      </Routes>
      </BrowserRouter>

      <Cuerpo/>
      <Pie/>


    </div>
  );
}

export default App;