//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.20.0.0 (NJsonSchema v10.9.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable({
    providedIn: 'root'
})
export class ApiClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:44312";
    }

    aquarium_GetAquariums(): Observable<SwaggerResponse<AquariumDto[]>> {
        let url_ = this.baseUrl + "/aquariums";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processAquarium_GetAquariums(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processAquarium_GetAquariums(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<SwaggerResponse<AquariumDto[]>>;
                }
            } else
                return _observableThrow(response_) as any as Observable<SwaggerResponse<AquariumDto[]>>;
        }));
    }

    protected processAquarium_GetAquariums(response: HttpResponseBase): Observable<SwaggerResponse<AquariumDto[]>> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as AquariumDto[];
            return _observableOf(new SwaggerResponse(status, _headers, result200));
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<SwaggerResponse<AquariumDto[]>>(new SwaggerResponse(status, _headers, null as any));
    }

    aquarium_CreateAquarium(request: CreateAquariumRequestDto): Observable<SwaggerResponse<AquariumDto>> {
        let url_ = this.baseUrl + "/aquariums";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(request);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processAquarium_CreateAquarium(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processAquarium_CreateAquarium(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<SwaggerResponse<AquariumDto>>;
                }
            } else
                return _observableThrow(response_) as any as Observable<SwaggerResponse<AquariumDto>>;
        }));
    }

    protected processAquarium_CreateAquarium(response: HttpResponseBase): Observable<SwaggerResponse<AquariumDto>> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 201) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result201: any = null;
            result201 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as AquariumDto;
            return _observableOf(new SwaggerResponse(status, _headers, result201));
            }));
        } else if (status === 400) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result400: any = null;
            result400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ProblemDetails;
            return throwException("A server side error occurred.", status, _responseText, _headers, result400);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<SwaggerResponse<AquariumDto>>(new SwaggerResponse(status, _headers, null as any));
    }

    aquarium_GetAquariumById(id: number): Observable<SwaggerResponse<AquariumDto>> {
        let url_ = this.baseUrl + "/aquariums/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processAquarium_GetAquariumById(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processAquarium_GetAquariumById(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<SwaggerResponse<AquariumDto>>;
                }
            } else
                return _observableThrow(response_) as any as Observable<SwaggerResponse<AquariumDto>>;
        }));
    }

    protected processAquarium_GetAquariumById(response: HttpResponseBase): Observable<SwaggerResponse<AquariumDto>> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as AquariumDto;
            return _observableOf(new SwaggerResponse(status, _headers, result200));
            }));
        } else if (status === 400) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result400: any = null;
            result400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ProblemDetails;
            return throwException("A server side error occurred.", status, _responseText, _headers, result400);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<SwaggerResponse<AquariumDto>>(new SwaggerResponse(status, _headers, null as any));
    }

    aquarium_DeleteAquarium(id: number): Observable<SwaggerResponse<void>> {
        let url_ = this.baseUrl + "/aquariums/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
            })
        };

        return this.http.request("delete", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processAquarium_DeleteAquarium(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processAquarium_DeleteAquarium(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<SwaggerResponse<void>>;
                }
            } else
                return _observableThrow(response_) as any as Observable<SwaggerResponse<void>>;
        }));
    }

    protected processAquarium_DeleteAquarium(response: HttpResponseBase): Observable<SwaggerResponse<void>> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return _observableOf<SwaggerResponse<void>>(new SwaggerResponse(status, _headers, null as any));
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<SwaggerResponse<void>>(new SwaggerResponse(status, _headers, null as any));
    }
}

export interface AquariumDto {
    id: number;
    name: string;
    highTemp: number;
    lowTemp: number;
    ph?: number;
    ammonia?: number;
    nitrite?: number;
    nitrate?: number;
    type: AquariumType;
}

export enum AquariumType {
    Cold = 0,
    Tropical = 1,
    Marine = 2,
}

export interface ProblemDetails {
    type?: string | undefined;
    title?: string | undefined;
    status?: number | undefined;
    detail?: string | undefined;
    instance?: string | undefined;

    [key: string]: any;
}

export interface CreateAquariumRequestDto {
    name: string;
    type: AquariumType;
}

export class SwaggerResponse<TResult> {
    status: number;
    headers: { [key: string]: any; };
    result: TResult;

    constructor(status: number, headers: { [key: string]: any; }, result: TResult)
    {
        this.status = status;
        this.headers = headers;
        this.result = result;
    }
}

export class ApiException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    return _observableThrow(new ApiException(message, status, response, headers, result));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((event.target as any).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}