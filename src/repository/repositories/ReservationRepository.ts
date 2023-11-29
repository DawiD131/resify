import type { HttpClient } from '@/http-client';

export class ReservationRepository {
  constructor(private httpClient: HttpClient) {}

  public async getAll(accountType: 'private' | 'business') {
    return await this.httpClient.get(`reservation?accountType=${accountType}`);
  }

  public async add(params: {
    restaurantId: number;
    from: Date;
    to: Date;
    state: 'accepted' | 'pending' | 'rejected';
  }) {
    return await this.httpClient.post('reservation', params);
  }

  public async delete(id: number) {
    return await this.httpClient.delete(`reservation/${id}`);
  }
}
