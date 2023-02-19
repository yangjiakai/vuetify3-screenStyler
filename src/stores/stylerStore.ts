import { defineStore } from "pinia";

export const useStylerStore = defineStore({
  id: "styler",
  state: () => ({
    currentPanel: ref("wall"),
    currentBackground: ref(
      `url("https://w.wallhaven.cc/full/yx/wallhaven-yxxvox.png"`
    ),
    dock: reactive({
      isShow: true,
      size: 100,
      distance: 100,
      backgroudColor: {
        r: 0,
        g: 0,
        b: 0,
        a: 0.5,
      },
      position: "bottom",
    }),
    dockItems: ref<string[]>([]),
  }),

  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
        paths: ["currentPanel", "dock", "dockItems", "currentBackground"],
      },
    ],
  },

  getters: {},
  actions: {
    // clearRecentSearchList() {
    //   this.recentSearchList = [];
    // },
  },
});
