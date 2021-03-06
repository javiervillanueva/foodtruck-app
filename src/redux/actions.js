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

export const getTodaysEvents = (events) => {
    return {
        type: 'GET_TODAYS_EVENTS',
        payload: events
    
    }
}
export const getAllVendors = (vendors) => {
    return {
        type: 'GET_ALL_VENDORS',
        payload: vendors
    }
}
export const getEventsById = (vendorEvents) => {
    return {
        type: 'GET_EVENT_BY_ID',
        payload: vendorEvents
    }
}
export const getMenuById = (vendorMenu) => {
    return {
        type: 'GET_MENU_BY_ID',
        payload: vendorMenu
    }
}
export const getUserFaves = (userFaves) => {
    return {
        type: 'GET_USER_FAVES',
        payload: userFaves
    }
}
