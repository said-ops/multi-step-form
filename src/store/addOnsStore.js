import { create } from "zustand";

const useAddOnsStore=create(set=>({
    addOns:[
        {title:'Online service',desc:'Access to multiplayer games',price:'+$1/mo',yearly:'+$10/yr',added:false},
        {title:'Large storage',desc:'Extra 1TB of cloud save',price:'+$2/mo',yearly:'+$20/yr',added:false},
        {title:'Costomizable profile',desc:'Custom theme on your profile',price:'+$2/mo',yearly:'+$20/yr',added:false},
    ],
    setAddOns:(title)=>
        set(state=>({
            addOns:state.addOns.map(addOn=>
                addOn.title===title?{...addOn,added:!addOn.added}:addOn
            )
        }))
  
}))

export default useAddOnsStore