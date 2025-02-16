import readXlsxFile from "read-excel-file";

function UploadData(props) {
  const updateTeamsize = (data) => {
    const input = document.getElementById("upload");
    readXlsxFile(input.files[0]).then((rows) => {
      props.setRows(rows);
    });
  };

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <form encType="multipart/form-data" action="#" onSubmit={submit}>
      <h2>Upload an excel</h2>
      <input id="upload" type="file" name="files[]" />
      <input type="submit" onClick={updateTeamsize} value="Get Data" />
    </form>
  );
}

export default UploadData;
