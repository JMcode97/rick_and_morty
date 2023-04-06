import { useState } from "react"
import validate from "./validation"

export default function Form({ login }) {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    })

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
        setErrors(validate({...userData, [event.target.name]: event.target.value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }

    return(
        <form 
        onSubmit={handleSubmit}
        >
            <div>
                <label>Correo: </label>
                <input 
                type="text"
                name="email"
                value={userData.email}
                onChange={handleChange} 
                />
                {errors.email ? (<p>{errors.email}</p>) : ('')}
            </div>

            <div>
                <label>Contraseña: </label>
                <input 
                type="text"
                name="password"
                value={userData.password}
                onChange={handleChange} 
                />
                {errors.password ? (<p>{errors.password}</p>) : ('')}
            </div>
            <button
            type="submit"
            >
            Submit
            </button>
        </form>
    )
}