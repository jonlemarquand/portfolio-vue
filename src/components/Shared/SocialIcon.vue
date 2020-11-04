<template>
    <a :href="weblink" target="_blank" rel='noopener noreferrer'>
        <div class="social" :class="name">
        </div>
    </a>
</template>

<script>
export default {
    props: {
        name: String,
        weblink: String
    }
}
</script>

<style lang="scss" scoped>

.social {
    border-radius: 50%;
    border: 2px solid $grey;
    background-color: $grey;
    margin: 10px 0;
    transition: all 0.4s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease;
    height: 35px;
    width: 35px;
    // background-position: bottom;
    // background-repeat: no-repeat;
    background-size: 100%;

 
    &.github {
        background-image: url(../../assets/github-white.png);
    }
    &.twitter {
        background-image: url(../../assets/twitter-white.png);
        margin-left: 20px;
    }
    &.linkedin {
        background-image: url(../../assets/linkedin-white.png);
        margin-left: 20px;
    }
    &.weblink {
        background-image: url(../../assets/web-white.png);
        margin-left: 10px;
    }
    &:hover {
        border: 2px solid $lblue;
        cursor: pointer;
        background-color: $lblue;
    } 
}
</style>