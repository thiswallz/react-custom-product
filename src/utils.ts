export const throttle = (func: ()=>void, limit: number) => {
  let inThrottle = false;
  return function (this: any) {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      inThrottle = true;
      func.apply(context, args);
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};