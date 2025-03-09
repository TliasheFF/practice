import { useGenericState } from "./use-generic-state";

export function Counter() {
  const [count, setCount] = useGenericState<number>(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ display: "flex", gap: 10 }}>
      <button style={{ width: 25 }} onClick={increment}>
        +
      </button>
      <p>{count}</p>
      <button style={{ width: 25 }} onClick={decrement}>
        -
      </button>
    </div>
  );
}

export function TextInput() {
  const [text, setText] = useGenericState<string>("");

  return <input placeholder="Enter text" value={text} onChange={(e) => setText(e.target.value)} />;
}
