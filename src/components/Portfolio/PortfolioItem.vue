<template>
    <div 
        @click="toggleModal()" 
        @keyup.enter="toggleModal()" 
        className="item" 
        role="button" 
        tabindex="0"
        v-if="shouldShow"
    >
        <img className="item-img" :src="require(`../../assets/gridImages/${srcImage}`)" :alt="title" />
        <div className="overlay">
            <div className="project-text pt-large">
                <div className="explainer">{{ stack }}</div>
                <div className="project-title">{{ title }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        stack: String,
        title: String,
        srcImage: String,
        itemId: Number,
        shouldShow: Boolean
    },
    emits: ['toggle-modal', 'click'],
    methods: {
        toggleModal() {
            const newId = this.itemId
            this.$emit('toggle-modal', newId)
        }
    }
}
</script>

<style lang="scss" scoped>  
.item {

    position: relative;
    &:focus {
        outline-color: $lblue;
        z-index: 49;
    }
    .overlay{
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        border: none;
        width: 100%;
        height: 100%;
        transition: .35s ease;
        background-color: $dblue;
        opacity: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    @media (max-width: $phoneWidth) {
        display:none;
    }

    }

    &:hover .overlay, &:focus .overlay {
        opacity: 1;
    }

    .project-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: 0.5s ease-out;
        cursor: pointer;
        &.pt-small {
            transform: translateY(-80%);
        }
        &.pt-large {
            transform: translateY(-50%);
        }
    }


    &:hover .project-text, &:focus .project-text {
        transform: translateY(0%);
    }

    .explainer {
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        color: $lblue;
    }

    .project-title {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 20px;
        color: $white;
        text-align: center;
        padding: 0 5px;
    }

    .item-img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    .button {
        transform: translateY(150%);
        transition: 0.5s ease;
        font-weight: 500;
        font-size: 16px;
        padding: 5px;
        margin-top: 30px;
    }

    &:hover .button {
        transform: translateY(0%);
    }
}

</style>