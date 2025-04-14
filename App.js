import React, { useState } from "react";

function App() {
  const [home, setHome] = useState("");
  const [away, setAway] = useState("");
  const [result, setResult] = useState("");

  const handlePredict = async () => {
    const res = await fetch("https://vachev-backend.onrender.com/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ home, away }),
    });
    const data = await res.json();
    setResult(data.prediction);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Прогнозаторът на Вачев</h1>
      <input placeholder="Домакин" value={home} onChange={(e) => setHome(e.target.value)} />
      <input placeholder="Гост" value={away} onChange={(e) => setAway(e.target.value)} style={{ marginLeft: 10 }} />
      <button onClick={handlePredict} style={{ marginLeft: 10 }}>Прогнозирай</button>
      {result && <p style={{ marginTop: 20 }}>Прогноза: {result}</p>}
    </div>
  );
}

export default App;