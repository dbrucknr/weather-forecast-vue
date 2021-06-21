<template>
    <b-navbar toggleable="lg" type="light" variant="light" class="footer">
        <b-navbar-brand href="#">Footer</b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="#">Contact Us</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    name: 'theFooter'
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