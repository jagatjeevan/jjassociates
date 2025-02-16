import "./table.css";

function PrintAsIs(props) {
  const { headings, data } = props;
  const [SlNo, name, designation] = data;
  const restHeading = headings.slice(3);
  const restData = data.slice(3);

  //   console.log(headings, data);
  const monthYr = "January, 2025";

  const getHeading = () => {
    return (
      <table>
        <tr>
          <td rowSpan={3}>Sl No: {SlNo}</td>
          <td>Name of the Employee: {name}</td>
          <td>Name of the Unit</td>
        </tr>
        <tr>
          <td>FATHERS/HUSBAND'S NAME :</td>
          <td>UAN :</td>
        </tr>
        <tr>
          <td>Designation: {designation}</td>
          <td>ESI NO:</td>
        </tr>
      </table>
    );
  };

  const getHeaderOfSlip = () => {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "bold",
          }}
        >
          <span>Form No. Xl (Rule 26 (2))</span>
          <span>M/s. J.J. ASSOCIATES</span>
        </div>
        <div
          style={{
            textAlign: "center",
            fontWeight: "bold",
            background: "#efefef",
            padding: "5px",
          }}
        >
          Wages Slip (MINIMUM WAGES ACT)
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>
            Wage for the month: <b>{monthYr}</b>
          </span>
          <span>TSML, Anantapur, Cuttack</span>
        </div>
      </>
    );
  };

  const getRestOfHeading = () => {
    return restHeading.map((heading) => {
      return <th style={{ fontSize: "0.85em" }}>{heading}</th>;
    });
  };

  const showData = () => {
    return restData.map((data) => {
      return <td align="center">{data}</td>;
    });
  };

  const getFooter = () => {
    return (
      <table>
        <tr>
          <td width={"50%"} style={{ height: "40px" }}>
            Employee's Signature:{" "}
          </td>
          <td>M/s. J. J. Associates Authorized Signatory: </td>
        </tr>
      </table>
    );
  };

  return (
    <>
      <section className="slip-container">
        {getHeaderOfSlip()}
        {getHeading()}
        <table>
          <tr>{getRestOfHeading()}</tr>
          <tr>{showData()}</tr>
        </table>
        {getFooter()}
      </section>
      <hr className="horizontal" />
    </>
  );
}

export default PrintAsIs;
