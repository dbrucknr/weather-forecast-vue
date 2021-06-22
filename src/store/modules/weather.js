export const weatherModule = {
    namespaced: true, 
    state: {
        urls: {
            currentWeatherForecastCityStateURL: (cityName, stateCode, countryCode, APIkey) => 
                `https://api.openweathermap.org/data/2.5/weather?q=${ cityName },${ stateCode },${ countryCode },&units=imperial&APPID=${ APIkey }`,

            currentWeatherForecastLatLonURL: (latitude, longitude, APIkey) => 
                `https://api.openweathermap.org/data/2.5/weather?lat=${ latitude }&lon=${ longitude }&units=imperial&APPID=${ APIkey }`,

            fiveDayWeatherForecastCityStateURL: (cityName, stateCode, countryCode, APIkey) => 
                `https://api.openweathermap.org/data/2.5/forecast?q=${ cityName },${ stateCode },${ countryCode },us&units=imperial&APPID=${ APIkey }`,

            fiveDayWeatherForecastLatLonURL: (latitude, longitude, APIkey) => 
                `https://api.openweathermap.org/data/2.5/forecast?lat=${ latitude }&lon=${ longitude }&units=imperial&APPID=${ APIkey }`,
                
            weatherForecastIconURL: (iconCode) => `http://openweathermap.org/img/wn/${ iconCode }@2x.png`
        },
        currentWeatherForecast: {},
        fiveDayWeatherForecast: [],
        cityInput: '',
        stateInput: '',
        countryInput: 'US'
    },
    mutations: {
        setCurrentWeatherForecast(state, payload) {
            state.currentWeatherForecast = payload;
        },
        setFiveDayWeatherForecast(state, payload) {
            state.fiveDayWeatherForecast = payload;
        },
        setCityInput(state, payload) {
            state.cityInput = payload;
        },
        setStateInput(state, payload) {
            state.stateInput = payload;
        },
        setCountryInput(state, payload) {
            state.countryInput = payload
        }
    },
    getters: {
        currentWeatherForecast: state => { return state.currentWeatherForecast },
        fiveDayWeatherForecast: state => { return state.fiveDayWeatherForecast },
        getCitySearchText: state => { return state.cityInput },
        getStateSearchText: state => { return state.stateInput },
        getCountrySearchText: state => {return state.countryInput }
    },
    actions: {
        async getCurrentWeatherForecast({ commit, state }, payload) {
            const API_KEY = `${process.env.VUE_APP_OPEN_WEATHER_API_KEY}`;
            let url = payload.latitude && payload.longitude 
                ? state.urls.currentWeatherForecastLatLonURL(payload.latitude, payload.longitude, API_KEY)
                : state.urls.currentWeatherForecastCityStateURL(payload.city, payload.state, payload.country, API_KEY)
            await fetch(url)
                .then(response => response.json())
                .then(result => commit('setCurrentWeatherForecast', result))
                .catch(error => console.log(error));
        },
        async getFiveDayWeatherForecast({ commit, state }, payload) {
            const API_KEY = `${process.env.VUE_APP_OPEN_WEATHER_API_KEY}`;
            let url = payload.latitude && payload.longitude
                ? state.urls.fiveDayWeatherForecastLatLonURL(payload.latitude, payload.longitude, API_KEY)
                : state.urls.fiveDayWeatherForecastCityStateURL(payload.city, payload.state, payload.country, API_KEY)
            await fetch(url)
                .then(response => response.json())
                .then(result => commit('setFiveDayWeatherForecast', result.list))
                .catch(error => console.log(error));
        }
    }

}