import { createRouter, createWebHashHistory } from "vue-router";
import { getToken } from "utils";
{{{ importInfo }}}

import routes from '@/pages/export.js'


const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes
})

const whiteList = ["/login", "/trajectory", "/"];
router.beforeEach((to, form, next) => {
  if (whiteList.includes(to.path)) {
    next();
  } else if (getToken()) {
    next();
  } else {
    {{{ fn }}}
    next("/login");
  }
});

export default router;

// ElNotification({
//   title: "Success",
//   message: "This is a success message",
//   type: "success",
// });
