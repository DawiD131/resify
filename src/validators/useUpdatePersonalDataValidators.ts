import { email, minLength, required } from '@vuelidate/validators';

export const useUpdatePersonalDataValidators = () => {
  return {
    name: {
      required,
      minLength: minLength(3)
    },
    surname: {
      required,
      minLength: minLength(3)
    },
    email: {
      required,
      email
    },
    passwordConfirmation: {
      required,
      minLength: minLength(5)
    }
  };
};
