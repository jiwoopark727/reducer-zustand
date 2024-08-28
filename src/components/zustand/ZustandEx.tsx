import { useCountStore } from '../../stores/countStore'
import A from './A'
const ZustandEx = () => {
  const { count } = useCountStore();
  return (
    <>
      <div>ZustandEx Component</div>
      <h1>count : {count}</h1>
      <A></A>
    </>
  )
}
export default ZustandEx;