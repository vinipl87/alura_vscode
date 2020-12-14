import { Component, Input } from '@angular/core';

import { environment } from '../../../environments/environment';

const API = environment.ApiUrl;

@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {
    
    private _url : string;
    @Input() description='';
    
    @Input() set url(url: string) {
        if(!url.startsWith('data')) {
            this._url = API + '/imgs/' + url;
        } else {
            this._url = url;
        }
    }

    get url() {
        return this._url;
    }
}