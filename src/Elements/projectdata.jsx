
import thinklay from '../assests/img/thinklay.png';
import internshala from '../assests/img/stonepapper.png';
import flipkartclone from '../assests/img/flipkartclone.png';
import envatomarket from '../assests/img/envatomarket.png';
import urlshorter from '../assests/img/urlshorter.png';
import movieapp from '../assests/img/movieapp.png';
import travellapp from '../assests/img/travellapp.png';
import todolist from '../assests/img/todolist.png';

const project = [
    {
        id: 1,
        name: "THINKLAY",
        image: thinklay,
        category: 'pinned',
        github: 'https://github.com/deveshpandey65/Thinklay',
        deployed: 'https://thinklay.com',
        desc:`Thinklay – A Comprehensive Startup Platform

Thinklay is a full-stack web platform I designed, built, and launched as part of my startup journey. Developed using PHP, MySQL, JavaScript, HTML, and CSS, Thinklay seamlessly integrates both front-end and back-end systems to deliver a smooth, reliable, and engaging user experience.

The platform was created to serve diverse client needs, offering a range of services through a user-friendly interface that balances functionality with performance. With robust database integration and efficient code architecture, Thinklay not only meets real-world business demands but also stands as a testament to my ability to manage complex full-stack projects from conception to deployment.

Currently in active use, Thinklay continues to evolve as it serves a growing clientele, demonstrating my commitment to building scalable and impactful digital solutions.`, 
        toolsused: [{ name: 'PHP', imglink: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg' }, { name: 'MySQL', imglink: 'https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png' }],
        techstack: 'PHP, MySQL, JavaScript'
    },
    {
        id: 2,
        name: "INTERNSHALA AUTOMATION",
        image: internshala,
        category: 'pinned',
        github: 'https://github.com/deveshpandey65/Internshala_Automation',
        deployed: '',
        desc: 'A browser automation tool that streamlines the process of applying for internships on Internshala, improving efficiency by 80% and saving up to 10 hours per week. Uses Puppeteer for web scraping and form submission automation.',
        toolsused: [{ name: 'React.js', imglink: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' }, { name: 'Puppeteer', imglink: 'https://puppeteer.github.io/puppeteer/assets/images/puppeteer-logo.png' }],
        techstack: 'React.js, Node.js, Puppeteer'
    },
    {
        id: 3,
        name: "FLIPKART CLONE",
        image: flipkartclone,
        category: 'deploy',
        github: 'https://github.com/deveshpandey65/FlipkartClone',
        deployed: 'https://deveshpandey65.github.io/FlipkartClone/',
        desc: 'A full-stack e-commerce website inspired by Flipkart. Built using the MERN stack with a user authentication system and product listings.',
        toolsused: [{ name: 'MongoDB', imglink: 'https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg' }, { name: 'Express.js', imglink: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' }],
        techstack: 'MERN Stack'
    },
    {
        id: 4,
        name: "ENVATOMARKET",
        image: envatomarket,
        category: 'pinned',
        github: 'https://github.com/deveshpandey65/EnvatoMarket',
        deployed: 'https://deveshpandey65.github.io/envatomarket/',
        desc: 'Implemented a fluid simulation effect using the WebGL-Fluid library, enhancing user interaction. This project showcases advanced front-end animation techniques in a dynamic web environment.',
        toolsused: [{ name: 'React.js', imglink: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' }, { name: 'WebGL', imglink: 'https://upload.wikimedia.org/wikipedia/commons/2/25/WebGL_Logo.svg' }],
        techstack: 'React.js, WebGL'
    },
    {
        id: 5,
        name: "URL SHORTENER",
        image: urlshorter,
        category: 'practice',
        github: 'https://github.com/deveshpandey65/URL_Shorter',
        deployed: '',
        desc: 'A simple URL shortener built using the MERN stack. It allows users to generate short links for long URLs with analytics tracking.',
        toolsused: [{ name: 'MongoDB', imglink: 'https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg' }, { name: 'Node.js', imglink: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' }],
        techstack: 'MERN Stack'
    },
    {
        id: 6,
        name: "MOVIE APP",
        image: movieapp,
        category: 'pinned',
        github: '',
        deployed: '',
        desc: 'A movie browsing application that fetches real-time data from an external API and provides details about trending movies.',
        toolsused: [{ name: 'React.js', imglink: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' }],
        techstack: 'React.js'
    },
    {
        id: 7,
        name: "TRAVEL APP",
        image: travellapp,
        category: 'practice',
        github: '',
        deployed: '',
        desc: 'A travel booking app with interactive maps and a modern UI. Users can find and book travel experiences worldwide.',
        toolsused: [{ name: 'React.js', imglink: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' }, { name: 'Google Maps API', imglink: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_Maps_icon.svg' }],
        techstack: 'React.js, Google Maps API'
    },
    {
        id: 8,
        name: "TO-DO LIST",
        image: todolist,
        category: 'practice',
        github: 'https://github.com/deveshpandey65/To-do-List-',
        deployed: '',
        desc: 'A simple and intuitive To-Do list application to manage daily tasks efficiently. Built using React for front-end and local storage for persistence.',
        toolsused: [{ name: 'React.js', imglink: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' }],
        techstack: 'React.js'
    }
];

export default project;
