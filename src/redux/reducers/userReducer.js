const INITIAL_STATE = {
    firstname: '',
    isLoggedIn: false,
}

const userReducer = ( state= INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_IS_LOGGED_IN':
            return {
                ...state,
                isLoggedIn: action.isLoggedIn,
            }

        case 'SET_FIRST_NAME':
            return{
                ...state,
                firstName: action.firstName
            }
        default:
            return state;
    }
};

export default userReducer;