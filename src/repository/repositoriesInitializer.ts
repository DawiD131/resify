import { AuthRepository, UserRepository, TagRepository } from '@/repository/repositories';
import { httpClient } from '@/http-client';
import { RestaurantRepository } from '@/repository/repositories/RestaurantRepository';
import { ReviewRepository } from '@/repository/repositories/ReviewRepository';
import { FavouriteRestaurantRepository } from '@/repository/repositories/FavouriteRestaurantRepository';

export interface repositories {
  authRepository: AuthRepository;
  userRepository: UserRepository;
  restaurantRepository: RestaurantRepository;
  reviewRepository: ReviewRepository;
  favouriteRestaurantRepository: FavouriteRestaurantRepository;
  tagRepository: TagRepository;
}

export const repositoriesInitializer = (): repositories => ({
  authRepository: new AuthRepository(httpClient),
  userRepository: new UserRepository(httpClient),
  restaurantRepository: new RestaurantRepository(httpClient),
  reviewRepository: new ReviewRepository(httpClient),
  favouriteRestaurantRepository: new FavouriteRestaurantRepository(httpClient),
  tagRepository: new TagRepository(httpClient)
});
