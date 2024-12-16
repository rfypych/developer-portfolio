import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Simple To-Do List App',
        description: "I developed a basic to-do list application to manage daily tasks. I built the app using HTML, CSS, and JavaScript. It allows users to add, delete, and mark tasks as completed. The app also uses Local Storage to save tasks between sessions.",
        tools: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
        role: 'Front-End Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Personal Website',
        description: 'I created a personal website using HTML, CSS, and JavaScript. The blog supports multiple pages and allows visitors to leave comments on posts. I learned the basics of responsive design and implemented a mobile-friendly layout.',
        tools: ['HTML', 'CSS', 'JavaScript','NextJS'],
        role: 'Front-End Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Weather App',
        description: 'I built a weather application that fetches data from a public API and displays the current weather for a given city. I used HTML, CSS, and JavaScript to create the user interface and handle API requests.',
        tools: ['HTML', 'CSS', 'JavaScript', 'API'],
        code: '',
        role: 'Front-End Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Simple Calculator',
        description: "I developed a basic calculator application using HTML, CSS, and JavaScript. The app supports basic arithmetic operations like addition, subtraction, multiplication, and division.",
        tools: ['HTML', 'CSS', 'JavaScript'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Front-End Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },