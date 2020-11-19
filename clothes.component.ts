import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../model.product';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {
  clothes: Product = new Product();
  result:string;
  id: any;
  constructor(private _productService: ProductService,
    private _route: ActivatedRoute, private _router: Router,
    private _location: Location) { }
  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this._productService.getProductsById(this.id).subscribe(result => {
      this.clothes = result;
      console.log(this.clothes);
    })
  }
  addToCart():void{

  }
  goBack():void{
    this._location.back();
  }

}
