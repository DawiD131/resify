import type { HttpClient } from '@/http-client';

export class TagRepository {
  constructor(private httpClient: HttpClient) {}

  public async addTag(params: { name: string; restaurantId: number }) {
    return await this.httpClient.post('tag', params);
  }

  public async removeTag(id: number) {
    return await this.httpClient.delete(`tag/${id}`);
  }
}
