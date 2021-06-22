<template>
<div>
    <b-navbar toggleable="lg" type="light" variant="light" class="footer">
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item>
                    <b-button v-b-toggle.sidebar-1>Search a Location</b-button>
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
  <div>
    <b-sidebar id="sidebar-1" title="Search" shadow>
      <div class="px-3 py-2">
        <p>
          Enter a city and a state to see weather forecast information.
        </p>
        <search-form />
      </div>
    </b-sidebar>
  </div>
</div>
</template>

<script>
import SearchForm from '../weather/SearchForm.vue'
export default {
    name: 'theFooter',
    components: {
        SearchForm
    }
}
</script>

<style scoped>
    .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: red;
        color: white;
        text-align: center;
    }
</style>