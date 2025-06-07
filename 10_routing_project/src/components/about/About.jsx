import "./About.css";
import me from "../../img/about.png";
function About() {
  const nameStyle = {
    color: "#ffd586",
  };
  return (
    <section className="about-section">
      <div className="img-sec">
        <img src={me} />
      </div>
      <div className="txt-sec">
        <p>
          Hi, I'm <b style={nameStyle}>Husain Ranapurwala</b>, a passionate
          Web Developer with a love for building impactful digital experiences.
        </p>
        <br />
        <p>
          I specialize in React and enjoy turning ideas into reality through
          creative and efficient solutions.
        </p>
        <br />
        <p>Apart from coding, I enjoy cricket.</p>
        <p>
          I'm currently open to new opportunities where I can contribute and
          grow.
        </p>
      </div>
    </section>
  );
}

export default About;
