import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/component/service/product.service';
import { IProduct } from 'src/app/component/type/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  product!: IProduct
  constructor(private service: ProductService, private router: Router, private fb: FormBuilder, private active: ActivatedRoute) {
    this.active.paramMap.subscribe((data) => {
      const id = data.get('id')
      this.service.getDetail(id).subscribe((data) => {
        this.product = data,
          this.updateForm.patchValue(data)
      })
    })
  }
  updateForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    image: ['', [Validators.required]],
    price: [0, [Validators.required]],
    quantity: [0, [Validators.required]],
    description: ['', [Validators.required]],
  })

  handleupdate() {
    if (this.updateForm.invalid) return;
    this.service.updateProduct({
      id: this.product.id,
      ...this.updateForm.value
    }).subscribe((data) => {
      this.router.navigate(['/admin/products'])
      setTimeout(() => {
        alert(`Cập nhật sản phẩm thành công`)
      }, 200);
    })
  }
}
