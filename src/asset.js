// Files in public/ are served under the deploy base path ("/" locally,
// "/<repo>/" on GitHub Pages).
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
