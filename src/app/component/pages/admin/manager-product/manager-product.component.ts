import { Component } from '@angular/core';
import { ProductService } from 'src/app/component/service/product.service';
import { IProduct } from 'src/app/component/type/product';

@Component({
  selector: 'app-manager-product',
  templateUrl: './manager-product.component.html',
  styleUrls: ['./manager-product.component.css']
})
export class ManagerProductComponent {
  products: IProduct[] = []
  constructor(private service: ProductService) {
    this.service.getAll().subscribe((data) => {
      this.products = data
    })
  }

  DeleteProduct(id: any) {
    const product = this.products.find((item) => item.id == id)
    const result = confirm(`Xóa sản phẩm ${product?.name} chứ ?`)
    if (result) {
      this.service.deleteProduct(id).subscribe((data) => {
        this.products = this.products.filter((item) => item.id !== id)
        setTimeout(() => {
          alert('Xóa sản phẩm thành công')
        }, 200)
      })
    }
  }
}
