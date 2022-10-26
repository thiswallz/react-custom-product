let throttlePause: boolean;

export const throttleLast = (callback: () => void, time: number) => {
  if (throttlePause) return;

  throttlePause = true;
  setTimeout(() => {
    callback();
    throttlePause = false;
  }, time);
};