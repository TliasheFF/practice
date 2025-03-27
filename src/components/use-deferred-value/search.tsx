import { useDeferredValue, useState } from "react";

const items = Array.from({ length: 5_000 }, (_, i) => ({ id: i }));

export function Search() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  return (
    <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 10 }}>
      <input placeholder="Enter text..." value={query} onChange={(e) => setQuery(e.target.value)} />
      <SearchResult query={deferredQuery} />
    </div>
  );
}

function SearchResult({ query }: { query: string }) {
  return (
    <div style={{ maxHeight: 300, overflow: "auto" }}>
      <h3>Result:</h3>
      {items.map((item) => (
        <div key={item.id}>{query}</div>
      ))}
    </div>
  );
}
