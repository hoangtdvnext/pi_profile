import {Headers, Http} from "@angular/http";
import {Router} from "@angular/router";
import 'rxjs/add/operator/toPromise';

export abstract class CommonService {
    constructor(public http: Http, public router: Router) {
    }

    protected getApi(webApi: string): Promise<any> {
        let self = this;
        return new Promise(
            function (resolve, reject) {
                self.http.get(webApi)
                    .toPromise()
                    .then((response) => {
                        let body = response.json();
                        resolve(body);
                    })
                    .catch(err => {
                        reject(err);
                    })
            })
            .then((body) => {
                if (body["error"] == undefined) {
                    return body["res"];
                } else {
                    throw body["error"];
                }
            }, (err) => {
                if (err.status == 500) { // Internal Server Error
                    return this.router.navigate(['/error/500']);
                }
                throw err;
            });
    }

    protected postApi(webApi: string, data: any): Promise<any> {
        let self = this;
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return new Promise(
            function (resolve, reject) {
                self.http.post(webApi, JSON.stringify(data), {headers: headers})
                    .toPromise()
                    .then((response) => {
                        let body = response.json();
                        resolve(body);
                    })
                    .catch(err => {
                        reject(err);
                    })
            })
            .then((body) => {
                if (body["error"] == undefined) {
                    return body["res"];
                } else {
                    throw body["error"];
                }
            }, (err) => {
                if (err.status == 500) { // Internal Server Error
                    return this.router.navigate(['/error/500']);
                }
                throw err;
            });
    }
}
