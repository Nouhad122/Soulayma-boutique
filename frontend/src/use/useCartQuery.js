import { useMutation, useQuery } from "@tanstack/react-query"
import { fetchCart, queryClient, updateCart } from "./useHttp";
import { useContext } from "react";
import AuthContext from "../store/AuthContext";

export const useCartQuery = () =>{
    const { isLoggedIn } = useContext(AuthContext);
    const { data, isPending, isError, error, refetch } = useQuery({
        queryKey: ['cart'],
        queryFn: ({ signal }) => fetchCart({ signal }),
        staleTime: 60000,
        enabled: isLoggedIn
    });

    const { mutate: updateCartData } = useMutation({
        mutationFn: (cartData) => updateCart(cartData),
        onSuccess: () =>{
            queryClient.invalidateQueries(['cart'], {refetchType: 'none'});
        },
        
    })

    return { data, isPending, isError, error, updateCartData, refetch }
}
