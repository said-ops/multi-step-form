import { create } from "zustand";

const usePlanStore = create(set=>({
    planInfo:{
        option:false,
        title:'arcade',
        price:9,
        yearly:90
    },
    setPlanInfo:(option,title,price,yearly)=>
        set(state=>({
            planInfo:{
                ...state.planInfo,
                option:option,
                title:title,
                price:price,
                yearly:yearly
            }
        })),
}))
export default usePlanStore