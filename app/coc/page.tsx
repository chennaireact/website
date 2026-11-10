import { pageMetadata } from "@/lib/seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ConductGallery from "@/components/ConductGallery";
import "./coc.css";

export const metadata = pageMetadata("Code of Conduct", "Read the Chennai React Code of Conduct and learn how we make our meetups and online community welcoming for everyone.", "/coc");

export default function CodeOfConductPage() {
  return <main id="top" className="coc-page">
    <SiteHeader />
    <section className="coc-content wrap">
      <div className="coc-layout">
        <div className="coc-copy">
          <div className="coc-intro"><p>CHENNAI REACT COMMUNITY</p><h1>Code of conduct.</h1><span>Let’s make this a place where everyone feels welcome to learn, share, and belong.</span></div>
          <div className="coc-body">
            <section><h2>Message from the organisers</h2><p>We invite you to join events organized by Chennai React Community, our Discord servers, and other community gatherings in a spirit of curiosity, friendliness, open-mindedness, and respect.</p><p>Chennai React is a community for collaboration and for building free and open React events and conferences. To maintain the quality of these conversations, there are rules that all of us are expected to follow.</p><p>All attendees, speakers, sponsors, and volunteers at our events are required to agree to this code of conduct. We expect everyone’s cooperation in creating a safe environment.</p></section>
            <section><h2>The short version</h2><p>Chennai React is dedicated to providing a harassment-free experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), or technology choices.</p><p>We do not tolerate harassment of participants, volunteers, sponsors, or anyone else associated with the community in any form. Sexual language and imagery are not appropriate for our events, including talks, webinars, and other online media.</p><p>Participants who violate these rules may be sanctioned or expelled. If you feel uncomfortable or harassed at an event or in a community communication channel, please report it using the procedure below.</p></section>
            <section><h2>The not so short version</h2><p>Harassment includes, but is not limited to, offensive verbal or non-verbal comments related to gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion, or technology choices; sexual images in public spaces; deliberate intimidation; stalking; following; harassing photography or recording; sustained disruption of an event; inappropriate physical contact; and unwelcome sexual attention.</p><p>Participants asked to stop any such behaviour are expected to comply immediately.</p><p>If a participant engages in harassing behaviour, the Chennai React team may take appropriate action, including a warning or expulsion from the event.</p><p>This code of conduct and its anti-harassment policies apply to everyone participating, including sponsors, judges, mentors, volunteers, organisers, and Chennai React team members, both online and offline.</p></section>
            <section><h2>Reporting violations</h2><p>If you are being harassed, notice that someone else is being harassed, or encounter a violation of this code, please contact a volunteer or organiser immediately. You can also email <a href="mailto:chennaireactjs@gmail.com">chennaireactjs@gmail.com</a> with reports or questions.</p><p><strong>All reporters will remain anonymous.</strong></p><h3>Special incidents</h3><p>If you are uncomfortable reporting directly to a volunteer or core team member, you can contact the Code of Conduct team:</p><div className="coc-contacts"><div><strong>Dhanush Kandhan</strong><a href="mailto:dhanushkandhan75@gmail.com">dhanushkandhan75@gmail.com</a></div><div><strong>Shanthi Palani</strong><a href="mailto:Shanthipalani93@gmail.com">Shanthipalani93@gmail.com</a></div></div></section>
            <section><h2>Credit</h2><p>Portions of this Code of Conduct are based on the example code of conduct from <a href="https://mlh.io/" target="_blank" rel="noreferrer">Major League Hacking’s policies</a>, shared under a <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">Creative Commons Attribution-ShareAlike 4.0 International license</a>, and the code of conduct of <a href="https://fossunited.org/" target="_blank" rel="noreferrer">FOSS United</a>.</p></section>
          </div>
        </div>
        <aside className="coc-gallery-aside"><ConductGallery /></aside>
      </div>
    </section>
    <SiteFooter />
  </main>;
}
