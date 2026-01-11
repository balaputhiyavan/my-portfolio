interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "Swift & SwiftUI",
    description: "Expert in building modern, responsive iOS UIs using declarative syntax and state management (Combine/Observation).",
    icon: "simple-icons:swift"
  },
  {
    name: "Flutter & Dart",
    description: "Developing cross-platform apps with a single codebase, leveraging Riverpod for state management and local storage.",
    icon: "simple-icons:flutter"
  },
  {
    name: "Clean Architecture",
    description: "Implementing scalable MVVM architecture with Dependency Injection and Protocol Oriented Programming.",
    icon: "layers-2"
  },
  {
    name: "Firebase & Backend",
    description: "Integrating Firestore, Auth, and Cloud Functions for robust serverless backend solutions.",
    icon: "simple-icons:firebase"
  },
  {
    name: "Google Play, Git & Azure",
    description: "Managing app releases via Google Play Console (Closed Testing) & Git version control utilizing Azure DevOps.",
    icon: "simple-icons:azuredevops"
  },
  {
    name: "API Integration",
    description: "Connecting mobile apps with complex RESTful APIs and GraphQL services using URLSession/Dio.",
    icon: "globe"
  },

  {
    name: "Collaborative Tools",
    description: "Working effectively within Agile teams using Figma for design handoffs and Postman for API testing.",
    icon: "users"
  }
];

export default hardSkills;