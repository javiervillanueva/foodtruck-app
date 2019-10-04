export const getSessionUser = (user) => {
    return {
        type: 'GET_SESSION_USER',
        payload: user
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