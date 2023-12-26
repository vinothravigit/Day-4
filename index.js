// Example JSON array
const jsonArray = [
    { "name": "John", "age": 30 },
    { "name": "Jane", "age": 25 },
    { "name": "Bob", "age": 40 }
  ];
  
  // Example JSON object
  const jsonObject = {
    "person1": { "name": "John", "age": 30 },
    "person2": { "name": "Jane", "age": 25 },
    "person3": { "name": "Bob", "age": 40 }
  };
  
  // Using for...in loop with object
  for (const key in jsonObject) {
    if (jsonObject.hasOwnProperty(key)) {
      const person = jsonObject[key];
      console.log(person.name, person.age);
    }
  }
  
  // Using for...of loop with array
  for (const person of jsonArray) {
    console.log(person.name, person.age);
  }
  
  // Using forEach with array
  jsonArray.forEach(person => {
    console.log(person.name, person.age);
  });

// RESUME USING JSON

  let resume = {
    "name": "Vinoth Ravi",
    "contact": {
      "email": "vinoth360360@gmail.com",
      "phone": "9150364607",
      "address": "311/C, Vallalar Nagar, Panruti, Cuddalore - 607103."
    },
    "summary": "Dedicated and results-driven administrative executive with a strong background in managing office operations and streamlining administrative processes. Proven ability to handle a wide range of responsibilities, ensuring smooth day-to-day business functions. Now seeking a transition to the IT sector to leverage my adaptability, strong organizational skills, and passion for technology.": [
      {
        "position": "Executive Admin",
        "company": "Zigma Global Environ solutions pvt ltd.,",
        "location": "Puducherry",
        "dates": "March 2022 - Present",
        "responsibilities": [
          "• Maintaining availability of Petty Cash & apprise to accounts team",
          "Setting and managing the daily schedules and calendars of company executives.",
          "Managing videoconferencing, mail communications and office equipment."
        ]
      },
      {
        "position": "Data Processing Analyst",
        "company": "HGS healthcare",
        "location": "Chennai",
        "dates": "November 2021 - March 2022",
        "responsibilities": [
          "Communicating with insurance agents and beneficiaries.",
          "Preparing claim forms and related documentation",
          "Reviewing claim submissions and verifying the information"
        ]
      }
    ],
    "education": [
      {
        "degree": "Bachelor of Science in Computer Science",
        "College": "University of Madras",
        "location": "Chennai",
        "dates": "May 2016 - Nov 2019"
      }
      {
        "degree": "HSC",
        "School": "John Dewey Matric Hr Sec School",
        "location": "Cuddalore",
        "dates": "April 2015 - April 2016"
      }
    ],
    "skills": [
      "Basic computer skills",
      "HTML",
      "CSS",
      "MS Office",
      "Communication Skills",
      "Git",
      "Problem Solving"
    ],
    "languages": ["Tamil (Native)", "English (Intermediate)"],
    "Courses(on-going)": ["Full Stack Devolopment at GUVI"]
  };
  
  
  console.log(JSON.stringify(resume, null, 2));
  
  