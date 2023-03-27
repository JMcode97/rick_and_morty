import { ADD_FAV, REMOVE_FAV } from "./actions"

const initState = {
    myFavorites: []
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((el) => el.id !== action.payload)
            }

        default:
            return {...state}
    }
}

export default rootReducer