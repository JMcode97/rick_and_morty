import React from "react"
import { connect } from "react-redux"
import Card from "../Card/Card"

const Favorites = ({ myFavorites }) => {
    return (
        <>
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