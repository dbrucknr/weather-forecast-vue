<template>
    <div>
        <b-card-group deck>
        <div v-for="hourlyForecast in weekdayWeather" :key="hourlyForecast.dt">
            <b-card
                :title="hourlyForecast.dt_txt | convertToHours" 
                :sub-title="hourlyForecast.weather[0].main"
                class="overflow-hidden" 
                style="max-width: 20rem;"
                :img-src="urls.weatherForecastIconURL(hourlyForecast.weather[0].icon)"
                >
                <h5>{{ hourlyForecast.weather[0].description }}</h5>
                <b-card-text>
                    <p>Forecasted Temperature: {{ hourlyForecast.main.temp }}</p>
                    <p>Expected to Feel Like: {{ hourlyForecast.main.feels_like }}</p>
                    <p>Forecasted Lowest Temperature: {{ hourlyForecast.main.temp_min }}</p>
                    <p>Forecasted Highest Temperature: {{ hourlyForecast.main.temp_max }}</p>
                    <p>Expected Humidity: {{ hourlyForecast.main.humidity }}%</p>
                    <p>Pressure: {{ hourlyForecast.main.pressure }}</p>
                </b-card-text>
            </b-card>
        </div>
        </b-card-group>
    </div>
</template>

<script>
import moment from 'moment'; 
import { mapState } from "vuex";

export default {
    name: 'WeekdayWeatherCard',
    props: ['weekdayWeather', 'date'],
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