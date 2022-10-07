import { createApp } from 'vue';
import App from './App.vue';
import saui from 'sa-ui';

const app = createApp(App);

app.use(saui).mount('#app');
