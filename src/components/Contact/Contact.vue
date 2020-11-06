<template>
    <h1>Contact</h1>
    <h2 class="intro-text">Want to get in touch? Use the form below or send me <a href="mailto:jon.lemarquand@gmail.com">an email.</a></h2>
    <div class="hidden">Thanks for getting in touch! I'll have a read of your email and be in touch soon.</div>
    <form class="contact-form" @submit.prevent="submitForm">
        <div class="form-group">
            <input type="text" name="name" v-model="name" />
            <label htmlFor="name">Name:</label>
        </div>
        <div class="form-group">
            <input type="email" name="email" v-model="email" />
            <label htmlFor="email">Email:</label>
        </div>
        <div class="form-group">
        <textarea name="comment" v-model="message" />
        <label htmlFor="comment">Message:</label>
        </div>
        <button class="submit-button" type="submit">Send</button>
        <p class="footnote-text">Please note: your name/email will only be used to reply to the message sent.</p>
    </form>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            message: ''
        }
    }
}
</script>

<style lang="scss" scoped>

.contact-form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 600px;
    height: 100%;
    color: $dblue;
    font-family: $secondaryFont;
    margin: 40px;

    .form-group {
        display: flex;
        flex-direction: column-reverse;
    }
    label {
        margin-top: 20px;
        margin-bottom: 10px;
        font-weight: 700;
        font-size: 16px;
    }

    input, textarea {
        color: $dblue;
        font-family: $secondaryFont;
        outline: none;
        border: 1px solid $dblue;

        &:focus {
            outline: none;
            border: 1px solid $lblue;
        
            +label {
                color: $lblue;
            }
        }
    
    }

    input {
        height: 25px;
    }

    textarea {
        height: 150px;
        resize: none;
        margin-bottom: 30px;
    }

    .submit-button {
        height: 40px;
        width: 120px;
        border: 2px solid $lblue;
        background-color: $lblue;
        color: $white;
        font-weight: 700;
        font-size: 16px;

        &:hover {
            background-color: $dblue;
            color: $white;
            border: 2px solid $dblue;
        }
    }

    @media (max-width: $phoneWidth) {
        width: 80%;
        margin: 0 20px;

        textarea {
            height: 100px;
        }
    }

}

.footnote-text {
    font-size: 14px;
}

.hidden {
    display: none;
}

.thanks {
    background: $lblue;
    color: $white;
    width: 600px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    font-family: $primaryFont;
    max-width: 100%;
    padding: 20px;
    text-align: center;
}
</style>