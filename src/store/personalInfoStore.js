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
    errorInfo:{errorName:false,errorEmail:false,errorPhone:false},
    setError:(errorName,errorEmail,errorPhone)=>
        set(state=>({
            errorInfo:{
                ...state.errorInfo,
                errorName:errorName,
                errorEmail:errorEmail,
                errorPhone:errorPhone
            }
        })),
    errorMsg:{nameErrorMsg:'',emailErrorMsg:'',phoneErrorMsg:''},
    setErrorMsg:(nameErrorMsg,emailErrorMsg,phoneErrorMsg)=>
        set(state=>({
            errorMsg:{
                ...state.errorMsg,
                nameErrorMsg:nameErrorMsg,
                emailErrorMsg:emailErrorMsg,
                phoneErrorMsg:phoneErrorMsg
            }
        })),
        currentStep:'personal info',
        setStep:(step)=>set({currentStep:step})       
}))

export default useInfoStore