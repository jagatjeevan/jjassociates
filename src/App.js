import { useEffect, useState } from "react";
import "./App.css";
import UploadData from "./UploadData";
import ShowData from "./ShowData";
import PrintAsIs from "./PrintAsIs";

function App() {
  const [rows, setRows] = useState([]);
  const [showRest, setShowRest] = useState(true);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const setTotl = rows.length % 3 > 0 ? rows.length / 3 + 1 : rows.length / 3;
    setTotalPages(setTotl);
  }, [rows]);

  const showPrintPreview = () => {
    if (showRest) return null;
    const dataBody = rows.slice(1);
    return dataBody
      .slice(page * 3, page * 3 + 3)
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
      <div className="pagination">
        <button onClick={() => (page > 0 ? setPage(page - 1) : null)}>
          Previous Page
        </button>
        <button onClick={() => (page < totalPages ? setPage(page + 1) : null)}>
          Next Page
        </button>
        <b>
          Total page : {page} / {totalPages}
        </b>
      </div>
    </section>
  );
}

export default App;
