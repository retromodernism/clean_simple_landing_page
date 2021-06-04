import "./newsLetter.scss";

const NewsLetter = () => {
  return (
    <section className="newsLetter">
      <div className="newsLetter__container">
        <div className="newsLetter__container-info">
          <h1 className="newsLetter__container-info-h1">
            Sign up for newsletter
          </h1>
          <p className="newsLetter__container-info-p">
            Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu, homero
            alterum.
          </p>
        </div>
        <form className="newsLetter__container-form">
          <input type="email" className="newsLetter__container-form-input-email" placeholder="Email address" />
          <input type="submit" className="newsLetter__container-form-input-submit" value="Save me" />
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
