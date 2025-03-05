interface ButtonProps {
  children?: string;
  onClick?(): void;
}

export const createButton = (className: string) => {
  return (props: ButtonProps) => {
    const { children, onClick } = props;

    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    );
  };
};
