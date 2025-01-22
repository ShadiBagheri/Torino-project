import { useMutation, useQueryClient } from "@tanstack/react-query";

import api from "@/core/config/api";
//Cookie
import { setCookie } from "@/core/utils/cookies";
import {data} from "autoprefixer";
import {useQuery} from "react-query";

const useSendOtp = () => {
    const mutationFn = (data) => api.post("auth/send-otp", data);

    return useMutation({ mutationFn });
};

const useCheckOtp = () => {
    const queryClient = useQueryClient();

    const mutationFn = (data) => api.post("auth/check-otp", data);

    const onSuccess = (data) => {
        setCookie("accessToken", data?.data?.accessToken, 30);
        setCookie("refreshToken", data?.data?.refreshToken, 365);
        queryClient.invalidateQueries({ queryKey: ["user-data"] });
    };

    return useMutation({ mutationFn, onSuccess });
};

const useUserInfo = () => {
    const queryClient = useQueryClient();

    const mutationFn = (data) => api.get("user/profile", data);
    const onSuccess = () => {
        queryClient.invalidateQueries({ queryKey: ["user/profile"]});
    }

    return useMutation({ mutationFn, onSuccess });
}


const useAddToBasket = () => {
    const mutationFn = (id) => api.get(  `basket/${id}`, id);

    return useMutation({ mutationFn })
}

const useCheckout = () => {
    const queryClient = useQueryClient();

    const mutationFn = (data) => api.post("order", data);

    const onSuccess = () => {
        queryClient.invalidateQueries({ queryKey: ["user/tours"] });
    }

    return useMutation({ mutationFn, onSuccess });
}

export { useSendOtp, useCheckOtp, useUserInfo, useAddToBasket, useCheckout };