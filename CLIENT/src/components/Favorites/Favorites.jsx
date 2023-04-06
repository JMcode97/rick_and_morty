import React, { useState } from "react"
import { connect } from "react-redux"
import Card from "../Card/Card"
import { orderCards, filterCards } from "../../redux/actions"
import { useDispatch } from "react-redux"

const Favorites = ({ myFavorites }) => {
    const [aux, setAux] = useState(false)
    const dispatch = useDispatch()

    const handleOrder = (event) => {
        setAux(!aux)
        dispatch(orderCards(event.target.value))
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <>
            <select 
            onChange={handleOrder}
            >
                <option>Select Order</option>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select
            onChange={handleFilter}
            >
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
            {
                myFavorites.map(({ id, name, status, species, gender, image, origin, onClose}) => {
                    return (
                        <Card 
                        key={id}
                        id={id}
                        name={name}
                        status={status}
                        species={species}
                        gender={gender}
                        origin={origin}
                        image={image}
                        onClose={onClose}
                        />
                    )
                })
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps)(Favorites)