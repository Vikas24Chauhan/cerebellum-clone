import React, { useState } from "react";
import "./FAQ.css";
import { faqData } from "../../assets/data/gaqData";

function FAQ() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setActiveFAQ((prev) => (prev === id ? null : id));
  };

  return (
    <div className="faq-container">
      <h1>FREQUENTLY ASKED QUESTIONS</h1>
      {faqData.map((data) => (
        <div key={data.id} className="faq-card">
          <div className="faq-questions" onClick={() => toggleFAQ(data.id)}>
            <h2>{data.title}</h2>
          </div>

          {activeFAQ === data.id ? (
            <div className="faq-answers">
              <h3>{data.ques1}</h3>
              <p>{data.ans1}</p>
            </div>
          ) : (
            <div className="faq-answers" />
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQ;
