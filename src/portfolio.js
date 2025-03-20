/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "AngryX",
  title: "Hi all, I'm Grigoriy",
  subTitle: emoji(
    "I am a developer of various software with experience in Full Stack development, building web and mobile applications using JavaScript, ReactJS, Node.js, Python and Tilda, as well as developing microservice architectures, machine learning solutions, neural network integration and advanced bots for cryptocurrency, trading and chat automation."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  gmail: "viv_2573@mail.ru",
  github: "https://github.com/AngryX-27",
  telegram: "https://t.me/AngryX27",
  whatsapp: "https://wa.me/77759830171",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I am a professional IT developer with deep expertise in Full Stack development, mobile applications, machine learning, neural network integration, and the creation of advanced bots for cryptocurrency, trading, chatbots, etc.",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ I work with machine learning and neural network integration developing various intelligent systems"),
    emoji(
      "⚡ I specialize in building advanced bots for cryptocurrency, trading, chatbots and other tasks, to provide efficient automation and high quality user interaction."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "UIB University",
      logo: require("./assets/images/uib_logo.png"),
      subHeader: "Big Data. Data Analitics and Data Science",
      // duration: "September 2017 - April 2019",
      desc: "With a bias toward AI Engineering.",
      descBullets: [
        "Development of machine learning models and neural networks",
        "In-depth data analysis and creation of predictive models",
        "Expert application of Python and specialized data analytics and artificial intelligence tools"
      ]
    },
    {
      schoolName: "UIB University",
      logo: require("./assets/images/uib_logo.png"),
      subHeader: "Finance, economics, banking and insurance",
      // duration: "September 2013 - April 2017",
      desc: "Financial markets and financial institutions",
      descBullets: [
        "Analyzing financial markets and trading strategies",
        "Working with cryptocurrency assets and exchanges",
        "Possession of technological knowledge, methodology and tools of investment and financial decisions enterprise"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Full Stack (JavaScript, ReactJS, Node.js, React Native, Python) & Tilda", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Mobile application development",
      progressPercentage: "80%"
    },
    {
      Stack: "Machine learning and neural network integration",
      progressPercentage: "90%"
    },
    {
      Stack: "Creating advanced bots (cryptocurrencies, trading, chatbots)",
      progressPercentage: "90%"
    },
    {
      Stack: "PWeb Automation & Scraping",
      progressPercentage: "80%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full range of directions described in my portfolio.",
      company: "Freelancing",
      companylogo: require("./assets/images/freelancer-logo-2.png"),
      // date: "June 2018 – Present",
      desc: "Executing projects and orders across a wide range of IT areas, with a focus on Full Stack development, Tilda website development and automation.",
      descBullets: [
        "Development and support of web and mobile applications (JavaScript, ReactJS, Node.js)",
        "Creation of websites on the Tilda platform and their integration with external services"
      ]
    },
    {
      role: "Date Analyst and Data Science",
      company: "Kaspi Bank",
      companylogo: require("./assets/images/kaspi-logo.png"),
      // date: "May 2017 – May 2018",
      desc: "Working with big data, creating and optimizing machine learning models to solve the bank's business problems.",
      descBullets: [
        "Analyzing data and building predictive models",
        "Creation and implementation of algorithms to automate analytical processes"
      ]
    },
    {
      role: "Engineering AI and Cryptocurrency Developer",
      company: "Open Source & Collaborations",
      companylogo: require("./assets/images/crypto-logo-2.png"),
      // date: "Jan 2015 – Sep 2015",
      desc: "Developing and participating in open source projects related to artificial intelligence, blockchain and trading automation.",
      descBullets: [
        "Development of AI models and open source neural network solutions",
        "Creation of automated cryptocurrency and trading bots"
      ]
    }
  ]
};

//
//
//
/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/trading-bot-logo.jpg"),
      projectName: "Trading Bot",
      projectDesc: "Automated trading bot with many indicators ",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/AngryX-27/Trading-bot.git"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

export const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

/* Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};
*/

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "If you want to read more about my projects, you can go to GitHub or contact me directly.",
  number: "+7-(775)-983-0171",
  email_address: "viv_2573@mail.ru"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  // achievementSection,
  //blogSection,
  //talkSection,
  //podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
