import { FactorialCalculator } from "../components/factorial-calculator";
import { ParentComp } from "../components/parent-component";
import { Wrapper } from "../components/wrapper/wrapper";
import { ButtonsFactory } from "../components/buttons-factory";
import { UserAccountWithIncrement } from "../components/user-account";
import { FilterableList } from "../components/filterable-list/filterable-list";
import { Counter, TextInput } from "../components/generic-state";
import { QueryParams } from "../components/use-query-params";
import { Search } from "../components/use-deferred-value";
import "./app.css";

export function App() {
  return (
    // <div className="widgets">
    //    <Wrapper>
    //     <QueryParams />
    //   </Wrapper>

    //   <Wrapper>
    //     <ButtonsFactory />
    //   </Wrapper>

    //   <Wrapper>
    //     <UserAccountWithIncrement />
    //   </Wrapper>

    //   <FactorialCalculator />

    //   <Wrapper>
    //     <ParentComp />
    //   </Wrapper>

    //   <Wrapper>
    //     <FilterableList />
    //   </Wrapper>

    //   <Wrapper>
    //     <>
    //       <Counter />
    //       <TextInput />
    //     </>
    //   </Wrapper>
    // </div>
    <Search />
  );
}
