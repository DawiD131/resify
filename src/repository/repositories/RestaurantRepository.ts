import type { HttpClient } from '@/http-client';

export class RestaurantRepository {
  constructor(private httpClient: HttpClient) {}

  public async getRestaurants() {
    return await this.httpClient.get('restaurant');
  }

  public async getRestaurantsByOwnerId(ownerId: number) {
    return await this.httpClient.get(`restaurant?ownerId=${ownerId}`);
  }

  public async getRestaurant(id: string) {
    return await this.httpClient.get(`restaurant/${id}`);
  }

  public async addRestaurant(params: {
    name: string;
    description: string;
    city: string;
    zipCode: string;
    address: string;
  }) {
    return await this.httpClient.post('restaurant', params);
  }

  public async searchRestaurants(queryKey: string) {
    return await this.httpClient.get(`restaurant/search?query=${queryKey}`);
  }

  public async deleteRestaurant(id: number) {
    return await this.httpClient.delete(`restaurant/${id}`);
  }
}
