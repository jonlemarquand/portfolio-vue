<template>
    <header>
        <nav>
            <router-link to="/">Work</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/"><Logo /></router-link>
            <router-link to="/blog">Blog</router-link>
            <router-link to="/contact">Contact</router-link>
        </nav>
    </header>
</template>

<script>

import Logo from '../Shared/Logo';

export default {
    components: {
        Logo
    }
}
</script>

<style lang="scss" scoped>
header {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    background: $white;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;

    a {
        color: $grey;
        margin: 0 20px;
        font-size: 14px;
        text-decoration: none;

        @media (max-width: $phoneWidth) {
            margin: 0 12px;
            font-size: 12px;
        }

        @media (max-width: $iphonefiveWidth) {
            margin: 0 8px;
        }

        &:hover {
            color: $dblue;
        }
        &.active {
            color: $lblue;
        }
    }

}
</style>