<template>
    <div className="about-item">
            <img className="about-icon" :src="require(`../../assets/icons/${iconSrc}.png`)" :alt="iconName" />
            <p>{iconName}</p>
        </div>
</template>

<script>
export default {
    props: {
        iconName: String,
        iconSrc: String
    },
}
</script>

<style lang="scss" scoped>
.about-icon {
    width: 40px;
    height: 40px;
    border-radius: 5px;
    transition: 0.2s ease-out;
    &:hover {
        width: 60px;
        height: 60px;
    }
}

.about-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40px;
    margin-left: 20px;
    margin-bottom: 20px;

    p {
        margin-top: 5px;
        display: none;
    }
}
</style>