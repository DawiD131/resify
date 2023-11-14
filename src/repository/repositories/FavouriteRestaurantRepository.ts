import type { HttpClient } from '@/http-client';

export class FavouriteRestaurantRepository {
  constructor(private httpClient: HttpClient) {}

  public async addRestaurantToFavourite(restaurantId: number) {
    return await this.httpClient.post('favourite-restaurant', { restaurantId });
  }

  public async removeRestaurantFromFavourite(id: string) {
    return await this.httpClient.delete(`favourite-restaurant/${id}`);
  }
}
