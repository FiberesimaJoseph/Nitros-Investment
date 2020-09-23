import React from "react";
import { Icon } from "semantic-ui-react";

interface MemberProps {
  name: string;
  specialty: string;
  position: string;
  shortBio: string;
  bg: string;
}
const Member: React.FC<MemberProps> = ({
  name,
  specialty,
  position,
  shortBio,
  bg,
}) => {
  const background = {
    backgroundImage: "url(" + bg + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="member">
      <div className="member-text">
        <div className="member-img" style={background}></div>
        <h2>{name}</h2>
        <span>{specialty}</span>
      </div>
      <div className="member-social">
        <a href="/">
          <Icon name="facebook" />
        </a>
        <a href="/">
          <Icon name="linkedin" />
        </a>
        <a href="/">
          <Icon name="twitter" />
        </a>
      </div>
      <div className="member-info">
        <div className="member-img mf" style={background}></div>
        <div className="member-meta">
          <h2>{name}</h2>
          <span>{position}</span>
        </div>
        <p>{shortBio}</p>
      </div>
    </div>
  );
};

export default Member;
