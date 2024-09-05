import { create } from "zustand";

const useInfoStore = create(set=>({
    formData:{name:'',email:'',phone:''},
    setFormData:(name,email,phone)=>
        set(state=>({
            formData:{
                ...state.formData,
                name:name,
                email:email,
                phone:phone
            }
    })),

}))

export default useInfoStore