<template>
    <div class="logo">JLM</div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.logo {
    font-size: 24px;
    border-bottom: 3px solid $lblue;
    line-height: 1;
    margin: 0 20px;
    color: $dblue;
    font-weight: 700;
    font-family: $primaryFont;

    @media (max-width: $phoneWidth) {
        margin: 0 10px;
    }
}
</style>