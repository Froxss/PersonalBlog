import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: string = '';
  product?: Product;
  constructor(private route: ActivatedRoute, private productService: ProductService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.productService.getProductById(+this.id).subscribe(product => {
      this.product = product;
      console.log('product', product);
    })
    // console.log('id', this.id);
  }

}
