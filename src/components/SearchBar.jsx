import { useState } from "react";

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('')

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div>
         <input 
         type='search'
         value={id}
         onChange={handleChange} 
         />
         <button 
         onClick={() => {
            onSearch(id)
            setId('')
         }}
         >
         Agregar
         </button>
         <button
         onClick={() => {
            onSearch(id, true)
            setId('')
         }}
         >
         Random
         </button>
      </div>
   );
}