import { useState } from "react";
import { GoogleMapComponent } from "./components/GoogleMapComponent/GoogleMapComponent";
import { MainFooter } from "./components/MainFooter/MainFooter";
import { PATHS } from "./data/paths";

function App() {
  const [selectedPathId, setSelectedPathId] = useState<string | null>(null);
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <h1 style={{ margin: 0, textAlign: "center" }}>Raf</h1>

      <GoogleMapComponent />
      <MainFooter
        paths={PATHS}
        onPathSelect={setSelectedPathId}
        selectedPathId={selectedPathId}
      />
    </div>
  );
}

export default App;
