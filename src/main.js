import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// npm i vue-server-render
// const renderer = require("vue-server-renderer").createRenderer();
// renderer.renderToString(app, (err, html) => {
//   if (err) throw err;
//   console.log(html);
// });

// renderer
//   .renderToString(app)
//   .then(html => {
//     console.log(html);
//   })
//   .catch(err => {
//     console.error(err);
//   });

createApp(App)
  .use(router)
  .mount("#app");
