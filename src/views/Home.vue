<template>
  <div class="mt-5">
    <current-temperature />
    <br>
    <five-day-temperatures />
    <b-row>
      <b-col>
        <search-form />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CurrentTemperature from '../components/weather/CurrentTemperature.vue'
import FiveDayTemperatures from '../components/weather/FiveDayTemperatures.vue'
import SearchForm from '../components/weather/SearchForm.vue'
export default {
  name: 'Home',
  components: {
    CurrentTemperature,
    FiveDayTemperatures,
    SearchForm
  }
}
</script>
