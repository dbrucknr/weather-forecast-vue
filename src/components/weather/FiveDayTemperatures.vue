<template>
  <div>
    <b-card title="Five Day Weather Forecast" sub-title="Howell, MI">
      <b-card-text>
        {{ fiveDayWeatherForecast }}
      </b-card-text>

      <b-card-text>A second paragraph of text in the card.</b-card-text>

      <a href="#" class="card-link">Card link</a>
      <b-link href="#" class="card-link">Another link</b-link>
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'FiveDayTemperatures',
    mounted() {
      // this.getFiveDayWeatherForecast({cityName: 'Detroit'});
    },
    methods: {
      ...mapActions('weatherForecast', ['getFiveDayWeatherForecast'])
    },
    computed: {
      ...mapGetters('weatherForecast', ['fiveDayWeatherForecast'])
    }
}
</script>