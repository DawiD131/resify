import { minLength, required } from '@vuelidate/validators';
import type { ComputedRef } from 'vue';

export const usePasswordChangeValidators = (newPassword: ComputedRef<string>) => {
  return {
    password: {
      required,
      minLength: minLength(5)
    },
    newPassword: {
      required,
      minLength: minLength(5)
    },
    passwordConfirm: {
      required,
      minLength: minLength(5),
      isSameAsNewPassword: (value: string) => value === newPassword.value
    }
  };
};
