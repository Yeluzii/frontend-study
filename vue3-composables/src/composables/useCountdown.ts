import { ref } from "vue";

export function useCountdown(initValue = 60) {
  const seconds = ref<number>(initValue);
  let timerId: ReturnType<typeof setInterval> | null = null;

  const startCountdown = () => {
    if (seconds.value <= 0) return;
    // 清除之前可能存在的计时器
    stopCountdown();
    timerId = setInterval(() => {
      seconds.value--;
      // 当秒数为0时，自动停止
      if (seconds.value <= 0) {
        stopCountdown();
      }
    }, 1000);
  };

  const stopCountdown = () => {
    if (timerId !== null) {
      clearInterval(timerId);
      timerId = null;
    }
  };

  const resetCountdown = () => {
    stopCountdown(); // 停止现有计时器
    seconds.value = initValue;
  };

  return { seconds, startCountdown, stopCountdown, resetCountdown };
}
