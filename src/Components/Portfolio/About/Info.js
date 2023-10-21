import profile_pic from "../../../assets/images/profile.jpg";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
const Info = () => {
  return (
    <div className="info-card">
      <div className="profile-img">
        <img className="profile-pic" src={profile_pic} alt="Adnan Adrian"/>
      </div>
      <div className="about-me">
        <h1>Adnan Adrian</h1>
        <br />
        <p className="profile-description">
        Welcome to my portfolio, a showcase of my professional journey and accomplishments in the field of Computer Science. With a passion for front-end Coding, Thank you for taking the time to explore my portfolio. I invite you to delve into my work and discover how we can collaborate to achieve mutual success and make a positive impact.


        </p>
        <br />
        <div className="social-icons">
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/adnan-adrian-593/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="social-icon"
            href="https://github.com/UrBoii1"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="social-icon"
            href="https://instagram.com/adnanadriann"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
