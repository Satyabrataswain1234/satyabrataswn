import React from "react";
import DataTable from "./assets/components/DataTable";

function App() {
  const data = [
    { id: 1, name: "Satya", age: 28 },
    { id: 2, name: "Sunil", age: 32 },
    { id: 3, name: "Rinku", age: 25 },
    { id: 4, name: "Pabitra", age: 29 },
    { id: 5, name: "Anurag", age: 35 },
    { id: 6, name: "Saikat", age: 20 }
  ];

  return (
    <div className="App">
      <h1>Data Table</h1>
      <DataTable data={data} />
      
    </div>
  );
}

export default App;
