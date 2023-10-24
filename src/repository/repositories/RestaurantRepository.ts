import type { HttpClient } from '@/http-client';

export class RestaurantRepository {
  constructor(private httpClient: HttpClient) {}

  public async getRestaurants() {
    return await this.httpClient.get('restaurant');
  }

  public async addRestaurant(params: { name: string; description: string }) {
    return await this.httpClient.post('restaurant', params);
  }
}
