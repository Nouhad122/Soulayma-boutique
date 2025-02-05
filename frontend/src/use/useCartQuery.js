import { useMutation, useQuery } from "@tanstack/react-query"
import { fetchCart, queryClient, updateCart } from "./useHttp";
import { useDispatch } from "react-redux";


export const useCartQuery = () =>{
    const { data, isPending, isError, error } = useQuery({
        queryKey: ['cart'],
        queryFn: ({ signal }) => fetchCart({ signal }),
        staleTime: 10000
    });

    const { mutate: updateCartData } = useMutation({
        mutationFn: (cartData) => updateCart(cartData),
        onSuccess: () =>{
            queryClient.invalidateQueries(['cart'], {refetchType: 'none'});
        },
        
    })

    return { data, isPending, isError, error, updateCartData }
}
