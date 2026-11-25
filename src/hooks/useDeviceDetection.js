import { useSyncExternalStore } from 'react';

const MOBILE_QUERY = '(max-width: 767.98px)';

const subscribe = (callback) => {
  const mediaQuery = window.matchMedia(MOBILE_QUERY);
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
};

const getSnapshot = () => window.matchMedia(MOBILE_QUERY).matches;

const useDeviceDetection = () =>
  useSyncExternalStore(subscribe, getSnapshot) ? 'Mobile' : 'Desktop';

export default useDeviceDetection;
