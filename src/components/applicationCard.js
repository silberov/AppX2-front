import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function ApplicationCard({ data, onDelete }) {
  console.log("data card", data);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        textAlign: "left",
        borderBottom: "1px solid #000",
      }}
    >
      {data.company.logo && (
        <img
          style={{
            display: "inline-block",
            width: "130px",
            height: "130px",
            background: "gray",
          }}
          src={data.company.logo}
          alt={`${data.company?.name} logo`}
        />
      )}
      <div>
        <Link to={`${data.company.homepage}`}>{data.company.name}</Link>
        <br />
        {data.linkToPosting ? (
          <Link to={`${data.linkToPosting}`}>{data.position}</Link>
        ) : (
          <p>{data.position}</p>
        )}
      </div>
      <div>
        <p>Status: {data.Status?.name}</p>
        {/* <select>{data.Status.name}</select> */}
        <p>{data.UpdatedAt}</p>
      </div>
      <div>
        {data.linkToCV && <Link to={`${data.linkToCV}`}>CV</Link>}
        <br />
        {data.linkToLetter && (
          <Link to={`${data.linkToLetter}`}>Cover Letter</Link>
        )}
      </div>
      <div>
        <textarea>{data.notes}</textarea>
      </div>
      <div>
        <button>edit</button>
        <button onClick={() => onDelete(data.id)}>delete</button>
      </div>
    </div>
  );
}

export default ApplicationCard;
