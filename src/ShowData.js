function ShowData(props) {
  const showRows = (rowData) => {
    return rowData.map((columnData, index) => {
      return <td key={`tbody-${index}-${columnData}`}>{columnData}</td>;
    });
  };

  const showHeader = () => {
    return props.rows[0].map((row) => {
      return <th key={row}>{row}</th>;
    });
  };

  return (
    <>
      <h2>Show data</h2>
      <table>
        <thead>
          <tr>{showHeader()}</tr>
        </thead>
        <tbody>
          {props.rows.slice(1).map((row, index) => (
            <tr key={`tr-${index}`}>{showRows(row)}</tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ShowData;
