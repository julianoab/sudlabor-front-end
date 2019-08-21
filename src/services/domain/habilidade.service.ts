import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx";
import { HabilidadeDTO } from "../../models/habilidade.dto";
import { Injectable } from "@angular/core";


@Injectable()
export class HabilidadeService {

    constructor(public http: HttpClient){
    }

    findAll() : Observable<HabilidadeDTO[]>  {
        return this.http.get<HabilidadeDTO[]>(`${API_CONFIG.baseUrl}/habilidades`);
    }
}