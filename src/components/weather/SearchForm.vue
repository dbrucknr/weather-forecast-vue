<template>
    <div>
        <b-card bg-variant="light">
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
                            label="Enter State"
                            required
                        />
                    </b-form-group>

                <b-button type="submit" variant="primary">Search</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'SearchForm',
    methods: {
        onSubmit(event) {
            console.log(event)
        },
        onReser(event) {
            console.log(event)
        }
    }
}
</script>