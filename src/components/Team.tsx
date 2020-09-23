import React from "react";
import { Container } from "semantic-ui-react";
import Member from "./Member";

const Team = () => {
  const members = [
    {
      name: "Tom Binegar",
      specialty: "Business Development",
      position: "Marketing Director",
      shortBio:
        "Jackson Nash is a full-time faculty member of the Marketing and Behavioural Science Division at the Sauder School of Business at UBC. He leads the Entrepreneurship Group, in the undergraduate and graduate programs, teaching actively in both of these.",
      bg: "member/1.jpg",
    },
    {
      name: "Jackson Nash",
      specialty: "Business Development",
      position: "Marketing Director",
      shortBio:
        "Jackson Nash is a full-time faculty member of the Marketing and Behavioural Science Division at the Sauder School of Business at UBC. He leads the Entrepreneurship Group, in the undergraduate and graduate programs, teaching actively in both of these.",
      bg: "member/2.jpg",
    },
    {
      name: "Tom Binegar",
      specialty: "Business Development",
      position: "Ceo Bitcoin",
      shortBio:
        "Jackson Nash is a full-time faculty member of the Marketing and Behavioural Science Division at the Sauder School of Business at UBC. He leads the Entrepreneurship Group, in the undergraduate and graduate programs, teaching actively in both of these.",
      bg: "member/3.jpg",
    },
    {
      name: "Mellisa Barth",
      specialty: "Product Manager",
      position: "Product Manager",
      shortBio:
        "Jackson Nash is a full-time faculty member of the Marketing and Behavioural Science Division at the Sauder School of Business at UBC. He leads the Entrepreneurship Group, in the undergraduate and graduate programs, teaching actively in both of these.",
      bg: "member/4.jpg",
    },
    {
      name: "Katy Abrams",
      specialty: "Head of Design",
      position: "Head of Design",
      shortBio:
        "Jackson Nash is a full-time faculty member of the Marketing and Behavioural Science Division at the Sauder School of Business at UBC. He leads the Entrepreneurship Group, in the undergraduate and graduate programs, teaching actively in both of these.",
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
            <Member {...member} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Team;
