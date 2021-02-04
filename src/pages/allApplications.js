import { useEffect, useState } from "react";
import ApplicationCard from "../components/applicationCard";

export function AllApplications() {
  const [applications, setApplications] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/application/")
      .then((response) => response.json())
      .then((data) => setApplications(data));
    setTimeout(() => console.log("data", applications), 1500);
  }, []);

  const heandleDelete = (id) => {
    console.log("delete", id);
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    fetch(`http://localhost:3000/api/application/${id}`, requestOptions)
      .then((response) => response.json())
      .then(
        (deleted) => console.log(deleted)
        // setApplications(applications.filter((item) => item.id !== id))
      );
  };

  return (
    <div>
      {applications &&
        applications.map((item) => (
          <ApplicationCard data={item} onDelete={(id) => heandleDelete(id)} />
        ))}
    </div>
  );
}
