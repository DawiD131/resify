import { type HttpClient } from '@/http-client';
import { UserDto } from '@/repository/dto/UserDto';

export class UserRepository {
  constructor(private httpClient: HttpClient) {}

  public async register(user: UserDto) {
    await this.httpClient.post('/user/register', user);
  }

  public async getUser() {
    return await this.httpClient.get('/user');
  }

  public changePassword(payload: { currentPwd: string; newPwd: string }) {
    return this.httpClient.patch('/user/change-password', payload);
  }
}
