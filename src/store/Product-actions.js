// import { productActions } from "./Product-slice";


      export  const fetchProductData = async () => {
            const response = await fetch("https://fakestoreapi.com/products");

            if(!response.ok){
                throw new Error('Could not fetch product data!')
            }

            const data = await response.json();
            console.log(response)
            return data;
            
        }

      
    