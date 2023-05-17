import { Component, OnInit } from '@angular/core';
import { CategoryDTO, ProductDTO } from 'models';
import { ProductService } from '../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: ProductDTO[] = [];

  constructor(
    private productService: ProductService,
    private toastrService: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (err) => { 
        this.toastrService.error('A termék hozzáadása nem sikerült.', 'Hiba');
      }
    });
  }

  navigateToProductForm(id : number) {
    this.router.navigate(['/product-form', id]);
  }

  deleteProduct(product: ProductDTO) {
    this.productService.delete(product.id).subscribe({
      next: () => {
        const index = this.products.indexOf(product);
        if (index > -1) {
          this.products.splice(index, 1);
        }
      },
      error: (err) => {
        console.error(err);
        this.toastrService.error('Hiba a termék törlésekor.', 'Hiba');
      }
    })
  }

  getCategoryList(categories: CategoryDTO[]): string {
    return categories.map((category) => category.title).join(", ");
  }

}
