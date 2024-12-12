import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useAuthStore = create((set) => ({
	authUser: null,
	checkingAuth: true,
	loading: false,

	signup: async (signupData) => {
		try {
			set({ loading: true });
			const res = await axiosInstance.post("/auth/signup", signupData);
			console.log(res.data.user);
			set({ authUser: res.data.user });

			toast.success("Account created successfully");

		} catch (error) {
			toast.error(error.response.data.message || "Something went wrong");
		} finally {
			set({ loading: false });
		}
	},
	login: async (loginData) => {
		try {
			set({ loading: true });
			const res = await axiosInstance.post("/auth/login", loginData);
			set({ authUser: res.data.user });
			toast.success("Logged in successfully");
		} catch (error) {
			toast.error(error.response.data.message || "Something went wrong");
		} finally {
			set({ loading: false });
		}
	},
	logout: async () => {
		try {
			const res = await axiosInstance.post("/auth/logout");
			if (res.status === 200) set({ authUser: null });
			const navigate = useNavigate();
			navigate("/login");
		} catch (error) {
			toast.error(error.response.data.message || "Something went wrong");
		}
	},
	checkAuth: async () => {
		try {
			const res = await axiosInstance.get("/auth/me");
			set({ authUser: res.data.user });
		} catch (error) {
			set({ authUser: null });
			console.log(error);
		} finally {
			set({ checkingAuth: false });
		}
	},

	setAuthUser: (user) => set({ authUser: user }),
}));