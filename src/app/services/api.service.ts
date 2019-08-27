import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpClientJsonpModule , HttpResponse, JsonpClientBackend } from '@angular/common/http';

@Injectable()
export class ApiService
{
    constructor(private httpClient: HttpClient){}

    getTitles():Observable<any> {
        let httpHeaders = new HttpHeaders().set('dataType','jsonp');

        //assim estava funcionando chegar eventualmente o retorno olhando no inspector do chrome, mas o callback em si não era recebido de volta
        
        let httpParams = new HttpParams()
                            .set('api_key','0325079601bfa0c8b81f5622e1f35d57a9556937')
                            .set('format','jsonp')
                            .set('limit','10')
                            .set('query','kingdom hearts')
                            .set('resources','game')
                            .set('json_callback','callback');
                            //detalhe que fez o codigo funcionar, chamar a função de callback do mesmo jeito que o .jsonp iria injetar na chamada
                            //o importante é:
                            //.set('json_callback','ng_jsonp_callback_0'); e return this.httpClient.jsonp(`${url}?${params}`,"callback");
                            // ou .set('json_callback','callback'); e return this.httpClient.jsonp(`${url}?${params}`,"json_callback");
                            
        let url = 'https://www.giantbomb.com/api/search/';
        let params = httpParams.toString();
        return this.httpClient.jsonp(`${url}?${params}`,"json_callback");
        //return this.httpClient.get(url,{params:httpParams});

        /*
        let httpParams = new HttpParams()
        .set('api_key','0325079601bfa0c8b81f5622e1f35d57a9556937')
        .set('format','json')
        .set('query','kingdom hearts')
        .set('resources','game')
        //.set('json_callback','callback');
        //.set('callback','JSONP_CALLBACK');
        //let url = 'https://www.giantbomb.com/api/games/?api_key=0325079601bfa0c8b81f5622e1f35d57a9556937'
        //let params = httpParams.toString();
        //return this.httpClient.jsonp(`${url}?${params}`,"callback");
        //return this.httpClient.jsonp(url,"callback");
        return this.httpClient.get('https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/search/',{params:httpParams});
        //funciona provisoriamente com essa url pois ele faz as mudanças para você
        */

    }
}
