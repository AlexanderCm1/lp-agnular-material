import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Semestre} from '../models/semestre';

import {Global} from './global';


@Injectable({
    providedIn: 'root'
})
export class SemestreService{ 
    public url:string;

    constructor(
        private _http:HttpClient
    ){
        this.url = Global.url;
    }
    getSemestres():Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url + 'semestre/listar',{headers:headers});
    }
    crearSemestre(semestre:Semestre): Observable<any>{
        let params = JSON.stringify(semestre);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url + 'semestre/crear', params,{headers:headers});
    }
    
    getSemestre(id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+ 'semestre/listar/' + id,{headers:headers});
    }
    updateSemestre(semestre:Semestre):Observable<any>{
        let params = JSON.stringify(semestre);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.put(this.url + 'semestre/update/' + semestre.SEMESTRE_ID,params,{headers:headers})
    }
    deleteSemestre(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.delete(this.url+ '/semestre/delete/' + id,{headers:headers});

    }


}


