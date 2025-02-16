import { useMutation, useQueryClient } from "@tanstack/react-query";
//Config
import api from "@/core/config/api";
//Cookie
import { setCookie } from "@/core/utils/cookies";

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

const useEditUserInfoProfile = () => {
    const queryClient = useQueryClient();
    const mutationFn = (data) => api.put("user/profile", data);
    const onSuccess = () => {
      queryClient.invalidateQueries({ queryKey: ["user_data"] });
    }
    return useMutation({ mutationFn, onSuccess });
}

const useEditPersonalInfo = () => {
    const queryClient = useQueryClient();
    const mutationFn = (data) => api.put("user/profile", data);
    const onSuccess = () => {
        queryClient.invalidateQueries({ queryKey: ["user_data"] });
    }
    return useMutation({ mutationFn, onSuccess });
}

const useEditUserBankAccount = () => {
    const queryClient = useQueryClient();
    const mutationFn = (data) => api.put("user/profile", data);
    const onSuccess = () => {
        queryClient.invalidateQueries({ queryKey: ["user_data"] });
    }
    return useMutation({ mutationFn, onSuccess });
}

const useAddToBasket = () => {
    const mutationFn = (id) => api.put(`basket/${id}`);
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

export {
    useSendOtp,
    useCheckOtp,
    useEditUserInfoProfile,
    useEditPersonalInfo,
    useEditUserBankAccount,
    useAddToBasket,
    useCheckout,
};