import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductDetailsComponent } from './product-details.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateDetailsGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let details = component as ProductDetailsComponent;
    if(details){
      return !details.isDirty;
    } else
    return true;
  }
  
}
