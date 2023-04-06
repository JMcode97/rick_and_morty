import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions"

const initState = {
    myFavorites: [],
    allCharacters: [],
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.myFavorites, action.payload]
            }

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((el) => el.id !== action.payload)
            }

        case FILTER:
            if(action.payload === 'All') return {...state, myFavorites: state.allCharacters}
            return {
                ...state,
                myFavorites: [...state.allCharacters].filter((char) => char.gender === action.payload)
            }

            case ORDER:
            let allCharactersOrder = [...state.allCharacters]
            if(action.payload === 'A'){
                allCharactersOrder.sort((a, b) => {
                    if(a.id < b.id) return -1
                    return 1
                })
            } 

            if(action.payload === 'D'){
                allCharactersOrder.sort((a, b) => {
                    if(a.id > b.id) return -1
                    return 1
                })
            } 

            return{
                ...state,
                myFavorites: allCharactersOrder
            }    

        default:
            return {...state}
    }
}

export default rootReducer