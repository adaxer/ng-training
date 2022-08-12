import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanDeactivate } from '@angular/router';
import { ProductDetailsComponent } from './products/product-details.component';
import { ProductListComponent } from './products/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DeactivateDetailsGuard } from './products/deactivate-details.guard';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'products/:id', component: ProductDetailsComponent, canDeactivate: [DeactivateDetailsGuard] },
  { path: 'products', component: ProductListComponent },
  { path: '**', redirectTo: '/welcome' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
