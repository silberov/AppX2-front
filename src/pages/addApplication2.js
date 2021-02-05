import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import AddNewCompany from "../components/addNewComp";
import SelectCompany from "../components/selectComp";

function CompanyZone({ newCompany }) {
  return <>{newCompany ? <AddNewCompany /> : <SelectCompany />}</>;
}

function AddApplication2({ application }) {
  const [notes, setNotes] = useState("");
  const [cv, setCV] = useState("");
  const [letter, setLetter] = useState("");
  const [statusId, setStatusId] = useState(0);
  const [statusList, setStatusList] = useState([]);
  const [redirect, setRedirect] = useState(false);

  const getList = () => {
    fetch("http://localhost:3000/api/status")
      .then((response) => response.json())
      .then((data) => setStatusList(data));
    setStatusId(statusList[0]);
  };

  const heandleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        statusId: statusId,
        linkToLetter: letter,
        linkToCV: cv,
        notes: notes,
      }),
    };
    fetch(
      `http://localhost:3000/api/application/${application.id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => console.log("data", data));
  };

  useEffect(() => {
    getList();
  }, []);
  // useEffect(() => {
  //   setSelected(copmanyList.find((item) => item.id === Number(selectedId)));
  // }, [selectedId]);
  console.log(application);
  return (
    <>
      {redirect && <Redirect to="/all" />}
      <p>
        Company - <strong>Application</strong>
      </p>
      <form onSubmit={(e) => heandleSubmit(e)}>
        {/* <button onClick={() => heandleTogel(!newCompany)}>Add new</button> */}
        <label>
          status:
          <select
            value={statusId}
            onChange={(e) => setStatusId(Number(e.target.value))}
          >
            {statusList.map((item) => (
              <option value={Number(item.id)}>{item.name}</option>
            ))}
          </select>
        </label>

        <label>
          CV:
          <input
            type="text"
            value={cv}
            onChange={(e) => setCV(e.target.value)}
          />
        </label>
        <br />
        <label>
          Link:
          <input
            type="text"
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
          />
        </label>
        <br />
        <label>
          notes:
          <input
            type="text"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default AddApplication2;
