export const useMediaQuery = () => {
  return (query: string) => {
    return window.matchMedia(query).matches;
  };
};
