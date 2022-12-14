import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';
import { IProduct } from './IProduct';
import { Location } from '@angular/common';
import { LocalizedString } from '@angular/compiler';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styles: [
  ]
})
export class ProductDetailsComponent implements OnInit {

  product?: IProduct

  private _description?: string | undefined;
  isDirty: boolean = false;
  public get description(): string | undefined {
    return this._description;
  }
  public set description(value: string | undefined) {
    this.product?.description != value;
    this._description = value;
    this.isDirty = true;
  }

  constructor(private productService: ProductService, private route: ActivatedRoute, private location: Location) { }
  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe(
      product => {
        this.product = product;
        this._description = this.product?.description;
        this.state = LoadState.found;
      },
      error => {
        this.state = LoadState.notfound;
      });
  }

  state: LoadState = LoadState.loading;
  get isLoading(): boolean {
    return this.state == LoadState.loading;
  }
  get hasProduct(): boolean {
    return this.state == LoadState.found;
  }
  get hasNoProduct(): boolean {
    return this.state == LoadState.notfound;
  }
}

enum LoadState { loading, found, notfound };
