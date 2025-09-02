# React Hooks Cheat Sheet

A quick reference for the most common React hooks.

---

## 1. useState

```ts
const [count, setCount] = React.useState(0);

// Update state
setCount((prev) => prev + 1);
```

Key points:

- Stores local state in a component.
- Updates trigger re-renders.
- Can use functions to update based on previous state.

## 2. useEffect

```ts
React.useEffect(() => {
  console.log("Effect ran");
  return () => console.log("Cleanup");
}, [dependency]);
```

# Some pitfalls of useEffect and correct usage

- Without a dependency array

```ts
useEffect(() => {
  // This runs after every render
});
```

- With an empty dependency array

```ts
useEffect(() => {
  // This runs only on mount (when the component appears)
}, []);
```

- With a dependency array containing dependencies

```ts
useEffect(() => {
  // This runs on mount *and also* if either a or b have changed since the last render
}, [a, b]);
```

Key points:

- Side effects after render (API calls, subscriptions).
- Cleanup runs on unmount or before next effect.
- Dependency array controls when effect runs.

## 3. useRef

```ts
const inputRef = React.useRef<HTMLInputElement>(null);

React.useEffect(() => {
  inputRef.current?.focus();
}, []);
```

Key points:

- Access DOM elements directly.
- Persist values without triggering re-renders.

## 4. useMemo

```ts
const expensiveResult = React.useMemo(() => compute(items), [items]);
```

Key points:

- Memoizes expensive computations.
- Only recalculates when dependencies change.

## 5. useCallback

```ts
const handleClick = React.useCallback(() => console.log(count), [count]);
```

Key points:

- Memoizes functions.
- Useful for child components to prevent unnecessary re-renders.

## 6. useReducer

```ts
const reducer = (state: number, action: string) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const [count, dispatch] = React.useReducer(reducer, 0);

dispatch("increment");
```

Key points:

- Structured state management for complex states.
- Works well with useContext for global state.

## 7. useContext

```ts
const ThemeContext = React.createContext("light");
const theme = React.useContext(ThemeContext);
```

Key points:

- Access shared state without prop drilling.
- Combine with useReducer for centralized state.

## 8. useLayoutEffect

```ts
React.useLayoutEffect(() => {
  console.log("Runs before paint");
});
```

Key points:

- Similar to useEffect but runs synchronously before browser paints.
- Useful for layout reads and DOM measurements.

## 9. useImperitiveHandle

```tsx
const FancyInput = React.forwardRef((props, ref) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  React.useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
  }));
  return <input ref={inputRef} />;
});
```

Key points:

- Exposes custom instance methods to parent components.
- Less common, but sometimes tested in mid-advanced interviews.

## 10. Custom Hooks

```ts
function useCounter(initial: number) {
  const [count, setCount] = React.useState(initial);
  const increment = () => setCount((prev) => prev + 1);
  return { count, increment };
}

const { count, increment } = useCounter(0);
```

Key points:

- Encapsulate reusable logic.
- Must start with `use` (React enforces this).
- Often asked: “refactor code to a custom hook.”
