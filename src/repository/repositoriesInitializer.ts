import { AuthRepository, UserRepository } from '@/repository/repositories';
import { httpClient } from '@/http-client';

export interface repositories {
  authRepository: AuthRepository;
  userRepository: UserRepository;
}

export const repositoriesInitializer = (): repositories => ({
  authRepository: new AuthRepository(httpClient),
  userRepository: new UserRepository(httpClient)
});
