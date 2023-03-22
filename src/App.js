import { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import About from './views/About';
import Detail from './components/Detail/Detail';

function App() {
   // Usar metodo .find - setState((prev) => [...prev, data])
   const [characters, setCharacters] = useState([])

   const onSearch = (id, random) => {
      if(random) id = Math.floor(Math.random() * 827) + 1
      
      let apiCall = true

      characters.forEach((character) => {
         if(character.id === parseInt(id)) return apiCall = false
      })

      if(apiCall) {
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         })
         .catch(error => window.alert('¡No hay personajes con este ID!'))
      }
      else alert(`El personaje con ID: ${id} ya esta agregado...`)
   }

   const onClose = (id) => {
      let filteredCharacters = characters.filter((char) => char.id !== parseInt(id))
      setCharacters(filteredCharacters)
   }

   return (
      <div className='App'>
         <Nav
         onSearch={onSearch}
         />
         <Routes>
            <Route 
            path='/home'
            element={
               <Cards 
               characters={characters} 
               onClose={onClose}
               />
            }
            />
            <Route 
            path='/about'
            element={<About />}
            />
            <Route 
            path='/detail/:id'
            element={<Detail />}
            />
         </Routes>
      </div>
   );
}

export default App;
