<template>
    <div>
        <b-card bg-variant="light">
            <b-spinner v-if="loading" variant="primary" type="grow" label="Spinning"></b-spinner>
            <b-form>
                <b-form-group
                    id="city-search"
                    label="City:"
                    label-for="city-input"
                    description="Enter a city name to request weather."
                >
                    <b-form-input
                        id="city-input"
                        type="text"
                        v-model="citySearchText"
                        label="Enter City"
                        required
                    />
                </b-form-group>
                <b-form-group
                    id="state-search"
                    label="State:"
                    label-for="state-input"
                    description="Enter the state where the city exists."
                >
                    <b-form-input
                        id="state-input"
                        type="text"
                        v-model="stateSearchText"
                        label="Enter State"
                        required
                    />
                </b-form-group>

                <b-button type="submit" variant="primary" @click.prevent="handleSubmit">Search</b-button>
                <b-button type="reset" variant="danger" @click.prevent="handleReset">Reset</b-button>
            </b-form>
        </b-card>
    </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
    name: 'SearchForm',
    data() {
        return {
            loading: false
        }
    },
    computed : {
        ...mapGetters('weatherForecast', ['getCitySearchText', 'getStateSearchText']),
        citySearchText: {
            get() { return this.getCitySearchText },
            set(value) { this.setCityInput(value) }
        },
        stateSearchText: {
            get() { return this.getStateSearchText },
            set(value) { this.setStateInput(value) }
        }
    },
    methods: {
        ...mapMutations(['setGeoEncodedLocationData', 'setUsingAutoLocation']),
        ...mapMutations('weatherForecast', ['setCityInput', 'setStateInput']),
        ...mapActions('weatherForecast', ['getCurrentWeatherForecast', 'getFiveDayWeatherForecast']),
        async handleSubmit() {
            this.loading = true;
            this.setGeoEncodedLocationData({'city': this.citySearchText, 'principalSubdivision': this.stateSearchText});
            this.setUsingAutoLocation(false);
            await this.getCurrentWeatherForecast({'city': this.citySearchText, 'state': this.stateSearchText});
            await this.getFiveDayWeatherForecast({'city': this.citySearchText, 'state': this.stateSearchText});
            this.loading = false;
        },
        handleReset() {
            this.setCityInput('') && this.setStateInput('');
        }
    }
}
</script>