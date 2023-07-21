import { required, email, minLength } from '@vuelidate/validators';

export const useLoginValidators = () => {
  return {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(5)
    }
  };
};
