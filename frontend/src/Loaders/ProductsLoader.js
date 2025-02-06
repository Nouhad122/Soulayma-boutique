import { fetchProducts, queryClient } from '../use/useHttp'

export const productsLoader = () =>{
    return queryClient.fetchQuery({
      queryKey: ['products'],
      queryFn: ({signal}) => fetchProducts({signal}),
      staleTime: 60000
    })
  }