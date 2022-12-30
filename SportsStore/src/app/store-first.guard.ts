import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StoreComponent } from './store/store/store.component';

@Injectable({
  providedIn: 'root'
})
export class StoreFirstGuard implements CanActivate {
  private firstNavigation: boolean = true;

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.firstNavigation) {
        this.firstNavigation = false;
        if (route.component != StoreComponent) {
          this.router.navigateByUrl("/");
          return false;
        }
      }
      return true;
    }
  

}
