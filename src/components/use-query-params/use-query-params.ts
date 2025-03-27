export function useQueryParams<T extends Record<string, string>>() {
  const getQueryParam = (key: keyof T): string | null => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key as string) || null;
  };

  const setQueryParam = (params: Partial<T>): void => {
    const urlParams = new URLSearchParams(window.location.search);

    (Object.keys(params) as Array<keyof T>).forEach((key) => {
      urlParams.set(key as string, params[key] as string);
    });

    window.history.pushState(null, "", `?${urlParams.toString()}`);
  };

  return {
    setQueryParam,
    getQueryParam,
  };
}

// проверка хука
// const { setQueryParam, getQueryParam } = useQueryParams<{ filter: string; order: string }>();

// setQueryParam({ filter: "new", order: "3" });

// setQueryParam({ category: "Books" });

// const page = getQueryParam("filter");

// const category = getQueryParam("category");
