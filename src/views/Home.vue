<template>
  <div class="mt-5">
    <b-container>
      <b-row>
        <b-col>
          <current-temperature />
        </b-col>
        <b-col>
          <search-form />
        </b-col>
      </b-row>
    </b-container>
    <br>
    <b-container fluid>
      <five-day-temperatures />
    </b-container>
    <!-- <b-row>
      <b-col>
        <search-form />
      </b-col>
    </b-row> -->
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
