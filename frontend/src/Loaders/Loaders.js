import { fetchProductDetails, fetchProducts, queryClient } from '../use/useHttp'

export const productsLoader = () =>{
    return queryClient.fetchQuery({
      queryKey: ['products'],
      queryFn: ({signal}) => fetchProducts({signal}),
      staleTime: 60000
    })
  }

export const chosenProductLoader = async ({params}) =>{
    const prodsLoader = await productsLoader();
    const productDetailsLoader =  await queryClient.fetchQuery({
     queryKey: ['products', params.id],
     queryFn: ({ signal }) => fetchProductDetails({ id: params.id, signal}),
     staleTime: 60000    
    })
    
    return { prodsLoader, productDetailsLoader};
}