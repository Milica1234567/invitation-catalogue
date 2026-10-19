import { invitation9Data as data } from "../invitation9Data";
import BotanicalOrnament from "./BotanicalOrnament";

const downloadCalendar = () => {
  const content = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Royal Botanical Wedding//SR", "BEGIN:VEVENT", "UID:anastasija-aleksandar-20270919@invitation", "DTSTAMP:20261019T120000Z", "DTSTART;TZID=Europe/Belgrade:20270919T130000", "DTEND;TZID=Europe/Belgrade:20270920T000000", "SUMMARY:Venčanje Anastasije i Aleksandra", "LOCATION:Hram Svetog Save i Hotel Moskva, Beograd", "DESCRIPTION:Radujemo se što ćete biti deo našeg posebnog dana.", "END:VEVENT", "END:VCALENDAR"].join("\r\n");
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([content], { type: "text/calendar;charset=utf-8" }));
  link.download = "anastasija-aleksandar.ics";
  link.click();
  URL.revokeObjectURL(link.href);
};

function FinalMessage() {
  return (
    <footer className="i9-final">
      <BotanicalOrnament src={data.assets.finalBranch} className="i9-final__ornament i9-final__ornament--left" />
      <BotanicalOrnament src={data.assets.finalBranch} mirrored className="i9-final__ornament i9-final__ornament--right" />
      <button className="i9-calendar" type="button" onClick={downloadCalendar}>Sačuvajte datum</button>
      <div data-reveal><span>{data.couple.monogram}</span><h2>Jedva čekamo da zajedno stvaramo uspomene.</h2><p>Sa ljubavlju,</p><h3>{data.couple.bride} &amp; {data.couple.groom}</h3><small>19.09.2027.</small></div>
      <div className="i9-gold-rule"><i /></div>
    </footer>
  );
}

export default FinalMessage;
