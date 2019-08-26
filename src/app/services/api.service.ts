import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class ApiService
{
    constructor(private httpClient: HttpClient){}

    getTitles():Observable<any> {
        let httpHeaders = new HttpHeaders().set('dataType','jsonp');
        let httpParams = new HttpParams()
                            .set('api_key','0325079601bfa0c8b81f5622e1f35d57a9556937')
                            .set('format','jsonp')
                            .set('query','kingdom hearts')
                            .set('resources','game')
                            .set('json_callback','gamer');
        return this.httpClient.get("https://www.giantbomb.com/api/search/",{params:httpParams, headers:httpHeaders});
    }
}
