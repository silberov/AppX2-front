import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import AddNewCompany from "../components/addNewComp";
import SelectCompany from "../components/selectComp";

function CompanyZone({ newCompany }) {
  return <>{newCompany ? <AddNewCompany /> : <SelectCompany />}</>;
}

function AddApplication1({ getApp }) {
  console.log(getApp);
  const [companyId, setCompanyId] = useState("");
  const [position, setPosition] = useState("");
  const [posting, setPosting] = useState("");
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
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        companyId: companyId,
        position: position,
        linkToPosting: posting,
        statusId: statusId,
        linkToLetter: "",
        linkToCV: "",
        notes: "",
      }),
    };
    fetch(`http://localhost:3000/api/application/`, requestOptions)
      .then((response) => response.json())
      .then((data) => getApp(data))
      .then(setRedirect(true));
  };

  useEffect(() => {
    getList();
  }, []);
  // useEffect(() => {
  //   setSelected(copmanyList.find((item) => item.id === Number(selectedId)));
  // }, [selectedId]);
  console.log("companyId", companyId);
  return (
    <>
      {redirect && <Redirect to="/add/2" />}
      <p>
        <strong>Company</strong> - Application
      </p>
      <form onSubmit={(e) => heandleSubmit(e)}>
        {/* <button onClick={() => heandleTogel(!newCompany)}>Add new</button> */}
        <SelectCompany onCompany={setCompanyId} />

        <label>
          Position:
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </label>
        <br />
        <label>
          Link:
          <input
            type="text"
            value={posting}
            onChange={(e) => setPosting(e.target.value)}
          />
        </label>
        <br />
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

        <br />
        <input type="submit" value="Next" />
      </form>
    </>
  );
}

export default AddApplication1;
