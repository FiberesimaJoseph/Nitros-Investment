import React from "react";
import { Container } from "semantic-ui-react";

const Review = () => {
  const testimonies = [
    {
      reviewText:
        '"Bitcoin is exciting because it shows how cheap it can be. Bitcoin is better than currency in that you don’t have to be physically in the same place and, of course, for large transactions, currency can get pretty inconvenient.”',
      authorAvatar: "review/1.jpg",
      authorName: "Katy Abrams",
    },
    {
      reviewText:
        '"Bitcoin is exciting because it shows how cheap it can be. Bitcoin is better than currency in that you don’t have to be physically in the same place and, of course, for large transactions, currency can get pretty inconvenient.”',
      authorAvatar: "review/2.jpg",
      authorName: "Jackson Nash",
    },
    {
      reviewText:
        '"Bitcoin is exciting because it shows how cheap it can be. Bitcoin is better than currency in that you don’t have to be physically in the same place and, of course, for large transactions, currency can get pretty inconvenient.”',
      authorAvatar: "review/3.jpg",
      authorName: "Aoron Ballace",
    },
    {
      reviewText:
        '"Bitcoin is exciting because it shows how cheap it can be. Bitcoin is better than currency in that you don’t have to be physically in the same place and, of course, for large transactions, currency can get pretty inconvenient.”',
      authorAvatar: "review/1.jpg",
      authorName: "Katy Abrams",
    },
    {
      reviewText:
        '"Bitcoin is exciting because it shows how cheap it can be. Bitcoin is better than currency in that you don’t have to be physically in the same place and, of course, for large transactions, currency can get pretty inconvenient.”',
      authorAvatar: "review/2.jpg",
      authorName: "Jackson Nash",
    },
    {
      reviewText:
        '"Bitcoin is exciting because it shows how cheap it can be. Bitcoin is better than currency in that you don’t have to be physically in the same place and, of course, for large transactions, currency can get pretty inconvenient.”',
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
