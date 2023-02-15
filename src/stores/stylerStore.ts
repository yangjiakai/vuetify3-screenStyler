import { defineStore } from "pinia";

export const useStylerStore = defineStore({
  id: "styler",
  state: () => ({
    currentPanel: ref("wall"),
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
