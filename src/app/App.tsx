import { FactorialCalculator } from "../components/factorial-calculator";
import { ParentComp } from "../components/parent-component";
import { Wrapper } from "../components/wrapper/wrapper";
import { ButtonsFactory } from "../components/buttons-factory";
import { UserAccountWithIncrement } from "../components/user-account";
import { FilterableList } from "../components/filterable-list/filterable-list";
import "./app.css";

export function App() {
  return (
    <div className="widgets">
      <Wrapper>
        <ButtonsFactory />
      </Wrapper>

      <Wrapper>
        <UserAccountWithIncrement />
      </Wrapper>

      <FactorialCalculator />

      <Wrapper>
        <ParentComp />
      </Wrapper>

      <Wrapper>
        <FilterableList />
      </Wrapper>
    </div>
  );
}
