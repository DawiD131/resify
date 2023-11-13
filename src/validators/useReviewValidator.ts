import { minLength, required } from '@vuelidate/validators';

export const useReviewValidator = () => {
  return {
    description: {
      required,
      minLength: minLength(10)
    },
    rate: {
      required
    }
  };
};
