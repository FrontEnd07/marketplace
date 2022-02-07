import { $host } from "@http";
import { toast } from "react-toastify";

export const smsApi = (payload) => async dispatch => {
    try {
        const { data } = await $host.post(`/sms/send`, payload)
        return data
    } catch (e) {
        toast.error(e.message)
    }
}

export const loginApi = (payload) => async dispatch => {
    try {
        const { data } = await $host.post(`/auth/login`, payload)
        return data
    } catch (e) {
        toast.error(e.message)
    }
}