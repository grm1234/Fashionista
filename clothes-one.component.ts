import { Component, OnInit } from '@angular/core';
import { Product } from '../model.product';
import { ProductService } from '../product.service';
import {HttpClientModule } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-clothes-one',
  templateUrl: './clothes-one.component.html',
  styleUrls: ['./clothes-one.component.css']
})
export class ClothesOneComponent implements OnInit {
  clothes: Product[];
  result:string;
  
  constructor(private clothesService: ProductService) { }

  ngOnInit(): void {
    this.clothesService.getProductDetailsByType("/clothes").subscribe(result=>{
      this.clothes = result;
      console.log(this.clothes);
   })
 }
 addtoCart():void{
   console.log("add to cart");
 }

}
