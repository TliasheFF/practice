import { CSSProperties, useMemo, useState } from "react";
import "./factorial-calculator.css";

const darkTheme: CSSProperties = {
  backgroundColor: "#000",
  color: "#fff",
};

export function FactorialCalculator() {
  const [number, setNumber] = useState<number>(0);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleInputChange = (value: number) => {
    if (!value) {
      return;
    }

    setNumber(value);
  };

  const handleToggleTheme = () => {
    setDarkMode((prevState) => !prevState);
  };

  const calcFactorial = (n: number): number => {
    return n !== 1 && n !== 0 ? n * calcFactorial(n - 1) : 1;
  };

  const memoizedResult = useMemo(() => calcFactorial(number), [number]);

  return (
    <div className="factorial-wrapper" style={darkMode ? darkTheme : undefined}>
      <h3 className="title">Калькулятор факториала</h3>
      <div className="mode">
        <input name="darkMode" type="checkbox" checked={darkMode} onChange={handleToggleTheme} />
        <label htmlFor="darkMode" onClick={handleToggleTheme}>
          Тёмная тема
        </label>
      </div>

      <div className="input-row">
        <label htmlFor="number">Введите число:</label>
        <input
          className="input-field"
          name="number"
          type="number"
          min={0}
          value={number}
          onChange={(e) => handleInputChange(parseInt(e.target.value, 10))}
        />
      </div>

      <div>Результат: {memoizedResult}</div>
    </div>
  );
}
