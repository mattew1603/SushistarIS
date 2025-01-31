import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/user'; // URL del backend

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<string> {
    const params = {username: email, password};
    return this.http.post(`${this.baseUrl}/login`, null, {params, responseType: 'text'});
  }

}
