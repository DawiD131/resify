import { minLength, required, between } from '@vuelidate/validators';

export const useReviewValidator = () => {
  return {
    description: {
      required,
      minLength: minLength(10)
    },
    rate: {
      required,
      between: between(0, 5)
    }
  };
};
