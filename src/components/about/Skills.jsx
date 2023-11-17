import React from "react";

const skillsContent = [
  { skillClass: "p90", skillPercent: "90", skillName: "React JS" },
  { skillClass: "p95", skillPercent: "95", skillName: "Next JS" },
  { skillClass: "p80", skillPercent: "80", skillName: "Node JS" },
  { skillClass: "p70", skillPercent: "70", skillName: "Mongo DB" },
  { skillClass: "p99", skillPercent: "99", skillName: "JavaScript" },
  { skillClass: "p99", skillPercent: "99", skillName: "HTML" },
  { skillClass: "p97", skillPercent: "97", skillName: "CSS" },
  { skillClass: "p85", skillPercent: "85", skillName: "PHP" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
