import { ref } from "vue";

export function useFormValidation() {
  const phone = ref<number>();
  const email = ref<string>();
  const password = ref<string>();
  const errors = ref<string[]>([]);
  const error = ref<boolean>(false);

  const validateForm = () => {
    errors.value = [];
    error.value = false;

    if (!phone.value) {
      errors.value.push("手机号不能为空！！！");
      error.value = true;
    }

    if (phone.value) {
      if (phone.value.toString().length !== 11) {
        errors.value.push("请输入11位的手机号");
        error.value = true;
      }
    }

    if (!email.value || !validateEmail(email.value)) {
      errors.value.push("请输入正确的邮箱");
      error.value = true;
    }

    if (!password.value || password.value.length < 8) {
      errors.value.push("密码至少8位");
      error.value = true;
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return {
    phone,
    email,
    password,
    errors,
    error,
    validateForm,
  };
}
