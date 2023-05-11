import { httpClient, type HttpClient } from '@/http-client';

export class UserRepository {
  constructor(private httpClient: HttpClient) {}

  public async register(email: string, password: string, firstName: string, lastName: string) {
    try {
      await httpClient.post('/user/register', {
        email,
        pwd: password,
        firstName,
        lastName
      });
    } catch (e) {
      console.log(e);
    }
  }

  public async getUser() {
    try {
      const resp = await httpClient.get('/user');
      return resp;
    } catch (e) {
      console.log(e);
    }
  }
}
