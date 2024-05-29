import { createApp } from 'vue'
import AppForm from "./components/AppForm.vue"

const app = createApp({

})

app.component('AppForm', AppForm)

app.mount('#content')
