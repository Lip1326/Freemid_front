import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/domains/interfaces/user/user.interface';
import { environment } from 'src/environments/environment';
import { BaseService } from '../base/base.service';




@Injectable({
  providedIn: 'root'
})

export class UserService {


  private apiUrl: string = environment.apiUrl+'users/';

  constructor(private http: HttpClient, private base: BaseService) { }

  register(user: User): Observable<User> {
    console.log(this.apiUrl)
    const headers: HttpHeaders = this.base.getHeaders();
    return this.http.post<any>(this.apiUrl, user, { headers });
  }


}
