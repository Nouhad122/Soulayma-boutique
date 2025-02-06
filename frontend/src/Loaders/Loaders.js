import { fetchProductDetails, fetchProducts, queryClient } from '../use/useHttp'

export const productsLoader = () =>{
    return queryClient.fetchQuery({
      queryKey: ['products'],
      queryFn: ({signal}) => fetchProducts({signal}),
      staleTime: 60000
    })
  }

export const chosenProductLoader = ({params}) =>{
    const suggetionsLoader = productsLoader();
    const productDetailsLoader =  queryClient.fetchQuery({
     queryKey: ['products', {id:params.id}],
     queryFn: ({ signal, queryKey }) => fetchProductDetails({ ...queryKey[1], signal}),
     staleTime: 60000    
    })
    
    return { suggetionsLoader, productDetailsLoader};
}