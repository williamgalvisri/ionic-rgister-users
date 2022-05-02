import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  CreateUserPayload,
  GetUsersResponse,
} from '../models/user/user-api.model';
import { map } from 'rxjs/operators';
import { User } from '../models/user/user.model';

@Injectable()
export class UserService {
  private baseUrl = environment.api;
  constructor(private http: HttpClient) {}

  public createUser(payload: CreateUserPayload): Promise<void> {
    return this.http.post<void>(`${this.baseUrl}/users`, payload).toPromise();
  }

  public getUsers(): Promise<Array<User>> {
    return this.http
      .get<GetUsersResponse>(`${this.baseUrl}/users`)
      .pipe(map((data) => data.data.map((u) => new User({
				id: u.id,
				firstName: u.first_name,
				lastName: u.last_name,
				avatar: u.avatar,
				email: u.email
			}))))
      .toPromise();
  }
}
