import { Pedido } from './shared/pedido.model';
import { Injectable } from '@angular/core';
import { URL_API } from './app.api'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class OrdemCompraService {

    constructor(private http: HttpClient){}

    public efetivarCompra(pedido: Pedido): Observable<number>  { 

        //informar para API o tipo de dado que ela está recebendo
        let headers = new HttpHeaders({'Content-type':'application/json'})  
   
        return this.http.post(
            `${URL_API}/pedidos`, 
            //convertendo um objeto literal em string  
            JSON.stringify(pedido),
            //opções da requisição
            ({headers: headers})
        )
        .pipe(map((resposta: any) => resposta.id))
    }
}