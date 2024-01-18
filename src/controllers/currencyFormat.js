export const currencyFormat = (number) => {
	return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(number);
};
