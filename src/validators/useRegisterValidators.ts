import { email, minLength, required } from '@vuelidate/validators';

export const useRegisterValidators = () => {
  return {
    firstName: {
      required,
      minLength: minLength(3)
    },
    lastName: {
      required,
      minLength: minLength(3)
    },
    email: {
      required,
      email
    },
    pwd: {
      required,
      minLength: minLength(5)
    },
    isBusiness: {
      required
    }
  };
};
