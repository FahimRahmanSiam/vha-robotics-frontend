export const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5050";


export const getImageUrl = (path) => {
  if (!path) return "";

  if (
    path.startsWith("http://") ||
    path.startsWith("https://")
  ) {
    return path;
  }

  return `${API_URL}${path}`;
};