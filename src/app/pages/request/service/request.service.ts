import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RequestService {
  constructor(public http: HttpClient) { }

 
}
