import { useEffect, useState } from "react";

const Pokebola = () => {
    const [pokemones, setPokemones] = useState([]);
  const [lista, setlista] = useState([])

  const traerPokemones = useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((data) => setPokemones(data.results));
  }, []);

  function traer_Pokemones() {
    console.log(pokemones);
  }

  function mostrarPokemones(){
  for (let i = 0 ; i<=19; i++) {
    console.log(pokemones[i].name)
    setlista((valor)=>[...valor,<p>{pokemones[i].name}</p>])
    }
  }
    return  <button className="button_class" onClick={mostrarPokemones}> pokemones </button>

}

export default Pokebola