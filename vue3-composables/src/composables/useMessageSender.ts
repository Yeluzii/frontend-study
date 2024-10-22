import { ref, watch } from "vue";

export function useMessageSender() {
  const phoneNumber = ref<string>("");
  const sending = ref(false);
  const sended = ref(false);
  const error = ref<string | null>(null);
  const sendMessage = async (phoneNumber: string) => {
    if (!phoneNumber) {
      error.value = "请输入手机号";
      return;
    }
    sending.value = true;
    await new Promise((resolve) => setTimeout(resolve, 2000));
    sending.value = false;
    sended.value = true;
  };
  watch(phoneNumber, () => {
    error.value = null;
  });
  return {
    phoneNumber,
    sending,
    sended,
    error,
    sendMessage,
  };
}
