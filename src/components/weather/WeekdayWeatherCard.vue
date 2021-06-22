<template>
    <div>
        <div v-for="hourlyForecast in weekdayWeather.weatherData" :key="hourlyForecast.dt">
            <b-card :title="hourlyForecast.dt_txt | convertToHours" class="overflow-hidden">
                <b-row no-gutters>
                <b-col md="2">
                    <b-card-img :src='urls.weatherForecastIconURL(hourlyForecast.weather[0].icon)'  alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="10">
                    <b-card-body :title="hourlyForecast.weather[0].main" :sub-title="hourlyForecast.weather[0].description">
                        <b-card-text>
                            <p>Forecasted Temperature: {{ hourlyForecast.main.temp }}</p>
                            <p>Expected to Feel Like: {{ hourlyForecast.main.feels_like }}</p>
                            <p>Forecasted Lowest Temperature: {{ hourlyForecast.main.temp_min }}</p>
                            <p>Forecasted Highest Temperature: {{ hourlyForecast.main.temp_max }}</p>
                            <p>Expected Humidity: {{ hourlyForecast.main.humidity }}%</p>
                            <p>Pressure: {{ hourlyForecast.main.pressure }}</p>
                        </b-card-text>
                    </b-card-body>
                </b-col>
                </b-row>
            </b-card>
        </div>
    </div>
</template>

<script>
import moment from 'moment'; 
import { mapState } from "vuex";

export default {
    name: 'WeekdayWeatherCard',
    props: ['weekdayWeather'],
    filters: {
        convertToHours (date) {
            return moment(date).format('h:mm a');
        }
    },
    computed: {
        ...mapState('weatherForecast', ['urls'])
    }
}
</script>