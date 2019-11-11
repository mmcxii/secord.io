import { useEffect } from 'react';

/*
    @desc: Hook used for jumping to the top of the page when a passed in value changes
*/

export const useJumpToTop = (target: any) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [target]);
};
