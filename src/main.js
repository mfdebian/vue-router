import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAPcHh8N7hS7CIgY6bx7wEhZcy254R9ysk",
  authDomain: "vue-router-example.firebaseapp.com",
  projectId: "vue-router-example",
  storageBucket: "vue-router-example.appspot.com",
  messagingSenderId: "355224998844",
  appId: "1:355224998844:web:fd0370df4ef8352870d1b9"
};

const app = initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
