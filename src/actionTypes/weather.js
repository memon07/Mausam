export const SAVE_WEATHER_HISTORY = 'SAVE_WEATHER_HISTORY'

export const saveWeather = (payload) => {
    return {
        type : SAVE_WEATHER_HISTORY,
        payload
    }
}
