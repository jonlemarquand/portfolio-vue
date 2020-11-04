import { createApp } from 'vue'
import App from './App.vue'
import SocialIcon from './components/Shared/SocialIcon'

const app = createApp(App);
app.component('social-icon', SocialIcon);
app.mount('#app')
