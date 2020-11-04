<template>
            <div>
                <h1 class="intro-text">Hi I’m <span class="lblue">Jon Le Marquand</span>, a full-stack web developer.</h1>
                <h2 class="intro-text">Here’s a few things I’ve worked on:</h2>
            </div>
            <Portfolio />
</template>

<script>

import Portfolio from '../Portfolio/Portfolio'

export default {
    components: {
        Portfolio
    }
}
</script>

<style lang="scss" scoped>
.intro-text {
    text-align: center;
}

.lblue {
    color: $lblue;
}
</style>