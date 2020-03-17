export const USER_FETCH_DATA = 'USER_FETCH_DATA'

export const fetchUserData = (payload) => {
    return {
        type : USER_FETCH_DATA,
        payload
    }
}