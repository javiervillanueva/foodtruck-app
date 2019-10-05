const initialState = {
    user: {},
    vendor: {},
    isLoggedIn: false
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case 'GET_SESSION_USER': 
            return {...state, user: action.payload};
        case 'GET_SESSION_VENDOR': 
            return {...state, vendor: action.payload};
        case 'LOGIN': 
            return {...state, isLoggedIn: true};
        case 'LOGOUT': 
            return {...state, vendor: {}, user: {}, isLoggedIn: false};

        default: return state;
    }
}