import { axiosInstance } from "@/utils/axios";

export const authService = {
    async loginApi(input: LoginInput) {
        const response = await axiosInstance.post('/auth/login', input);
        return { response: response, data: response.data };
    }
};