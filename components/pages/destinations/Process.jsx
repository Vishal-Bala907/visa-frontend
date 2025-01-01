"use client";
import visaSteps from "@/data/visaProcess";
import React, { useState, useEffect } from "react";
import "../../../public/css/global.css";

const Process = () => {
  const PROCESS = visaSteps[0];
  const [stepIndex, setStepIndex] = useState(0);
  const [resetAnimation, setResetAnimation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (stepIndex < PROCESS.steps.length - 1) {
        setStepIndex((prevStepIndex) => prevStepIndex + 1);
      } else {
        // Restart animation after all steps complete
        setStepIndex(0);
        setResetAnimation((prev) => !prev); // Toggle animation reset
      }
    }, 2000); // Faster interval (every 4 seconds)

    return () => clearInterval(interval);
  }, [stepIndex, PROCESS.steps.length]);

  return (
    <section className="process-container bg-img">
      <div className="process-area">
        <div className="process-header">
          <h3 className="group-title">{PROCESS.group}</h3>
        </div>
        <div className="process-progress">
          <div
            className={`progress-bar ${resetAnimation ? "reset" : ""}`}
            style={{ animation: `fillAndReset 3s ease forwards` }}
          ></div>
        </div>
        <ul className="process-steps">
          {PROCESS.steps.map((step, ind) => (
            <li
              className={`process-step ${ind <= stepIndex ? "active" : ""}`}
              key={ind}
            >
              <div className="step-header">
                <span className="step-number">{ind + 1}</span>
                <h6>{step.step}</h6>
              </div>
              <p>{step.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Process;
