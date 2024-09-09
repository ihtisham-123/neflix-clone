import axios from 'axios'
import { create } from 'zustand'
import toast from 'react-hot-toast'

export const useAuthStore = create((set) => ({

    user: null,
    isSigningUp: false,
    isChekingAuth:false,
    isLoggingOut:false,
    signup: async (credentials) => {
        set({ isSigningUp: true })
        try {
            const response = await axios.post("/api/v1/auth/signup", credentials)
            set({ user: response.data.user, isSigningUp: flase })
            toast.success("Account created successful")
        } catch (error) {
            toast.error(error.response.data.message || "An erro occured")
            set({ isSigningUp: false, user: null })
        }

    },
    login: async () => {

    },
    logout: async () => {
        set({  isLoggingOut:true})

        try {
            await axios.post("/api/v1/auth/logout")
            set({user:null, isLoggingOut:false})
            toast.success("Logged out successful")
        } catch (error) {
            set({isLoggingOut:false})
            toast.error(error.response.data.message || "Logout failed")
        }

    },
    authCheck: async () => {
       try {

         set({ isChekingAuth: true })
         const response = await axios.get("/api/v1/auth/authCheck")
         set({ user: response.data.user, isChekingAuth: false })
       } catch (error) {
        //  toast.error("Authentication failed")
         set({ user: null, isChekingAuth: false })
        //  localStorage.removeItem("token")
        
       }
    },





}))
