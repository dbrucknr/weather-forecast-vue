<template>
    <b-navbar toggleable="sm" type="light" variant="light">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand>Weather Forecast</b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item>
                <router-link to="/">Home</router-link>
              </b-nav-item> 
              <b-nav-item>
                  <router-link to="/about">About</router-link>
              </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    name: 'Navigation'
}
</script>