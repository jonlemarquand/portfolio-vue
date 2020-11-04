<template>
    <footer>
        <social-icon name="github" weblink="https://www.github.com/jonlemarquand"></social-icon>
        <social-icon name="twitter" weblink="https://www.twitter.com/jonlemarquand"></social-icon>
        <social-icon name="linkedin" weblink="https://www.linkedin.com/in/jonlemarquand"></social-icon>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
footer {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0;

    @media (max-width: $phoneWidth) {
        margin: 0;
    }

    @media (max-width: $phoneWidth) and (min-height: 600px){
        margin-top: 20px;
    }
    @media (max-width: $phoneWidth) and (min-height: 800px){
        margin-top: 40px;
    }

}
</style>