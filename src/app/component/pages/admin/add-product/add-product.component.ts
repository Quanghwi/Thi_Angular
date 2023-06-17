import { Router } from '@angular/router';
import { ProductService } from './../../../service/product.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private service: ProductService, private router: Router, private fb: FormBuilder) { }
  addForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    image: ['', [Validators.required]],
    price: [0, [Validators.required]],
    quantity: [0, [Validators.required]],
    description: ['', [Validators.required]],
  })

  handleAdd() {
    if (this.addForm.invalid) return;
    this.service.addProduct(this.addForm.value).subscribe((data) => {
      this.router.navigate(['/admin/products'])
      setTimeout(() => {
        alert(`Thêm sản phẩm ${this.addForm.value.name} thành công`)
      }, 200);
    })
  }
}
