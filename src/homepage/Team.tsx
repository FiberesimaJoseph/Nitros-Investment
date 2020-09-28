import React from "react";
import { Container } from "semantic-ui-react";
import Member from "./Member";
// import mem from ;

const Team = () => {
  // console.log(mem);
  const members = [
    {
      name: "Tom Binegar",
      specialty: "Business Consultant",
      position: "Business consultant",
      shortBio:
        "Tom Binegar is a business consultant with over 10 years of experience and a P.Hd in business and marketing. He has worked with several industries and firms in business growth and marketing strategies.",
      bg: "member/1.jpg",
    },
    {
      name: "Mellisa Barth",
      specialty: "Costumer care",
      position: "Costumer care",
      shortBio:
        "Mellisa Barth is a professional in  business communications with over 5 years of experience working with customers.",
      bg: "member/2.jpg",
    },
    {
      name: "Scott Billy",
      specialty: "Cyber security",
      position: "Cyber security",
      shortBio:
        "Scott Billy is a professional in the cyber security field with over 10 years of experience in the tech space.",
      bg: "member/3.jpg",
    },
    {
      name: "Jackson Nash",
      specialty: "Product Manager",
      position: "Product Manager",
      shortBio:
        "Jackson Nash has been the strength of our team knowing what the market wants.",
      bg: "member/4.jpg",
    },
    {
      name: "Katy Abrams",
      specialty: "Trade analyst",
      position: "Trade analyst",
      shortBio:
        "Katy Abrams is an expert in understanding the flow of the trade market.",
      bg: "member/5.jpg",
    },
  ];
  return (
    <section className="team-section spad">
      <Container>
        <div
          className="section-title text-center"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Meet Our Team</h2>
          <p>
            Our experts in the field of crypto currency can always help you with
            any of your questions!
          </p>
        </div>
      </Container>
      <Container>
        <div className="team-members clearfix">
          {members.map((member, i) => (
            <Member key={i} {...member} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Team;
