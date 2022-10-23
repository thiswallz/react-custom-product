export const throttle = (func, limit) => {
  let inThrottle = false;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      inThrottle = true;
      func.apply(context, args);
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};