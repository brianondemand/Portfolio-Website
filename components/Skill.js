import { useEffect, useState } from "react";

export default function Skills() {
  const [extraClasses, setExtraClasses] = useState("");
  return (
    <section id="skills">
      <div className="center">
        <h2>Skills</h2>
        <div className={extraClasses + "skills-container"}>
          <div className="skill-box">
            <img src="/img/ceh.png" alt="" />
            <span>CEH</span>
          </div>
          <div className="skill-box">
            <img src="/img/linux.png" alt="" />
            <span>Linux Admin</span>
          </div>
          <div className="skill-box">
            <img src="/img/database.png" alt="" />
            <span>Database Admin</span>
          </div>
          <div className="skill-box">
            <img src="/img/python.png" alt="" />
            <span>Python</span>
          </div>
          <div className="skill-box">
            <img src="/img/php.png" alt="" />
            <span>PHP</span>
          </div>
          <div className="skill-box">
            <img src="/img/js.png" alt="" />
            <span>Javascript</span>
          </div>
          <div className="skill-box">
            <img src="/img/react.png" alt="" />
            <span>React</span>
          </div>
          <div className="skill-box">
            <img src="/img/tailwind.png" alt="" />
            <span>Tailwind CSS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
