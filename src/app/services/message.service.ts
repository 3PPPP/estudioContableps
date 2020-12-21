import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class MessageService {
constructor(private _http: HttpClient) { }
sendMessage(body: any) {
 return this._http.post('http://localhost:3000', body);
 }
}
