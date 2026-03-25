const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// ALL COURSES
const allButton = document.querySelector('#all-btn');
const container = document.querySelector('#courses-card');
const courseDetails = document.querySelector('#course-details');

displayCourses(courses)

/*
    Function to display courses
    1. Clean container
    2. Create Cards
    3. Append Cards
*/
function displayCourses(courseList) {

    container.innerHTML = '';

    courseList.forEach(course => {

        const card = document.createElement('div');

        if (course.completed) {
            card.classList.add('completed');
        } else {
            card.classList.add('not-completed')
        };

        card.innerHTML = `
        <p>${course.subject} ${course.number}</p>
        `;
        container.appendChild(card);

        card.addEventListener('click', () => {
            displayCourseDetails(course);
        })
    });

    const totalCredits = courseList.reduce((initial, course) => initial + course.credits, 0);
    document.querySelector('#totalCredits').textContent = `The total credits for course listed above is ${totalCredits}`;
};

/*------------------------------------------ALL BTN------------------------------------------ */
allButton.addEventListener('click', () => {
    displayCourses(courses);
});

/*------------------------------------------CSE BTN------------------------------------------ */
const cseButton = document.querySelector('#cse-btn'); 

cseButton.addEventListener('click', () => {
    let cseCourses = courses.filter(course => course.subject === 'CSE'); // filter cse subject
    displayCourses(cseCourses)
});

/*------------------------------------------WDD BTN------------------------------------------ */
const wddButton = document.querySelector('#wdd-btn'); 

wddButton.addEventListener('click', () => {
    const wddCourses = courses.filter(course => course.subject === 'WDD'); // filter wdd subject
    displayCourses(wddCourses)
});

/*
    Function to make the Modal element work.
    1. 
    2. 
    3. 
*/

function displayCourseDetails(course) {
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
    `;
    courseDetails.showModal();

    closeModal.addEventListener('click', () => {
        courseDetails.close();
    });
}


