import { createApp } from 'vue';
import Header from './components/HeaderComponent.vue';
// import Footer from './components/FooterComponent.vue';
// import Menu from './components/MenuComponent.vue';

const app = createApp({});

app.component('header-component', Header);
// app.component('FooterComponent', Footer);
// app.component('MenuComponent', Menu);

app.mount('#app');
