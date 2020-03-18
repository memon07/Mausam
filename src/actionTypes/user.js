export const USER_FETCH_DATA = 'USER_FETCH_DATA'
export const POST_REGISTER = 'POST_REGISTER'
export const IS_AUTH_FALSE = 'IS_AUTH_FALSE'

export const fetchUserData = (payload) => {
    return {
        type : USER_FETCH_DATA,
        payload
    }
}

export const postRegister = (payload) => {
    return {
        type : POST_REGISTER,
        payload
    }
}

export const authFalse = (payload) => {
    return {
        type : IS_AUTH_FALSE,
        payload
    }
}