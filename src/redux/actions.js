export const getSessionUser = (user) => {
    return {
        type: 'GET_SESSION_USER',
        payload: user
    }
}

export const getSessionVendor = (vendor) => {
    return {
        type: 'GET_SESSION_VENDOR',
        payload: vendor
    }
}

export const login = () => {
    return {
        type: 'LOGIN'
    
    }
}
export const logout = () => {
    return {
        type: 'LOGOUT'
    
    }
}