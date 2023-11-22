import { minLength, required } from '@vuelidate/validators';

export const useRestaurantDataValidators = () => {
  return {
    restaurantName: {
      required,
      minLength: minLength(3)
    },
    description: {
      required,
      minLength: minLength(10)
    },
    city: {
      required,
      minLength: minLength(3)
    },
    address: {
      required,
      minLength: minLength(3)
    },
    zipCode: {
      required
    }
  };
};
