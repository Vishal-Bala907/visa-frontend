import requiredDocuments from "@/data/visaDocs";
import React from "react";
import "./styles/process.css";

const Documents = () => {
  const DOCS = requiredDocuments[0]; // Example: Tourist Visa

  return (
    <section className="document-container">
      <h2 className="document-title">{DOCS.visaType} - Required Documents</h2>
      <div className="document-cards">
        {DOCS.documents.map((doc, index) => (
          <div key={index} className="document-card">
            <div className="document-card-header">
              <h6>{doc.name}</h6>
            </div>
            <div className="document-card-body">
              <p>{doc.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Documents;
