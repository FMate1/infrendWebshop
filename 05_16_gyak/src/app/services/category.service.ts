import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryDTO } from 'models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAll() {
     return this.http.get<CategoryDTO[]>('api/categories');
  }

  getOne(id: number) {
    return this.http.get<CategoryDTO>('api/categories/' + id);
  }

  create(product: CategoryDTO) {
    return this.http.post<CategoryDTO>('api/categories', product);
  }

  update(product: CategoryDTO) {
    return this.http.put<CategoryDTO>('api/categories', product);
  }

  delete(id: number) {
    return this.http.delete('api/categories/' + id);
  }
}
