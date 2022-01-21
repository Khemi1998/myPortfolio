import "./Contact.scss";

const Contact = () => {
  return (
    <div id ="contact" className="contact">
      <h2>Contact</h2>
      <div className="contact__grid">

        <a className="contact__grid--link" href="mailto:khemi@live.com">
          <i className="contact__grid--icon far fa-envelope"></i>
          <span className="contact__grid--span"> email</span>
        </a>

        <a className="contact__grid--link" href="https://www.linkedin.com/in/khemi-ramyead-301952173">
          <i className="contact__grid--icon fab fa-linkedin-in"></i>
          <span className="contact__grid--span"> LinkedIn</span>
        </a>

        <a className="contact__grid--link" href="https://github.com/Khemi1998">
          <i className="contact__grid--icon fab fa-github"></i>
          <span> Github</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
