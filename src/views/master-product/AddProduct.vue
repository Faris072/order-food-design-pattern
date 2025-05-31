<template>
	<div class="my-10">
		<div class="card p-5">
			<div class="flex items-start justify-between">
				<h1 class="w-full mt-3">Tambah Produk</h1>
				<div class="relative w-full left-0 right-0">
					<button @click="$emit('hide', false)" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded-full right-0 top-0 absolute">x</button>
				</div>
			</div>
			<div class="mt-10 grid grid-cols-2 gap-5">
				<div class="wrap-form">
					<label class="text-gray-800">Nama Produk <small class="text-red-500">*</small></label>
					<input v-model="formData.name" type="text" class="form-control" placeholder="Masukkan nama produk...">
				</div>
				<div class="wrap-form">
					<label class="text-gray-800">Harga produk <small class="text-red-500">*</small></label>
					<input v-model="formData.price" type="number" class="form-control" placeholder="Masukkan harga produk...">
				</div>
				<div class="wrap-form">
					<label class="text-gray-800">Kategori produk <small class="text-red-500">*</small></label>
					<select v-model="formData.category" class="form-control" placeholder="Pilih kategori produk...">
						<option selected value="makanan">Makanan</option>
						<option value="minuman">Minuman</option>
						<option value="snack">Snack</option>
					</select>
				</div>
				<div class="wrap-form">
					<label class="text-gray-800">Gambar produk</label>
					<input v-model="formData.imageUrl" type="text" class="form-control" placeholder="Masukkan url gambar produk...">
				</div>
				<div class="wrap-form col-span-2">
					<label class="text-gray-800">Deskripsi produk</label>
					<textarea v-model="formData.description" type="text" class="form-control" placeholder="Masukkan deskripsi produk..."></textarea>
				</div>
				<div class="wrap-form col-span-2">
					<button @click="$emit('save', formData)" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-xl w-full">Simpan</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

type dataType = {name: string, price: number, category: string, imageUrl: string, description: string};

	const emits = defineEmits<{
		(e: 'hide', isShow: boolean): void,
		(e: 'save', data: dataType): void
	}>();
	
	const formData = ref<dataType>({
		name: '',
		category: 'makanan',
		description: '',
		imageUrl: '',
		price: 0
	});
</script>