const visaSteps = [
  {
    group: "Tourist Visa",
    steps: [
      {
        step: "Select Destination",
        description: "Choose the country you plan to visit.",
      },
      {
        step: "Check Eligibility",
        description: "Ensure you meet the requirements for a tourist visa.",
      },
      {
        step: "Submit Application",
        description:
          "Provide personal details, travel plans, and required documents.",
      },
      {
        step: "Pay Fees",
        description: "Complete the payment for visa processing.",
      },
      {
        step: "Process Application",
        description: "Wait while your application is reviewed and processed.",
      },
      {
        step: "Receive Visa",
        description: "Get the approved visa via email or courier.",
      },
    ],
  },
  {
    group: "Business Visa",
    steps: [
      {
        step: "Select Destination",
        description: "Choose the country for your business travel.",
      },
      {
        step: "Provide Business Information",
        description: "Submit details about the business trip and employer.",
      },
      {
        step: "Submit Application",
        description:
          "Upload business-related documents and personal information.",
      },
      { step: "Pay Fees", description: "Pay the required visa fees." },
      {
        step: "Facilitate Interviews",
        description: "Schedule and prepare for visa interviews, if applicable.",
      },
      {
        step: "Receive Visa",
        description: "Receive your approved business visa.",
      },
    ],
  },
  {
    group: "Student Visa",
    steps: [
      {
        step: "Select Country and Institution",
        description: "Choose your study destination and institution.",
      },
      {
        step: "Document Preparation",
        description:
          "Prepare academic documents, financial proof, and admission letters.",
      },
      {
        step: "Submit Application",
        description:
          "Submit all required details and documents to the authorities.",
      },
      { step: "Pay Fees", description: "Make payments for visa processing." },
      {
        step: "Schedule Interviews",
        description: "Book and prepare for any required visa interviews.",
      },
      {
        step: "Approval and Delivery",
        description: "Receive your visa and start planning your travel.",
      },
    ],
  },
  {
    group: "Work Visa",
    steps: [
      {
        step: "Job Offer Verification",
        description: "Submit proof of a valid job offer from an employer.",
      },
      {
        step: "Document Collection",
        description:
          "Gather documents such as contracts and qualification certificates.",
      },
      {
        step: "Submit Application",
        description: "Submit your visa application with the necessary details.",
      },
      {
        step: "Pay Fees",
        description: "Complete payment for visa processing.",
      },
      {
        step: "Track Status",
        description: "Monitor your visa application’s progress.",
      },
      {
        step: "Visa Issuance",
        description: "Receive your approved work visa.",
      },
    ],
  },
  {
    group: "Transit Visa",
    steps: [
      {
        step: "Identify Layover Requirements",
        description: "Check if a transit visa is required for your itinerary.",
      },
      {
        step: "Collect Travel Details",
        description: "Provide flight tickets and layover information.",
      },
      {
        step: "Submit Application",
        description:
          "Submit your transit visa application with supporting documents.",
      },
      {
        step: "Visa Issuance",
        description: "Receive the approved transit visa.",
      },
    ],
  },
  {
    group: "Family/Dependent Visa",
    steps: [
      {
        step: "Confirm Relationship",
        description:
          "Provide proof of relationship, such as marriage or birth certificates.",
      },
      {
        step: "Document Preparation",
        description:
          "Gather sponsor details, income proof, and residency permits.",
      },
      {
        step: "Submit Application",
        description: "Submit your application with all required documents.",
      },
      {
        step: "Pay Fees",
        description: "Make the payment for visa processing.",
      },
      {
        step: "Process Application",
        description: "Wait for the authorities to review your application.",
      },
      {
        step: "Visa Approval",
        description: "Receive your approved family or dependent visa.",
      },
    ],
  },
  {
    group: "Permanent Residence Visa",
    steps: [
      {
        step: "Eligibility Check",
        description: "Ensure you meet the criteria for permanent residence.",
      },
      {
        step: "Submit Expression of Interest (EOI)",
        description: "Apply to immigration systems to express interest.",
      },
      {
        step: "Invitation to Apply (ITA)",
        description:
          "Complete the application after receiving an invitation to apply.",
      },
      {
        step: "Document Submission",
        description:
          "Submit police clearances, medical reports, and financial proof.",
      },
      {
        step: "Application Processing",
        description:
          "Monitor and respond to updates from immigration authorities.",
      },
      {
        step: "Approval and Residency Grant",
        description: "Receive your residency confirmation and next steps.",
      },
    ],
  },
];
export default visaSteps;
