import AsyncStorage from '@react-native-async-storage/async-storage'

const initialState = {
    user: null,
    message:null,
    newuser: {},

}

const userReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case 'user':
            return {
                ...state,
                user: action.payload, 

            }

        case 'message':
            return {
                ...state,
                message: action.payload,   
            }

            case 'newuser':
                return {
                    ...state,
                    newuser: action.payload,  
            }
            // case "user_logout" :
            //     const deleteStorage = async () =>{
            //         return  await AsyncStorage.removeItem('token')
            //     }
            //     deleteStorage()
            //     return{
            //         user:null,

            //     }

        default:
            return state
    }
}
export default userReducer