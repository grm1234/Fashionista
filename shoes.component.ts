import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../model.product';
@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {
  shoes: Product[];
  result:string;
  
  constructor(private shoesService: ProductService) { }

  ngOnInit(): void {
    this.shoesService.getProductDetailsByType("/shoes").subscribe(result=>{
      this.shoes = result;
      console.log(this.shoes);
   })
 }
  addtoCart():void{
    console.log("add to cart");
  }

}
/**export class ProductsComponent implements OnInit {
  productRef = new FormGroup({
    _id: new FormControl(),
    pname: new FormControl,
    price: new FormControl
  })
  products: Products[];
  constructor(public productService:ProductService) { }
  result:string;
  ngOnInit(): void {
    this.productService.getProducts().subscribe(result=>{
      this.products = result;
      console.log(this.products);
    })
  }
  
  storeProductDetails():void{
    //console.log(this.productRef.value);
    this.productService.addProducts(this.productRef.value).subscribe(data=>this.result=data.msg);
  }
  deleteProduct(id: any) {
    this.productService.deleteProductsById(id).subscribe((result) => {
      alert('Product Deleted Successfully, reload page to see updated Product list');
    })
  }*/
