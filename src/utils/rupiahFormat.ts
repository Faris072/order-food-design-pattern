export default function rupiahFormat(value: number, options?: { minimumFractionDigits?: number; maximumFractionDigits?: number }): string {
	const formatter = new Intl.NumberFormat('id-ID', {
		// style: 'currency',
		currency: 'IDR',
		minimumFractionDigits: options?.minimumFractionDigits ?? 0,
		maximumFractionDigits: options?.maximumFractionDigits ?? 0,
	});
	
	return formatter.format(value);
}