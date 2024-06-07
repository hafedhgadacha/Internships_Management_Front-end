import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Sfe } from './../requests/Sfe';
import { SfeResponse } from '../Responses/SfeResponse';

@Injectable({
  providedIn: 'root'
})
export class SfesService {

    constructor(private http: HttpClient, private router:Router, private authService:AuthService) { }
    getAll():Observable<SfeResponse[]>{
      let jwt = this.authService.getToken();
      jwt = "Bearer " + jwt;
      let httpHeaders = new HttpHeaders({"Authorization": jwt})

      return this.http.get<SfeResponse[]>('/api/sfe',{headers:httpHeaders});  
    }
  
    add(d: Sfe):Observable<any>{
      let jwt = this.authService.getToken();
      jwt = "Bearer " + jwt;
      let httpHeaders = new HttpHeaders({"Authorization": jwt})

      return this.http.post('/api/sfe',d,{headers:httpHeaders});  
    }
    delete(id: number):Observable<any>{
      let jwt = this.authService.getToken();
      jwt = "Bearer " + jwt;
      let httpHeaders = new HttpHeaders({"Authorization": jwt})

      return this.http.delete<any>('/api/sfe/'+id,{headers:httpHeaders});  
    }
    
    getSFEById(id: number):Observable<Sfe>{
      let jwt = this.authService.getToken();
      jwt = "Bearer " + jwt;
      let httpHeaders = new HttpHeaders({"Authorization": jwt})
      return this.http.get<Sfe>('/api/sfe/'+id,{headers:httpHeaders});  
    }

    getSFEByEtudId(id: number):Observable<any>{
      let jwt = this.authService.getToken();
      jwt = "Bearer " + jwt;
      let httpHeaders = new HttpHeaders({"Authorization": jwt})

      return this.http.get<Sfe>('/api/sfe/'+id,{headers:httpHeaders});  
    }

    updateSFE(d: Sfe):Observable<Sfe>{
      let jwt = this.authService.getToken();
      jwt = "Bearer " + jwt;
      let httpHeaders = new HttpHeaders({"Authorization": jwt})

      return this.http.post<Sfe>('/api/sfe/'+d,{headers:httpHeaders});  
    }
   
  
  }