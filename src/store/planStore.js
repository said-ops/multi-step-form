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
        cards : [
            {img:'../src/assets/images/icon-arcade.svg',title:'Arcade',price:'$9/mo',yearly:'$90/yr'},
            {img:'../src/assets/images/icon-advanced.svg',title:'Advanced',price:'$12/mo',yearly:'$120/yr'},
            {img:'../src/assets/images/icon-pro.svg',title:'Pro',price:'$15/mo',yearly:'$150/yr'},
        ]    
}))
export default usePlanStore