import { httpClient, type HttpClient } from '@/http-client';

export class AuthRepository {
  constructor(private httpClient: HttpClient) {}

  public async login(email: string, password: string) {
    try {
      return await httpClient.post('/auth/login', {
        email,
        pwd: password
      });
    } catch (e) {
      console.log(e);
    }
  }
}
