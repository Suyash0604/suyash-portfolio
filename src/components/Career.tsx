import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Intern</h4>
                <h5>Markytics</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed and maintained responsive and user-friendly web interfaces using React.js,
              ensuring cross-browser compatibility and mobile responsiveness.
              Integrated REST APIs to facilitate seamless communication between frontend components
              and backend services.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Engineering</h4>
                <h5>Vishwakarma Institute Of Technology (VIT), Pune</h5>
              </div>
              <h3>2022-26</h3>
            </div>
            <p>
              Currently pursuing B.Tech with a CGPA of 8.5. Focusing on Data Structures, OOP, 
              DBMS, and Operating Systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>HSC - Science</h4>
                <h5>Manere High School and College of Science</h5>
              </div>
              <h3>2020-22</h3>
            </div>
            <p>
              Completed Higher Secondary Certificate with 85.33%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
