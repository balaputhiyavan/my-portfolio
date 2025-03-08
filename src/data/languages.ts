interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "Tamil",
        level: "Native",
        description: "I speak fluently and write fluently",
        show: true
    },
    {
        name: "English",
        level: "Proficient / Intermediate",
        description: "Proficient (can communicate effectively but not fully fluent)",
        show: true
    },
    {
        name: "Hindi",
        level: "Learning in free time",
        description: "Learning in free time",
        show: true
    },
    // {
    //     name: "Italian",
    //     level: "B2",
    //     description: "I speak fluently and write fluently",
    //     show: false
    // }
];

export default languages;