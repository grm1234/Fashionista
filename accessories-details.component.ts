import { Component, OnInit } from '@angular/core';
import { Product } from '../model.product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-accessories-details',
  templateUrl: './accessories-details.component.html',
  styleUrls: ['./accessories-details.component.css']
})
export class AccessoriesDetailsComponent implements OnInit {

  acc: Product = new Product();
  result:string;
  id: any;
  constructor(private _productService: ProductService,
    private _route: ActivatedRoute, private _router: Router,
    private _location: Location) { }
  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this._productService.getProductsById(this.id).subscribe(result => {
      this.acc = result;
      console.log(this.acc);
    })
  }
  addToCart():void{

  }
  goBack():void{
    this._location.back();
  }

}
