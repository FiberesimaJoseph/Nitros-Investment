import React from "react";
import { Container } from "semantic-ui-react";

const Review = () => {
  const testimonies = [
    {
      reviewText:
        '"A big thanks to Mellisa Barth  the customer care at nitros investment for  introducing me to this awesome platform where everything is genuine”',
      authorAvatar: "review/1.jpg",
      authorName: "Katy Abrams",
    },
    {
      reviewText:
        '"Am so happy i got in to a safe haands, thanks to nitros investment never believe bitcoin was true.”',
      authorAvatar: "review/2.jpg",
      authorName: "Jackson Nash",
    },
    {
      reviewText:
        '"Happy Happy Happy that my business has doubled is profit with the help of nitros investment, thanks to nitros investment and keep the good work”',
      authorAvatar: "review/3.jpg",
      authorName: "Aoron Ballace",
    },
  ];
  return (
    <section className="spad">
      <Container>
        <div>
          <h2 style={{ padding: "30px", textAlign: "center" }}>
            Client Testimonies
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-between",
          }}
        >
          {testimonies.map((t, i) => (
            <div
              className="review-text"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "25rem",
              }}
              key={i}
            >
              <img
                src={t.authorAvatar}
                alt=""
                className="author-avatar"
                style={{ alignSelf: "center" }}
              />
              <p>
                <img src="quote.png" alt="" className="quote mb-5" />{" "}
                {t.reviewText}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Review;
