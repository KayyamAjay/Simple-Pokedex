import './App.css';
import React from 'react';
import PokeList from './components/PokeList';

function App() {
  const [pokemonList,setpokemonList]=React.useState([]);
  // const [pokemonimg,setpokemonimg]=React.useState([]);


  const fetchKanto = async ()=>{
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    
    const data = await response.json();
    const loadeddata = [];
    const wanteddata = data.results;
    console.log(wanteddata);
    for(const key in wanteddata){
      
      loadeddata.push({
        id:key,
        name:wanteddata[key].name,
        url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${+key+1}.png`
      })}
      setpokemonList(loadeddata);
      
  }
  const fetchJhoto = async ()=>{
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=151');
    
    const data = await response.json();
    const loadeddata = [];
    const wanteddata = data.results;
    console.log(wanteddata);
    for(const key in wanteddata){
      
      loadeddata.push({
        id:key,
        name:wanteddata[key].name,
        url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${+key+152}.png`
      })}
      setpokemonList(loadeddata);
      
  }
  const fetchSinnoh = async ()=>{
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=135&offset=251');
    
    const data = await response.json();
    const loadeddata = [];
    const wanteddata = data.results;
    console.log(wanteddata);
    for(const key in wanteddata){
      
      loadeddata.push({
        id:key,
        name:wanteddata[key].name,
        url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${+key+252}.png`
      })}
      setpokemonList(loadeddata);
      
  }
  // console.log(pokemonList);
  return (
    <React.Fragment>
      <header>
        <h1>PokeDex</h1>
    
      </header>
      <section>
        <button onClick={fetchKanto} >Get Kanto</button>
        <button onClick={fetchJhoto} >Get Jhoto</button>
        <button onClick={fetchSinnoh}>Get Sinnoh</button>
      </section>
    
      
      <PokeList pokelist={pokemonList}  />
    </React.Fragment>
  );
}

export default App;
