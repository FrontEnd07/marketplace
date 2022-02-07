import { $host } from "@http";
import { toast } from "react-toastify";

export const productsApi = () => async dispatch => {
    try {
        const { data } = await $host.get(`/products`);
        return data
    } catch (e) {
        toast.error(e.message)
    }
}