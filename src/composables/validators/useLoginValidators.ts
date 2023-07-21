import { required, email, minLength } from '@vuelidate/validators';

export const useLoginValidators = () => {
  const rules = {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(5)
    }
  };

  return {
    rules
  };
};
