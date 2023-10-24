import { useBreakpoints } from '@vueuse/core';

export const useCssBreakpoints = () => {
  return useBreakpoints({
    mobile: 767,
    tablet: 1023,
    laptop: 1279,
    desktop: 1439,
    widescreen: 1440
  });
};
