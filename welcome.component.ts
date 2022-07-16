import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../model/customer';
import { Product } from '../model/product';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
product:Product=new Product();
/*customers=[
new Customer(100,"xyz",87654,"abc@gmail.com"),
new Customer(12,"abc",97654,"cbc@gmail.com"),
new Customer(10,"pqr",89654,"ss@gmail.com"),
new Customer(19,"iyz",77654,"akkc@gmail.com")];*/
name:string="";
msg:string=""
  constructor(private route:ActivatedRoute, private ps:ProductServiceService) { }

  ngOnInit() {
    this.name=this.route.snapshot.params['name']
  }


public addProduct():void{
  console.log(this.product);
  this.ps.addProduct(this.product).subscribe((p)=>
  {
   // this.msg=p['message'];
    //console.log(this.msg);
    alert("product added");
  }
);

}
}
