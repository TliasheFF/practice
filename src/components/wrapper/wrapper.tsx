import "./wrapper.css";

interface Wrapper {
  children: JSX.Element;
}

export function Wrapper({ children }: Wrapper) {
  return <div className="wrapper">{children}</div>;
}
