import Vue from 'vue'
import Vuex from 'vuex'
import { weatherModule } from './modules/weather.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    weatherForecast: weatherModule
  },
  state: {
    usingAutoLocation: true,
    browserLocationData: {},
    geoEncodedLookupData: {},
    urls: {
      geolocationLookup: (latitude, longitude) => 
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${ latitude }&longitude=${ longitude }&localityLanguage=en`
    }
  },
  mutations: {
    setBrowserCoordinates(state, payload) {
      state.browserLocationData = payload
    },
    setGeoEncodedLocationData(state, payload) {
      state.geoEncodedLookupData = payload
    },
    setUsingAutoLocation(state, payload) {
      state.usingAutoLocation = payload
    }
  },
  actions: {
    async requestUserLocation({ commit, dispatch }) {
      if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
          (data) => {
            dispatch('extractCoordinates', data);
            dispatch('processGeoEncodedData');
          }, 
          console.log
        );
       } 
       else {
        commit('setUsingAutoLocation', false)
       } 
    },
    extractCoordinates({ commit, getters }, payload) {
      const { latitude, longitude } = payload.coords;
      commit('setBrowserCoordinates', { latitude, longitude });
      console.log(getters)
      getters.locationData 
        ? (this.dispatch('weatherForecast/getCurrentWeatherForecast', getters.locationData) 
          &&
          this.dispatch('weatherForecast/getFiveDayWeatherForecast', getters.locationData)
        )
        : null
    },
    async processGeoEncodedData({ commit, state, getters }) {
      await fetch(state.urls.geolocationLookup(getters.locationData.latitude, getters.locationData.longitude))
        .then(response => response.json())
        .then(result => {
          const { city, principalSubdivision } = result 
          commit('setGeoEncodedLocationData', { city, principalSubdivision })
        })
        .catch(error => console.log(error))
    }
  },
  getters: {
    useAutoGeneratedLocation: state => { return state.usingAutoLocation },
    locationData: state => { return state.browserLocationData },
    cityStateLocation: state => { return state.geoEncodedLookupData }
  },
})
