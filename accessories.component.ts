import { Component, OnInit } from '@angular/core';
import { Product } from '../model.product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  acc: Product[];
  result:string;
  
  constructor(private accService: ProductService) { }

  ngOnInit(): void {
    this.accService.getProductDetailsByType("/accessories").subscribe(result=>{
      this.acc = result;
      console.log(this.acc);
   })
 }
 addtoCart():void{
   console.log("add to cart");
 }

}
