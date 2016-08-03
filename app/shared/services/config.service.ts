import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

    private apiURI: string;
    private authenticationUri: string;

    constructor() {
        this.apiURI = 'http://localhost/CakePhp2_api/api/items/';
        this.authenticationUri = 'http://localhost/CakePhp2_api/api/access/'
    }

    getApiURI() {
        return this.apiURI;
    }

    getAuthenticationUri() {
        return this.authenticationUri;
    }

}
