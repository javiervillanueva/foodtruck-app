export const getSessionUser = (user) => {
    return {
        type: 'LOGIN_USER',
        payload: user
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
        
    }
}