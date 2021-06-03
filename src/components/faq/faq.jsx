import "./faq.scss";
import Li from "./li/li";

const Faq = (props) => {
  return (
    <section className="faq">
      <div className="faq__container">
        <div className="faq__content">
          <h3 className="faq__content-h3">Customer Help</h3>
          <h2 className="faq__content-h2">Frequently asked questions</h2>
          <ul className="faq__content-list">
            <Li
              key={1}
              title={"Reque insolens in vel"}
              text={
                "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam.Eu usu vidit tractatos, vero tractatos ius an, in mel diceretpersecuti."
              }
              button={"Go to documentation"}
            />
            <Li
              key={2}
              title={"Vis rebum error graecis ea, id sit postea accusamus?"}
              text={
                "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam.Eu usu vidit tractatos, vero tractatos ius an, in mel diceretpersecuti."
              }
              button={"Go to documentation"}
            />
            <Li
              key={3}
              title={"Lorem repudiandae ne nec?"}
              text={
                "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam.Eu usu vidit tractatos, vero tractatos ius an, in mel diceretpersecuti."
              }
              button={"Go to documentation"}
            />
            <Li
              key={4}
              title={"Ad dicit numquam vel. Et eos iudico feugait percipitur?"}
              text={
                "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam.Eu usu vidit tractatos, vero tractatos ius an, in mel diceretpersecuti."
              }
              button={"Go to documentation"}
            />
            <Li
              key={5}
              title={"Sea no dico percipitur. Fierent constituam definitiones id eum?"}
              text={
                "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam.Eu usu vidit tractatos, vero tractatos ius an, in mel diceretpersecuti.Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam.Eu usu vidit tractatos, vero tractatos ius an, in mel diceretpersecuti.Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam.Eu usu vidit tractatos, vero tractatos ius an, in mel diceretpersecuti."
              }
              button={"Go to documentation"}
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;
