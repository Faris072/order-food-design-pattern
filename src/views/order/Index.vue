<template>
	<div>
		<Navbar></Navbar>
		<br>
		<div class="p-10">
			<div class="card bg-white p-10 mb-10">
				<h2>Makanan</h2>
				<br>
				<div class="wrap-product grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7">
					<div v-for="(product, index) in productContext?.getFoods()" class="card">
						<div class="head h-55 overflow-hidden">
							<img :src="product?.imageUrl" class="w-full object-cover object-center hover:scale-120 duration-400" alt="">
						</div>
						<div class="body p-5">
							<h5 class="font-bold">{{ product?.name }}</h5>
							<h6 class="text-red-700">Rp{{ rupiahFormat(product?.price) }}</h6>
							<br>
							<p>{{ product?.description }}</p>
							<br>
							<div class="wrap-button">
								<div v-if="orderContext?.getOrders()?.filter(order => order?.id == product?.id)?.length" class="wrap-button-order flex items-center justify-between gap-3">
									<button @click="orderContext?.removeOrderById(product?.id)" class="cursor-pointer w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded-lg text-xl">-</button>
									<div class="min-w-10 text-center">{{ orderContext?.getOrders()?.filter(order => order?.id == product?.id)?.length }}</div>
									<button @click="orderContext?.addOrder(product)" class="cursor-pointer w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded-lg">+</button>
	
								</div>
								<button v-else @click="orderContext.addOrder(product)" class="cursor-pointer w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded-lg">Tambah Keranjang</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="card bg-white p-10 mb-10">
				<h2>Minuman</h2>
				<br>
				<div class="wrap-product grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7">
					<div v-for="(product, index) in productContext?.getDrinks()" class="card">
						<div class="head h-55 overflow-hidden">
							<img :src="product?.imageUrl" class="w-full object-cover object-center hover:scale-120 duration-400" alt="">
						</div>
						<div class="body p-5">
							<h5 class="font-bold">{{ product?.name }}</h5>
							<h6 class="text-red-700">Rp{{ rupiahFormat(product?.price) }}</h6>
							<br>
							<p>{{ product?.description }}</p>
							<br>
							<div class="wrap-button">
								<div v-if="orderContext?.getOrders()?.filter(order => order?.id == product?.id)?.length" class="wrap-button-order flex items-center justify-between gap-3">
									<button @click="orderContext?.removeOrderById(product?.id)" class="cursor-pointer w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded-lg text-xl">-</button>
									<div class="min-w-10 text-center">{{ orderContext?.getOrders()?.filter(order => order?.id == product?.id)?.length }}</div>
									<button @click="orderContext?.addOrder(product)" class="cursor-pointer w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded-lg">+</button>
								</div>
								<button v-else @click="orderContext.addOrder(product)" class="cursor-pointer w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded-lg">Tambah Keranjang</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="card bg-white p-10 mb-10">
				<h2>Snack</h2>
				<br>
				<div class="wrap-product grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7">
					<div v-for="(product, index) in productContext?.getSnacks()" class="card">
						<div class="head h-55 overflow-hidden">
							<img :src="product?.imageUrl" class="w-full object-cover object-center hover:scale-120 duration-400" alt="">
						</div>
						<div class="body p-5">
							<h5 class="font-bold">{{ product?.name }}</h5>
							<h6 class="text-red-700">Rp{{ rupiahFormat(product?.price) }}</h6>
							<br>
							<p>{{ product?.description }}</p>
							<br>
							<div class="wrap-button">
								<div v-if="orderContext?.getOrders()?.filter(order => order?.id == product?.id)?.length" class="wrap-button-order flex items-center justify-between gap-3">
									<button @click="orderContext?.removeOrderById(product?.id)" class="cursor-pointer w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded-lg text-xl">-</button>
									<div class="min-w-10 text-center">{{ orderContext?.getOrders()?.filter(order => order?.id == product?.id)?.length }}</div>
									<button @click="orderContext?.addOrder(product)" class="cursor-pointer w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded-lg">+</button>
								</div>
								<button v-else @click="orderContext.addOrder(product)" class="cursor-pointer w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded-lg">Tambah Keranjang</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="transaction fixed bottom-5 w-full m-auto">
		<div class="card flex items-center justify-between m-auto w-3/4 sm:max-w-1/2 p-5 px-10 rounded-full">
			<div class="kiri flex gap-7">
				<i class="pi pi-shopping-cart text-black text-2xl"></i>
				<h5>Pesanan: {{ rupiahFormat(orderContext?.getOrders()?.length || 0) }}</h5>
				<h5 class="font-bold">Total: Rp{{ rupiahFormat(Number(orderContext?.getOrders()?.reduce((acc, curr) => acc + curr?.price, 0) || 0)) }}</h5>
			</div>
			<div class="kanan">
				<router-link to="/checkout" class="cursor-pointer w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded-3xl">
					Checkkout
				</router-link>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import rupiahFormat from '@/utils/rupiahFormat';
import Navbar from './Navbar.vue';
import ProductContext from '@/context/ProductContext';
import OrderContext from '@/context/OrderContext';

const productContext = ProductContext.instance;
const orderContext = OrderContext.instance;
</script>