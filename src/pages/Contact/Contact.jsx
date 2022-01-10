import "./Contact.scss";

const Contact = () => {
  return (
    <div id ="contact" className="contact">
      <h2>Contact</h2>
      <div class="contact__grid">

        <a class="contact__grid--link" href="mailto:khemi@live.com">
          <i class="contact__grid--icon far fa-envelope"></i>
          <span class="contact__grid--span"> email</span>
        </a>

        <a class="contact__grid--link" href="https://www.linkedin.com/in/khemi-ramyead-301952173">
          <i class="contact__grid--icon fab fa-linkedin-in"></i>
          <span class="contact__grid--span"> LinkedIn</span>
        </a>

        <a class="contact__grid--link" href="https://github.com/Khemi1998">
          <i class="contact__grid--icon fab fa-github"></i>
          <span> Github</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
