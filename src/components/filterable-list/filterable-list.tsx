import { ChangeEvent, useState, useTransition } from "react";

interface BigListProps {
  items: Item[];
}

interface Item {
  id: number;
  text: string;
}

function BigList(props: BigListProps) {
  return (
    <div style={{ paddingLeft: 15, height: 300, overflow: "auto" }}>
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

const items = Array.from({ length: 20_000 }, (_, i) => ({
  id: i,
  text: `Item ${i}`,
}));

export function FilterableList() {
  const [filteredItems, setFilteredItems] = useState<Item[]>(items);
  const [isPending, startTransition] = useTransition();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    startTransition(() => {
      const filtered = items.filter((item) =>
        item.text.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(filtered);
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <input placeholder="Search..." onChange={handleInputChange} />
      {isPending ? <div>Loading...</div> : <BigList items={filteredItems} />}
    </div>
  );
}
