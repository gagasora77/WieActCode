import { ReactComponent as Slot } from "../Assets/SVG/Slot.svg";
function PartnerSlot(props) {
  const { logo, logoname } = props;
  return (
    <div className="partners-column">
      <Slot className="partners-slot"></Slot>
      <img src={logo} className={logoname} />
    </div>
  );
}

export default PartnerSlot;
