import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let user = localStorage.getItem("userData");
      let userObj = user != null ? JSON.parse(user) : null;


    if(user == null ){
      alert("You are not logged in");
      window.location.href="login";
      return false;
    }
    else if (userObj.role =='USER'){
      alert("You are not authorized to view this page");
      window.location.href="login";
      return false;
    }
    return true;
  }
  
}
