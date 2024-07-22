import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent implements OnInit {

  public products:any = [
    { name: 'mobile', category: 'gadgets', price: 10000, rating: 5 },
    { name: 'laptop', category: 'gadgets', price: 50000, rating: 4.5 },
    { name: 'tv', category: 'gadgets', price: 70000, rating: 4 },
    { name: 'shirt', category: 'fashion', price: 3000, rating: 3 },
    { name: 'pant', category: 'fashion', price: 4000, rating: 5 },
    { name: 'saree', category: 'fashion', price: 5000, rating: 4 },
    { name: 'flipflop', category: 'footware', price: 1000, rating: 3.5 },
    { name: 'shoes', category: 'footware', price: 3000, rating: 4.2 },
    { name: 'belt', category: 'accessories', price: 600, rating: 2.5 },
    { name: 'specs', category: 'accessories', price: 999, rating: 3.8 },
    { name: 'watch', category: 'accessories', price: 4000, rating: 5 },
  ]

  public term:string = "";


  constructor() { }

  ngOnInit(): void {
  }

  search(){
    this.products = this.products.filter((product:any)=>product.name.includes(this.term));
  }

  pricelh(){
    this.products = this.products.sort((a:any, b:any)=>a.price-b.price);
  }

  discount(){
    this.products = this.products.map((product:any)=>{
      product.price = product.price/2;
      return product;
    })
  }

  total(){
    let total = this.products.reduce((sum:any,a:any)=>sum+a.price,0);
    alert("Total price is "+total);
  }

  delete(i:number){
    this.products.splice(i,1);
  }




}
