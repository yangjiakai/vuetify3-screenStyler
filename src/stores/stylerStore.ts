import { defineStore } from "pinia";

export const useStylerStore = defineStore({
  id: "styler",
  state: () => ({
    currentPanel: ref("wall"),
    dock: reactive({
      isShow: true,
      size: 100,
      backgroudColor: {
        r: 0,
        g: 0,
        b: 0,
        a: 1,
      },
      position: 1,
    }),
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
