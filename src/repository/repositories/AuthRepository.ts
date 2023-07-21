import { type HttpClient } from '@/http-client';

export class AuthRepository {
  constructor(private httpClient: HttpClient) {}

  public async login(email: string, password: string) {
    return await this.httpClient.post('/auth/login', {
      email,
      pwd: password
    });
  }

  public async logout() {
    return await this.httpClient.get('/auth/logout');
  }
}
