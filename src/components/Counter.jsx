import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "../redux/features/counter/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <div className=" flex flex-col items-center">
      <div>{count}</div>
      <div className="flex gap-5">
        <button onClick={() => dispatch(increment())} className="btn ">
          Inrement
        </button>
        <button onClick={() => dispatch(decrement())} className="btn ">
          Decrement
        </button>
        <button onClick={() => dispatch(incrementByValue(5))} className="btn ">
          Increment by 5
        </button>
      </div>
    </div>
  );
};

export default Counter;
