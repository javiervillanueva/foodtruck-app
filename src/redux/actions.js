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

export const LoginUser = () => {
    return {
        type: 'USER_LOGIN'
    
    }
}

export const LoginVendor = () => {
    return {
        type: 'VENDOR_LOGIN'
    
    }
}
export const logout = () => {
    return {
        type: 'LOGOUT'
    
    }
}