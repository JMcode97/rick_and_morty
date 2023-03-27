import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom';
import About from './views/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites'
import Error from './components/Error/Error'

function App() {
   // Usar metodo .find
   const navigate = useNavigate()
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)

   let EMAIL = 'admin@admin.com'
   let PASSWORD = 'admin'

   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

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

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className='App'>
         <Nav
         onSearch={onSearch}
         />
         <Routes>
            <Route 
            path='/'
            element={<Form 
            login={login}
            />}
            />
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
            <Route 
            path='/favorites'
            element={<Favorites />}
            />
            <Route 
            path='/detail/:id'
            element={<Detail />}
            />
            <Route 
            path='*'
            element={<Error />}
            />
         </Routes>
      </div>
   );
}

export default App;
