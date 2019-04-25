export default [
  {
    path: "/",
    name: "主页",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/debounce",
    name: "函数防抖",
    component: () => import("@/views/Debounce.vue")
  },
  {
    path: "/text-hide",
    name: "文本隐藏",
    component: () => import("@/views/TextHide.vue")
  }
];