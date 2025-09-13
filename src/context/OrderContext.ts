import type IProduct from "@/product/IProduct";
import { ref, watch } from "vue";

export default class OrderContext {
	static #instance: OrderContext;
	private orders = ref<IProduct[]>([]);
	
	private constructor(){
		this.loadOrders();

		watch(this?.orders, (newValue, oldValue) => {
			localStorage.setItem('orders', JSON.stringify(this?.orders.value))
		}, { deep: true });
	}

	private loadOrders(){
		this.orders.value = JSON.parse(localStorage.getItem('orders') || '[]') || [];
	}

	public static get instance(){
		if(!OrderContext.#instance){
			OrderContext.#instance = new OrderContext();
		}

		return OrderContext.#instance;
	}

	public getOrders(){
		return this.orders.value;
	}

	public getOrderByCount(){
		let orders:(IProduct & {qty: number})[] = [];
		this?.orders?.value?.forEach((val:IProduct, i) => {
			let indexOrder = orders?.findIndex(order => order?.id == val?.id);
			if(indexOrder == -1){
				orders?.push({...val, ...{qty: 1}});
			}
			else {
				orders[indexOrder].qty++;
			}
		});

		return orders;
	}

	public addOrder(data: IProduct){
		this?.orders?.value?.push(data);
	}

	public removeOrderById(id: IProduct['id']){
		let index = this?.orders?.value?.findIndex(order => order?.id == id);
		if(index == -1){
			alert('Order not found!');
			return;
		}
		this?.orders?.value?.splice(index, 1);
	}
}