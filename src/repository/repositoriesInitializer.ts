import { AuthRepository, UserRepository } from '@/repository/repositories';
import { httpClient } from '@/http-client';
import { RestaurantRepository } from '@/repository/repositories/RestaurantRepository';
import { ReviewRepository } from '@/repository/repositories/ReviewRepository';

export interface repositories {
  authRepository: AuthRepository;
  userRepository: UserRepository;
  restaurantRepository: RestaurantRepository;
  reviewRepository: ReviewRepository;
}

export const repositoriesInitializer = (): repositories => ({
  authRepository: new AuthRepository(httpClient),
  userRepository: new UserRepository(httpClient),
  restaurantRepository: new RestaurantRepository(httpClient),
  reviewRepository: new ReviewRepository(httpClient)
});
