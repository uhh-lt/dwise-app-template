import type { RootState } from "@/plugins/store";
import { useAuthHeader } from "react-auth-kit";
import { useDispatch, useSelector } from "react-redux";
import { ExampleActions } from "./exampleSlice";

export function Example() {
  const count = useSelector((state: RootState) => state.example.value);
  const dispatch = useDispatch();

  const authHeader = useAuthHeader();

  return (
    <div>
      <div>{authHeader()}</div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(ExampleActions.increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(ExampleActions.decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
}
