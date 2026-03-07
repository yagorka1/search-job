import { useDispatch, useSelector } from 'react-redux';
import { increment, selectCount } from '../../feature/increment/counter.slice.ts';

export function About() {
  const data: number = useSelector(selectCount);

  const dispatch = useDispatch();

  return (
    <>
    <div>About</div>
      <div>{ data }</div>

      <button onClick={() => dispatch(increment())} >Click</button>
    </>
  )
}
