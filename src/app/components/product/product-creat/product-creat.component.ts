import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-product-creat',
  templateUrl: './product-creat.component.html',
  styleUrls: ['./product-creat.component.css']
})
export class ProductCreatComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0, 
    id: 0
  };

  constructor(
    private productService: ProductService,
    private router: Router  ) {}

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
    this.productService.showMessage('Produto criado!')
    this.router.navigate(['/products'])
    })

  }
  cancel(): void {
    this.router.navigate(['/products'])
 }
}

