/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience:WorkExperience[] = [
    {
        title: "iOS Developer",
        startDate: "2022-12-01",
        company: "Zettastack Systems India (P) Limited.",
        location: "Coimbatore",
        description: "Developed and maintained iOS applications using Swift, SwiftUI, and Xcode, ensuring seamless performance and user experience.",
        goals: [
            "Developing and maintaining iOS applications using Swift, SwiftUI, and Combine.",
            "Creating dynamic form templates that allow businesses to collect customized data from stores/customers.",
            "Integrated Apple Maps API for location-based functionalities.",
            "Refactored and optimized legacy Swift projects, reducing crash rates by 30%.",
            "Improved UI responsiveness by 20% through performance optimizations.",
            "Conducted code reviews and collaborated with backend teams for seamless API integration.",
            "Developed reusable code modules, resulting in reduced development time for future projects.",
            "Reduced app crashes by optimizing code and conducting rigorous debugging sessions.",
            "Enhanced user experience by designing and implementing intuitive user interfaces for iOS applications.",
            "Built custom UI components to provide visually appealing and interactive experiences for users.",
            "Ensured timely delivery of projects by managing priorities, setting milestones, and meeting deadlines."
        ],
        currentJob: true,
    },
    // {
    //     title: "Software Engineer",
    //     startDate: "2018-03-10",
    //     endDate: "2020-03-10",
    //     company: "Company Name",
    //     location: "United States",
    //     description: "Developed and maintained web applications using React, NodeJs, and MongoDB.",
    //     goals: [
    //         "Developed and maintained web applications using React, NodeJs, and MongoDB.",
    //         "Worked with the team to develop and maintain web applications using React, NodeJs, and MongoDB.",
    //         "Created and maintained web applications using React, NodeJs, and MongoDB.",
    //     ],
    //     currentJob: false,
    // },
];
export default workExperience;