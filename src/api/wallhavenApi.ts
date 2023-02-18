// change the access key to your own
const API_KEY = import.meta.env.VITE_WALLHEAVEN_API_KEY;
const instance = axios.create({
  baseURL: "https://wallhaven.cc/api/v1",
  timeout: 1000,
});
interface Query {
  paqge?: string;
  categories?: number;
  sorting: string;
}

// Query photos 壁纸一览
export const searchWallpaperApi = (query?: Query) => {
  return instance.get("/search", { params: query });
};
