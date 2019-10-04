const initialState = {
    user: {},
    isLoggedIn: false
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case 'GET_SESSION_USER': 
            return {...state, user: action.payload};
        case 'LOGIN': 
            return {...state, isLoggedIn: true};
        case 'LOGOUT': 
            return {...state, user: {}, isLoggedIn: false};

        default: return state;
    }
}