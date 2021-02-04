import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SelectCompany(props) {
  const [copmanyList, setCopmanyList] = useState([]);
  const [selectedId, setSelectedId] = useState(0);
  const [selected, setSelected] = useState("");
  const getList = () => {
    fetch("http://localhost:3000/api/company")
      .then((response) => response.json())
      .then((data) => setCopmanyList(data));
    setSelected(copmanyList[0]);
  };

  useEffect(() => {
    getList();
  }, []);
  useEffect(() => {
    setSelected(copmanyList.find((item) => item.id === Number(selectedId)));
    props.onCompany(Number(selectedId));
  }, [selectedId]);
  //console.log(props.onCompany);

  return (
    <div style={{ width: "500px", margin: "auto" }}>
      {selected && (
        <img
          style={{
            height: "100px",
            width: "100px",
          }}
          src={selected.logo}
          alt={selected.name}
        />
      )}
      <div>
        {selected && <Link to={selected.homepage}>{selected.name}</Link>}
        <br />
        <select
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
        >
          {copmanyList.map((item) => (
            <option value={item.id}>{item.name}</option>
          ))}
        </select>
        {/* <button onClick={() => onAddNew(true)}>add new</button> */}
      </div>
    </div>
  );
}
