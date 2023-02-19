import { defineStore } from "pinia";

export const useStylerStore = defineStore({
  id: "styler",
  state: () => ({
    currentPanel: ref("wall"),
    currentBackground: ref(""),
    dock: reactive({
      isShow: true,
      size: 100,
      distance: 100,
      backgroudColor: {
        r: 0,
        g: 0,
        b: 0,
        a: 1,
      },
      position: "bottom",
    }),
    dockItems: ref<string[]>([]),
  }),

  persist: {
    enabled: true,
    strategies: [{ storage: localStorage, paths: [] }],
  },

  getters: {},
  actions: {
    // clearRecentSearchList() {
    //   this.recentSearchList = [];
    // },
  },
});
