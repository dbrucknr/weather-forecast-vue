<template>
  <div class="mt-5">
    <b-container fluid>
      <current-temperature />
      <five-day-temperatures />
    </b-container>
  </div>
</template>

<script>
import CurrentTemperature from '../components/weather/CurrentTemperature.vue'
import FiveDayTemperatures from '../components/weather/FiveDayTemperatures.vue'

export default {
  name: 'Home',
  components: {
    CurrentTemperature,
    FiveDayTemperatures
  }
}
</script>
