import { useState } from "react";
import { createButton } from "../buttons-factory";
import { useQueryParams } from "./use-query-params";

export function QueryParams() {
  const { getQueryParam, setQueryParam } = useQueryParams<{ page: string; category: string }>();

  const [params, setParams] = useState({
    page: getQueryParam("page"),
    category: getQueryParam("category"),
  });

  const Button = createButton("primary-btn");

  return (
    <div>
      <p>Page: {params.page}</p>
      <p>Category: {params.category}</p>
      <Button
        onClick={() => {
          setQueryParam({ page: "1", category: "Books" });
          setParams({
            page: getQueryParam("page"),
            category: getQueryParam("category"),
          });
        }}
      >
        Set query params
      </Button>
    </div>
  );
}
