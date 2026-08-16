import "./DateEditorial.css";

function DateEditorial() {
  return (
    <section className="inv5-date" aria-labelledby="inv5-date-title">
      <div className="inv5-content" data-inv5-reveal>
        <p className="inv5-kicker">Save the date</p>
        <div className="inv5-date__composition" id="inv5-date-title">
          <strong>18</strong>
          <div><span>Jul</span><time dateTime="2027-07-18">2027</time></div>
        </div>
      </div>
    </section>
  );
}

export default DateEditorial;
