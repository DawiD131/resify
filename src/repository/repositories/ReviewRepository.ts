import type { HttpClient } from '@/http-client';

export class ReviewRepository {
  constructor(private httpClient: HttpClient) {}

  public async getReviews(restaurantId: number) {
    return await this.httpClient.get(`review?restaurantId=${restaurantId}`);
  }

  public async addReview(restaurantId: number, params: { rate: number; description: string }) {
    return await this.httpClient.post('review', { restaurantId, ...params });
  }
}
