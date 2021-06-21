export const weatherModule = {
    namespaced: true, 
    state: {
        urls: {
            currentWeatherForecastCityURL: (cityName, APIkey) => 
                `https://api.openweathermap.org/data/2.5/weather?q=${ cityName }&units=imperial&APPID=${ APIkey }`,
            currentWeatherForecastLatLonURL: (latitude, longitude, APIkey) => 
                `https://api.openweathermap.org/data/2.5/weather?lat=${ latitude }&lon=${ longitude }&units=imperial&APPID=${ APIkey }`,
            fiveDayWeatherForecastCityURL: (cityName, APIkey) => 
                `https://api.openweathermap.org/data/2.5/forecast?q=${ cityName }&units=imperial&APPID=${ APIkey }`,
            weatherForecastIconURL: (iconCode) => `http://openweathermap.org/img/wn/${ iconCode }@2x.png`
        },
        currentWeatherForecast: {},
        fiveDayWeatherForecast: []
    },
    mutations: {
        setCurrentWeatherForecast(state, payload) {
            state.currentWeatherForecast = payload;
        },
        setFiveDayWeatherForecast(state, payload) {
            state.fiveDayWeatherForecast = payload;
        },
    },
    getters: {
        currentWeatherForecast: state => { return state.currentWeatherForecast },
        fiveDayWeatherForecast: state => { return state.fiveDayWeatherForecast }
    },
    actions: {
        async getCurrentWeatherForecast({ commit, state }, payload) {
            const API_KEY = `${process.env.VUE_APP_OPEN_WEATHER_API_KEY}`;
            let url = payload.latitude && payload.longitude 
                ? state.urls.currentWeatherForecastLatLonURL(payload.latitude, payload.longitude, API_KEY)
                : state.urls.currentWeatherForecastCityURL(payload.cityName, API_KEY)
            await fetch(url)
                .then(response => response.json())
                .then(result => commit('setCurrentWeatherForecast', result))
                .catch(error => console.log(error));
        },
        async getFiveDayWeatherForecast({ commit, state }, payload) {
            const API_KEY = `${process.env.VUE_APP_OPEN_WEATHER_API_KEY}`;
            await fetch(
                state.urls.fiveDayWeatherForecastCityURL(payload.cityName, API_KEY)
            )
            .then(response => response.json())
            .then(result => commit('setFiveDayWeatherForecast', result))
            .catch(error => console.log(error));
        }
    }

}