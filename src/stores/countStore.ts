import { create } from 'zustand';

type CountStoreType = {
  count: number;
  increment: ()=>void;
  decrement: ()=>void;
}

export const useCountStore = create<CountStoreType>((setCount)=> ({
  count: 0, 
  increment: ()=>setCount({count: 10}),
  decrement: ()=>setCount((state)=>({count: state.count - 1}))
}));