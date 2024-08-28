import { useCountStore } from '../../stores/countStore';

const B = () => {
  const {count, increment, decrement} = useCountStore();
  return (
    <>
      <div>B Component</div>
      <h1>count: {count}</h1>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
    </>
  )
}
export default B;