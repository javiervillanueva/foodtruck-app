const initialState = {
    user: {},
    isLoggedIn: false
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case 'LOGIN_USER': 
            return {...state, user: action.payload, isLoggedIn: true};

        default: return state;
    }
}