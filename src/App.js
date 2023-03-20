import { useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import axios from 'axios';

function App() {
   const [characters, setCharacters] = useState([])

   const onSearch = (id, random) => {
      if(random) id = Math.floor(Math.random() * 827) + 1
      
      let apiCall = true

      characters.forEach((character) => {
         if(character.id == id) return apiCall = false
      })

      if(apiCall) {
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      }
      else alert(`El personaje con ID: ${id} ya esta agregado...`)
   }

   const onClose = (id) => {
      parseInt(id)
      let filteredCharacters = characters.filter((char) => char.id != id)
      setCharacters(filteredCharacters)
   }

   return (
      <div className='App'>
         <Nav
         onSearch={onSearch}
         />
         <Cards 
         characters={characters} 
         onClose={onClose}
         />
      </div>
   );
}

export default App;
