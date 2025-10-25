import api from "./api"


export const authAPI ={
    resigter: async (userdata:any) =>{
        try{
        const response = await api.post('/auth/register', userdata);
        return response.data
        }catch (error:any){
            console.log(error.message)
            const errorMessage = error.response?.data?.message || 'Registration failed. please try again.';
            throw new Error (errorMessage);
        }

    },
    login: async (userdata:any) =>{
        try{
        const response = await api.post('/auth/login', userdata);
        return response.data
        }catch (error:any){
            const errorMessage = error.response?.data?.message || 'Login failed. please try again.';
            throw new Error (errorMessage);
        }

    },

    getProfile: async () =>{
        try{
        const response = await api.get('/auth/profile');
        return response.data
        }catch (error:any){
            const errorMessage = error.response?.data?.message || 'Failed to fetch profile. please try again.';
            throw new Error (errorMessage);
        }

    },

    updateProfil: async (userdata:any) =>{
        try{
        const response = await api.put('/auth/profile', userdata);
        return response.data
        }catch (error:any){
            const errorMessage = error.response?.data?.message || 'Failed to update profile. please try again.';
            throw new Error (errorMessage);
        }
    },

    logout: () =>{
        localStorage.removeItem("token");


    }
}
