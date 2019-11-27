import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Email } from '../models/email.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  private emailUrl = environment.emailServer;

  constructor(
    private http: HttpClient
  ) { }

  sendEmail(email: Email): Observable<any> {
    return this.http.post(`${this.emailUrl}`, email);
  }

}
