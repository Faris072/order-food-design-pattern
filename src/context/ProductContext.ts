import type IProduct from "@/product/IProduct";
import { categoryProductEnum } from "@/product/IProduct";
import { ref, watch } from "vue";

export default class ProductContext {
	static #instance: ProductContext;
	private products = ref<IProduct[]>([]);

	private constructor(){
		this.loadProducts();

		watch(this?.products, (newValue, oldValue) => {
			localStorage.setItem('products', JSON.stringify(this?.products.value))
		}, { deep: true });
	}

	private loadProducts(){
		this.products.value = JSON.parse(localStorage.getItem('products') || '[]') || [];
	}

	public static get instance(){
		if(!ProductContext.#instance){
			ProductContext.#instance = new ProductContext();
		}

		return ProductContext.#instance;
	}

	public getAllProducts(){
		return this?.products?.value;
	}

	public getFoods(){
		return this.products?.value?.filter(product => product?.category == categoryProductEnum.makanan);
	}

	public getDrinks(){
		return this.products?.value?.filter(product => product?.category == categoryProductEnum.minuman);
	}

	public getSnacks(){
		return this.products?.value?.filter(product => product?.category == categoryProductEnum.snack);
	}

	public addProduct(data: IProduct){
		this.products?.value?.push(data);
	}

	public removeProductById(id: IProduct['id']){
		let index = this?.products?.value?.findIndex(product => product?.id == id);
		if(index == -1){
			alert('Product not found');
		}
		this?.products?.value?.splice(index, 1);
	}
}