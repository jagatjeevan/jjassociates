import { useState } from "react";
import "./App.css";
import UploadData from "./UploadData";
import ShowData from "./ShowData";
import PrintAsIs from "./PrintAsIs";

function App() {
  const [rows, setRows] = useState([]);
  const [showRest, setShowRest] = useState(true);

  const showPrintPreview = () => {
    if (showRest) return null;
    // return rows.slice(1).map((row) => <Template rowData={row} />);
    return rows
      .slice(1)
      .map((row) => <PrintAsIs headings={rows[0]} data={row} />);
  };

  return (
    <section id="main">
      {showRest && <UploadData setRows={setRows} />}
      {showRest && rows.length > 0 && <ShowData rows={rows} />}
      <br />
      {showRest && (
        <button onClick={() => setShowRest(false)}>Print Preview</button>
      )}
      {showPrintPreview()}
    </section>
  );
}

export default App;
