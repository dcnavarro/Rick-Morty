import { GET_CHARACTERS, DELETE_CHARACTER, CREATE_CHARACTER } from "../actions/index"

const initialState={
    characters: [],
    myCharacters: [],
    detail: {}
}

const rootReducer = (state= initialState, action)=>{
        switch(action.type){
            case GET_CHARACTERS:
                return{
                    ...state,
                    characters: action.payload,
                }
            
            case DELETE_CHARACTER:
                return{
                    ...state,
                    characters: state.characters.filter(
                        (char)=>char.id !== action.payload)
                }

            case CREATE_CHARACTER:
                return{
                    ...state,
                    myCharacters: [...state.myCharacters, action.payload],
                }

            default:
                return{
                    ...state,
                }
        }
}

export default rootReducer;