import "./table.css";

function Template(props) {
  const [
    slNo,
    name,
    designation,
    attnd,
    basic_wages,
    g_wage,
    pf,
    esi,
    paid,
    allows,
    ot_day,
    ot,
    extra,
    net_payment,
  ] = props.rowData;
  console.log(props.rowData);
  return (
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      id="sheet0"
      className="sheet0 gridlines"
    >
      <tbody>
        <tr>
          <td colspan="15">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "bold",
              }}
            >
              <span>Form No. Xl (Rule 26 (2)) </span>
              <span>M/s. J.J. ASSOCIATES</span>
            </div>
          </td>
        </tr>
        <tr className="row1">
          <td colspan="15" align="center">
            <b>
              Wages Slip (<span>MINIMUM WAGES ACT</span>)
            </b>
          </td>
        </tr>
        <tr className="row2">
          <td className="column0 style7 s style9" colspan="7">
            Wages Month Of: <strong>NOV. 2023--- to be changed</strong>
          </td>
          <td className="column7 style10 s style12" colspan="7" align="center">
            TSML, Anantpur, Cuttack
          </td>
          <td className="column14 style13 s">BQP</td>
        </tr>
        <tr className="row3">
          <td className="column0 style14 s style15" colspan="2">
            SL NO
          </td>
          <td className="column2 style16 s style18" colspan="10">
            NAME OF THE EMPLOYEE : <b>{name}</b>
          </td>
          <td className="column12 style19 s style21" colspan="3">
            NAME OF UNIT :
          </td>
        </tr>
        <tr className="row4">
          <td className="column0 style22 f style31" colspan="2" rowspan="2">
            <b>{slNo}</b>
          </td>
          <td className="column2 style24 s style26" colspan="10">
            FATHERS/HUSBAND'S NAME :
          </td>
          <td className="column12 style27 s style29" colspan="3">
            UAN :
          </td>
        </tr>
        <tr className="row5">
          <td className="column2 style16 s style18" colspan="10">
            DESIGNATION : <b>{designation}</b>
          </td>
          <td className="column12 style27 s style29" colspan="3">
            ESI NO:{" "}
          </td>
        </tr>
        <tr className="row6">
          <td className="column0 style32 s style34" colspan="3">
            TOTAL EARNING
          </td>
          <td className="column3 style35 s">Basic Wage</td>
          <td className="column4 style36 s">Attn</td>
          <td className="column5 style35 s">G Wages</td>
          <td className="column6 style36 s">PF</td>
          <td className="column7 style37 s">ESI</td>
          <td className="column8 style36 s">Paid</td>
          <td className="column9 style35 s">Allowance</td>
          <td className="column10 style35 s">OT Days</td>
          <td className="column11 style35 s">OT Amount</td>
          <td className="column12 style35 s">Extra</td>
          <td className="column13 style38 s">Edu</td>
          <td className="column14 style39 s">NET PAYMENT</td>
        </tr>
        <tr className="row7">
          <td className="column0 style32 s style34" colspan="3">
            TOTAL AMOUNT
          </td>
          <td className="column3 style40 n">{basic_wages}</td>
          <td className="column4 style41 n">{attnd}</td>
          <td className="column5 style42 f">{g_wage}</td>
          <td className="column6 style42 f">{pf}</td>
          <td className="column7 style42 f">{esi}</td>
          <td className="column8 style41 n">{paid}</td>
          <td className="column9 style42 f">{allows}</td>
          <td className="column10 style43 n">{ot_day}</td>
          <td className="column11 style42 f">{ot}</td>
          <td className="column12 style41 n">{extra}</td>
          <td className="column13 style0 f">0</td>
          <td className="column14 style44 f">{net_payment}</td>
        </tr>
        <tr className="row8">
          <td className="column0 style45 null"></td>
          <td className="column1 style46 null"></td>
          <td className="column2 style46 null"></td>
          <td className="column8 style48 s style50" colspan="4">
            Employee's
          </td>
          <td className="column12 style48 s style50" colspan="3">
            M/s. J. J. Associates
          </td>
        </tr>
        <tr className="row9">
          <td className="column0 style51 null"></td>
          <td className="column1 style52 null"></td>
          <td className="column2 style52 null"></td>
          <td className="column8 style55 s style57" colspan="4">
            Signature
          </td>
          <td className="column12 style55 s style57" colspan="3">
            Authorize Signatory
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Template;
