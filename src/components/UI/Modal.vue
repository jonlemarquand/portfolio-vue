<template>
    <div @click="toggleModal()" v-if="shouldOpen" class="backdrop"></div>
    <div v-if="shouldOpen" class="modal">
        <div @click="toggleModal()" class="exitCross">&times;</div>
        <div class="modal-img-container">
            <!--<img src= alt="TI25" class="modal-img" />-->
        </div>
        <div class="modal-text">
            <div class="modalTop">
                <div>
                    <div class="modalExplainer">{{ modalData.stack }}</div>
                    <div class="modalTitle">{{ modalData.title }}</div>
                </div>
                <div class="link-icons">
                    <social-icon v-if="modalData.github" name="github" :weblink="modalData.github"></social-icon>
                    <social-icon v-if="modalData.live" name="weblink" :weblink="modalData.live"></social-icon>
                </div>
            </div>
            <div class="modalInfo">
              <p v-for="(text, index) in modalData.infoText" :key="index">{{ text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        shouldOpen: Boolean,
        modalData: Object
    },
    methods: {
        toggleModal() {
            this.$emit('toggle-modal')
        }
    },
    emits: ["toggle-modal"],
}
</script>

<style lang="scss" scoped>

.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 50;
  }

.modal {
    z-index: 100;
    position: fixed;
    top: 15%;
    left: 20%;
    width: 60%;
    height: 70%;
    background: $white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    display: flex;
  
  @media (max-width: $phoneWidth) {
    flex-direction: column;
    width: 90%;
    height: 94%;
    top: 3%;
    left: 5%;
  }

}

.modal-img-container {
    width: 50%;

    @media (max-width: $phoneWidth) {
      width: 100%;
    }
}

.modal-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.modal-text {
    width: 50%;
    padding: 20px;
    border-left: $lblue 4px solid;
    position: relative;

    @media (max-width: $phoneWidth) {
      width: calc(100% - 10px);
      padding: 5px;
      border-top: $lblue 4px solid;
      border-left: 0px;
      overflow: scroll;
    }

    .modalTop {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }

    .modalExplainer{
        font-family: $primaryFont;
        font-weight: 500;
        color: $lblue;
    }

    .modalTitle{
        font-family: $primaryFont;
        font-weight: 700;
        color: $dblue;
        font-size: 24px;
    }

    .modalInfo {
        font-family: $secondaryFont;
        font-size: 14px;
        color: $dblue;

    }

    .link-icons {
      display: flex;
      justify-content: flex-start;
    }
    
    @media screen and (max-width: 1450px) {
        .modal-img-container {
            width: 50%;
        }
        .modal-text {
            width: 50%;
        }
    }
}
  .modal-enter {
    transform: translateY(-10rem);
    opacity: 0;
  }
  
  .modal-enter-active {
    transform: translateY(0);
    opacity: 1;
    transition: all 200ms;
  }
  
  .modal-exit {
    transform: translateY(0);
    opacity: 1;
  }
  
  .modal-exit-active {
    transform: translateY(-10rem);
    opacity: 0;
    transition: all 200ms;
  }
  
  .exitCross {
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $lblue;
    font-size: 32px;
    font-family: $primaryFont;
    font-weight: 700;
    cursor: pointer;
    border: 2px solid $lblue;
    border-radius: 50%;
    top: 20px;
    right: 20px;
    position: absolute;
    z-index: 50;

    &:hover {
      background: $lblue;
      color: $white;
    }
  }
</style>