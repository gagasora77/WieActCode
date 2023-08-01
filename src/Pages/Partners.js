import PartnerSlot from "../Components/PartnerSlot";
import logo1 from "../Assets/Tunisia Section Logo.png";
import logo2 from "../Assets/WIE Tunisia Section.png";
import logo3 from "../Assets/Tunisian YP Logo.png";
import logo4 from "../Assets/CIS Section Logo.png";
import logo5 from "../Assets/SLLID 4.0 Logo.png";
import logo6 from "../Assets/Just Do It Logo.png";
import logo7 from "../Assets/PSI Logo.png";
function Partners() {
  return (
    <div className="partners">
      <p className="partners-head">Our Partners</p>
      <div className="partners-row1">
        <PartnerSlot
          logo={logo1}
          logoname="partners-logo-section"
        ></PartnerSlot>
        <PartnerSlot logo={logo2} logoname="partners-logo-wie"></PartnerSlot>
        <PartnerSlot logo={logo3} logoname="partners-logo-yp"></PartnerSlot>
      </div>
      <div className="partners-row2">
        <PartnerSlot logo={logo4} logoname="partners-logo-cis"></PartnerSlot>
        <PartnerSlot logo={logo5} logoname="partners-logo-sllid"></PartnerSlot>
        <PartnerSlot logo={logo6} logoname="partners-logo-just"></PartnerSlot>
      </div>
      <p className="partners-head">Our Sponsors</p>
      <div className="partners-row3">
        <PartnerSlot logo={logo7} logoname="partners-logo-psi"></PartnerSlot>
      </div>
      <p className="partners-head">Be a part of WIE ACT</p>
      <div className="collab-text-container-father">
        <div className="collab-text-container">
          <p className="collab-text1">
            The IEEE WIE Annual Congress of Tunisia in its first edition is an
            occasion to honor the achievements of all the successful and leading
            women in the STEM field.
          </p>
          <p className="collab-text2">
            If you want to increase awareness for your company, network with
            other companies from all over the world, acquire new clients or
            partners and work with talented students from all over the country.
            You're in the right place ! If you're interested in being a part of
            this edition of WIE ACT or the next editions, you can contact us
            using our contact infos included in the footer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Partners;
