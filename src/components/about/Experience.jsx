import React from "react";

const experienceContent = [
  {
    year: "   07/2021 - 06/2023",
    position: "Mern Stack Developer",
    compnayName: "Freelance Bahawalpur",
    details: `I'm working their on service based criteria as i work on the maintenance of their client's sites or adopting new technology. I also changes the client's sites from different programming language to JavaScript Tech Stack like next js , react and node`,
  },
  {
    year: "02/2020 - 05/2021",
    position: " TechInnovaters",
    compnayName: "Freelance Bahawalpur",
    details: `I'm working their on product based criteria as i do maintenance of their client's sites or introduce new technology criteria in their sites.`,
  },
  
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
