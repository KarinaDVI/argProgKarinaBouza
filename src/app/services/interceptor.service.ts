/*import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticationService } from './autentication.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private autenticacionServicio:AutenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
   
    var currentUser=this.autenticacionServicio.UsuarioAutenticado;
    if(currentUser && currentUser.accessToken)
    {
      req=req.clone({
        setHeaders:{
          Authorization: `Bearer ${currentUser.accessToken}`
        }
      })
    }
    console.log("Interceptor está corriendo " + JSON.stringify(currentUser));
    return next.handle(req);
  }
}
*/
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService{
  constructor(private tokenService: TokenService){}
  
    intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
      let intReq = req;
      const token = this.tokenService.getToken();
      if(token!=null){
        intReq = req.clone({
          headers: req.headers.set('Authorization','Bearer'+token)
        });
      }
      return next.handle(intReq);
    }
  }
  export const interceptorProvider = [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }];
