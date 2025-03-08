interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "iOS Development",
    description: "Building high-performance iOS applications using Swift, SwiftUI, Xcode, and Combine for seamless data handling and backend integration.",
    icon: "/swift.png"
  },
  {
    name: "Cross-Platform Development", 
    description: "Exploring Flutter and Dart in my free time to build scalable cross-platform apps.",
    icon: "/flutter.png"
  },
  {
    name: "Firebase",
    description: "Backend integration, authentication, and real-time database solutions using Firebase.",
    icon: "/firebase.png"
  },
  {
    name: "Git",
    description: "Managing version control, efficient branching strategies, and collaboration using Git & GitHub.",
    icon: "/git.png"
  }
];

export default hardSkills;