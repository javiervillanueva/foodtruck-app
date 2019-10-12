const initialState = {
    user: {},
    vendor: {},
    events: [],
    vendors:[],
    isUserLoggedIn: false,
    isVendorLoggedIn: false
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case 'GET_SESSION_USER': 
            return {...state, user: action.payload};
        case 'GET_SESSION_VENDOR': 
            return {...state, vendor: action.payload};
            case 'GET_ALL_VENDORS': 
            return {...state, vendors: action.payload};
        case 'GET_TODAYS_EVENTS': 
            return {...state, events: action.payload};
        case 'USER_LOGIN': 
            return {...state, isUserLoggedIn: true};
        case 'VENDOR_LOGIN': 
            return {...state, isVendorLoggedIn: true};
        case 'LOGOUT': 
            return {...state, vendor: {}, user: {}, isUserLoggedIn: false, isVendorLoggedIn: false};

        default: return state;
    }
}