export const formatCurrency = (number) => (new Intl.NumberFormat(undefined, {
	style: 'currency',
	currency: 'USD'
}).format(number));
