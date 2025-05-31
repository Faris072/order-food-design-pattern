<template>
	<div class="py-15 container m-auto">
		<router-link to="/" class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded-3xl">Kembali</router-link>
		<AddProduct @hide="showHideAdd($event)" @save="addProduct($event)" v-if="showAdd"></AddProduct>
		<div class="head flex items-center justify-end">
			<button v-if="!showAdd" @click="showHideAdd(true)" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded-3xl">
				Tambah Produk
			</button>
		</div>
		<br>
		<div class="card p-5">
			<h1>List Produk</h1>
			<span class="text-gray-700">Tabel dibawah adalah produk yang anda miliki</span>
			<br><br>
			<table cellpadding="0" cellspacing="0" class="table">
				<thead>
					<tr>
						<th class="w-5">No</th>
						<th colspan="2" class="text-left">Produk</th>
						<th class="text-left">Deskripsi</th>
						<th class="text-left w-50">Harga</th>
						<th class="text-center w-10">Kategori</th>
						<th class="text-left w-5">Aksi</th>
					</tr>
				</thead>
				<tbody>
					<template v-for="(product, index) in productContext?.getAllProducts()">
						<tr>
							<td class="text-center">1</td>
							<td class="w-20">
								<div class="w-full flex justify-center">
									<img v-if="product?.imageUrl" :src="product?.imageUrl" class="w-10 h-10 rounded-full object-cover">
								</div>
							</td>
							<td>{{ product?.name }}</td>
							<td>{{ product?.description }}</td>
							<td>Rp{{ rupiahFormat(product?.price) }}</td>
							<td>
								<span v-if="product?.category == categoryProductEnum.makanan" class="p-1 px-2 rounded-lg text-white bg-green-500">Makanan</span>
								<span v-if="product?.category == categoryProductEnum.minuman" class="p-1 px-2 rounded-lg text-white bg-blue-500">Minuman</span>
								<span v-if="product?.category == categoryProductEnum.snack" class="p-1 px-2 rounded-lg text-white bg-yellow-500">Snack</span>
							</td>
							<td><button @click="productContext.removeProductById(product?.id)" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded-lg">Hapus</button></td>
						</tr>
					</template>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import AddProduct from './AddProduct.vue';
import MakananCreator from '@/factory/MakananCreateor';
import MinumanCreator from '@/factory/MinumanCreator';
import SnackCreator from '@/factory/SnackCreator';
import ProductContext from '@/context/ProductContext';
import type IProduct from '@/product/IProduct';
import { categoryProductEnum } from '@/product/IProduct';
import rupiahFormat from '@/utils/rupiahFormat';

const makananCreator = new MakananCreator();
const minumanCreator = new MinumanCreator();
const snackCreator = new SnackCreator();
const showAdd = ref(false);
const productContext = ProductContext.instance;

function showHideAdd(isShow: boolean){
	showAdd.value = isShow;
};

function addProduct(data: {name: string, price: number, category: string, imageUrl: string, description: string}){
	let product: IProduct | null = null;
	switch(data?.category){
		case 'makanan':
			product = makananCreator.create(data?.name, data?.description, data?.price, data?.imageUrl);
			break;
		case 'minuman':
			product = minumanCreator.create(data?.name, data?.description, data?.price, data?.imageUrl);
			break;
		case 'snack':
			product = snackCreator.create(data?.name, data?.description, data?.price, data?.imageUrl);
			break;
		default:
			alert('Tolong pilih kategori produk!');
			break;
	}
	if(!product){
		alert('Produk kosong!');
		return;
	}
	productContext.addProduct(product);
	showHideAdd(false);
}
</script>