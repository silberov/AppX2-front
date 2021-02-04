import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const applicationData = {
  id: 1,
  userId: 1,
  companyId: 1,
  statusId: null,
  position: "frgdfxgf",
  linkToPosting: "srxgtrsdgfx",
  linkToCV: "srgfrg",
  linkToLetter: "srgtdrg",
  notes: "srdgfdrx",
  CreatedAt: "2021-02-03T22:00:32.507Z",
  UpdatedAt: "2021-02-03T22:00:32.507Z",
  company: {
    name: "wix",
    homepage: "www.wix-home.com",
    logo: null,
  },
};

function Application({ applicationData }) {
  return (
    <>
      <div>
        <img
          src={applicationData.company.logo}
          alt={`${applicationData.company.name}`}
        />
        <Link to={`${applicationData.company.homepage}`}>
          {applicationData.company.name}
        </Link>
        <Link to={`${applicationData.linkToPosting}`}>
          {applicationData.company.position}
        </Link>
      </div>
      <div>{/* <select>{applicationData.</select> */}</div>
    </>
  );
}

export default Application;
