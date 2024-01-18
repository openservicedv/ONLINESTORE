import {createContext, useState} from 'react';

export const SearchContext = createContext();

export const SearchProvider = (props) => {

	const [searchText, setSearchText] = useState('');
	const [isCartOpen, setIsCartOpen] = useState(false);
	const handleSearch = (event) => {setSearchText(event.target.value);};
	const handleCartToggle = () => {setIsCartOpen(!isCartOpen);};
	const closeCart = () => {setIsCartOpen(false);};


	return (
		<SearchContext.Provider value={{
			searchText,
			setSearchText,
			isCartOpen,
			setIsCartOpen,
			handleSearch,
			handleCartToggle,
			closeCart}}
		>
			{props.children}
		</SearchContext.Provider>
	);
};
