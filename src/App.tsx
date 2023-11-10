import { useEffect, useState } from "react";

type Pizza = {
  id: number;
  name: string;
  isGlutenFree: boolean;
  kepURL: string;
};

type Pizzas = Pizza[];

function App() {
  const [pizzas, setPizzas] = useState<Pizzas | null>(null);

  useEffect(() => {
    fetch("https://pizza.kando-dev.eu/Pizza")
      .then((res) => res.json())
      .then((data) => setPizzas(data));
  }, []);

  return (
    <div>
      <h1>Pizzák</h1>
      {pizzas ? (
        <ul>
          {pizzas.map((pizza) => (
            <li key={pizza.id}>
              <h2>{pizza.name}</h2>
              <img src={pizza.kepURL} alt={pizza.name} height="100" />
              <p>{pizza.isGlutenFree ? "Gluténmentes" : "Glutént tartalmaz"}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Betöltés...</p>
      )}
    </div>
  );
}

export default App;
