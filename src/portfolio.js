/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Mahin Arafath's Portfolio",
  description:
    "A passionate individual thrives to research in line between Data Science and AI towards future technology development and generating multiple bridge application for civilization.",
  og: {
    title: "Mahin Arafath's Portfolio",
    type: "website",
    url: "http://mhnarfth.gihub.io/",
  },
};

//Home Page
const greeting = {
  title: "Mohd. Arafath Uddin Shariff",
  logo_name: "",
  nickname: "Mahin",
  subTitle:
    "A passionate and energetic tech-savvy? Definitely, zeal to research both Data Science and Artificial Intelligence. Along with updated technology reinforcement competency on a basis of Machine Learning to connect the dots between Data Science and AI, as well as to design multiple bridge applications for realtime problems.",
  resumeLink:
    "https://drive.google.com/file/d/1e4Cvh5zuU2-nm3f9AkC9-0qQdIm25GRi/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  footer_display_name: "Mahin Arafath",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/mhnarfth",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mhnarfth/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:mhnarfth@gmail.com",
    fontAwesomeIcon: "far fa-envelope", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/mhnarfth",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/mhnarfth",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/mhnarfth",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable models for various use cases using deep learning and machine learning",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
        "⚡ Experience of working in Computer Vision and Audio on Signal Processing projects",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos:numpy",
          style: {
            //backgroundColor: "white",
            // color: "#D00000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Google Colab",
          fontAwesomeClassname: "simple-icons:googlecolab",
          style: {
            backgroundColor: "transparent",
            color: "#F9AB00",
            fontSize: "58px",
          },
        },
      ],
    },

    {
      title: "R1 Researcher",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Demonstrated a systematic understanding of a field of study and mastery of research associated with that field",
        "⚡ Capable of critical analysis, evaluation and synthesis of new and complex ideas",
        "⚡ Able to explain the outcome of research (and value thereof) to research colleagues",
        "⚡ Developed integrated language, communication and environment skills, especially in an international context",
      ],
      softwareSkills: [
        {
          skillName: "Google Scholar",
          fontAwesomeClassname: "simple-icons:googlescholar",
          style: {
            color: "#4285F4",
            fontSize: "55px",
          },
        },
        {
          skillName: "LateX",
          fontAwesomeClassname: "cib:latex",
          style: {
            color: "#008181",
            fontSize: "55px",
          },
        },
        {
          skillName: "Mendeley",
          fontAwesomeClassname: "simple-icons:mendeley",
          style: {
            color: "#A81A26",
            fontSize: "55px",
          },
        },

        {
          skillName: "IEEE ACM",
          fontAwesomeClassname: "logos:ieee",
          style: {
            color: "#12689B",
            fontSize: "45px",
          },
        },
        {
          skillName: "Elsevier",
          fontAwesomeClassname: "simple-icons:elsevier",
          style: {
            //color: "#336791",
          },
        },
        {
          skillName: "Evernote",
          fontAwesomeClassname: "cib:evernote",
          style: {
            color: "#00A82D",
            fontSize: "47px",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Creating application backend in Node, Express",
        "⚡ Blending websites with various AI Technologies",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },

        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "logos:express",
          style: {
            color: "#339933",
            fontSize: "35px",
          },
        },
        {
          skillName: "React Router",
          fontAwesomeClassname: "logos:react-router",
          style: {
            //color: "#61DAFB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
          style: {
            //color: "#02569B",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos:firebase",
          style: {
            //color: "#2C8EBB",
          },
        },
        {
          skillName: "mongoDB",
          fontAwesomeClassname: "logos:mongodb",
          style: {
            //color: "#663399",
          },
        },
      ],
    },
    {
      title: "Graphics & UI Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Building creative logos from scratch & customizing logo designs",
        "⚡ Vectorization and Illustration of any design or figure",
        "⚡ Designing lucrative and attractive user interface",
        "⚡ Photoshoping anything to give it a outstanding look",
      ],
      softwareSkills: [
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "icon-park:adobe-photoshop",
          style: {
            //color: "#FF7C00",
            fontSize: "52px",
          },
        },
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },

        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },

        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Port City International Universtiy",
      subtitle: "B.Sc. in Computer Science & Engineering",
      logo_path: "pciu_logo.png",
      alt_name: "PCIU",
      duration: "Jan 2017 - Mar 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, AI, Pattern Recognition, ToC etc.",
        "⚡ Apart from this, I have done courses on Graphics Designing, Machine Learning, Deep Learning, Data Science, and Full Stack Development.",
        "⚡ Achieved merit scholarship given to 1% top students for attaining 3.98, 3.98, 3.99 and 4.00 in 1st, 2nd, 3rd and 4th year respectively as well as for securing the top engineering position along with other Bachelor benefits.",
      ],
      website_link: "http://www.portcity.edu.bd/",
    },
    {
      title: "Government City College, Chattogram",
      subtitle: "Higher Secondary Certificate (HSC) in Science",
      logo_path: "gccc_logo.png",
      alt_name: "Govt. City College",
      duration: "Jul 2013 - Apr 2015",
      descriptions: [
        "⚡ Joined Bangladesh Red Crescent Society as my first step towards voluntary and protection acknowledgement of society, however, equity establishment in society was a great intuition.",
        "⚡ Participated in the Bangladesh National Cadet Corps (BNCC) and continued to be the Petrol Leader throughout my entire college educational life. Overall, their entire campaign and tracking gave me the opportunity to self-motivation and hard working exercise to optimize. ",
        "⚡ Due to my interest in Computer Science, Data Science, and Artificial Intelligence, I prepared my courses for admission in the Bachelor with the greatest motivation for higher study purposes.",
      ],
      website_link: "https://gccc.edu.bd/",
    },
    {
      title: "Government Muslim High School, Chattogram",
      subtitle: "Secondary School Certificate (SSC) in Science",
      logo_path: "gmhs_logo.png",
      alt_name: "Govt. Muslim High School",
      duration: "Jan 2008 - Mar 2013",
      descriptions: [
        "⚡ Crossed the edge of primary school and got myself admitted to high school and the capacity to gain an accurate and deep intuitive knowledge of primary computer based education.",
        "⚡ Spontaneously participated Physics and Mathmatics Olympiad events premises at Government Muslim High School that brought fame and honor to my primary carrer establishment. Besides my competency in multipurpose science projects brought an addition to growing interest in Computer Science and Artificial Intelligence as well.",
        "⚡ Instinctive capacity to join volunteer campaigns and sports like athletics, high-jump, long-jump and similar extracurricular activities so far were enjoyable.",
      ],
      website_link: "http://gmhsctg.tsmts.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning Crash Course",
      subtitle: "- Google Developers",
      logo_path: "google_logo.png",
      /*certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",*/
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Neural Network and Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "Deeplearning.ai",
      color_code: "#a9b3b8",
    },
    {
      title:
        "Improving Deep Neural Networks: Hyper parameter Tuning, Regularization and Optimization",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Deeplearning.ai",
      color_code: "#a9b3b8",
    },
    {
      title: "Structuring Machine Learning Projects",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "Deeplearning.ai",
      color_code: "#a9b3b8",
    },
    {
      title: "Convolutional Neural Networks",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "Deeplearning.ai",
      color_code: "#a9b3b8",
    },
    {
      title: "Sequence Models",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "Deeplearning.ai",
      color_code: "#a9b3b8",
    },
    {
      title: "Using Python for Research",
      subtitle: "- Jukka-Pekka Onnela",
      logo_path: "harvard_university_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "Harvard University",
      color_code: "#e8387e",
    },
    {
      title: "Python Specialization",
      subtitle: "- Charles Severance",
      logo_path: "university-of-michigan-logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "University of Michigan",
      color_code: "#deb512",
    },
    {
      title: "Automate the Boring Stuff with Python Programming",
      subtitle: "- Al Sweigart",
      logo_path: "udemy-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Udemy",
      color_code: "#87ebff",
    },
    {
      title: "Machine Learning Bootcamp",
      subtitle: "- Geeks Academy",
      logo_path: "geeks-academy.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Geeks Academy",
      color_code: "#83a8fc",
    },
    {
      title: "Complete Web Development Course",
      subtitle: "- Jhankar Mahbub",
      logo_path: "programming-hero-logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "Programming Hero",
      color_code: "#111133",
    },
    {
      title: "Graphics Designing",
      subtitle: "- Abdul Mannan",
      logo_path: "ledp-ict.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "ICT Ministry (LEDP)",
      color_code: "#c9ffe4",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Conference and Volunteership",
  description:
    "I worked as a research assistant, having hands-on experience achieved in various evolving tech based workshops and being involved with many organizations and clubs, I carry a vast vision in my career as I see my reflection in mirror.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Teacher Consultant & Coding Instructor (Remote Part-time)",
          company: "Codingal",
          company_url: "https://www.codingal.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2022 - Present",
          location: "Bengaluru, India",
          description:
            "I had worked here on different real life use cases and Deep Learning Methodologies directly under Professor Emam Hossain. Besides, after working hard on Time Series Analysis and Dynamic Forecaseting for about an year a piece of work had been recognized in International Conference on TCCE-2020 and published in Springer entitled “A Novel Deep Learning Approach to Predict Air Quality Index”. I had an amazing journey working under him.",
          color: "#0879bf",
        },
        {
          title: "Research Assisstant (Remote Part-time)",
          company: "Saraf Labudio",
          company_url: "",
          logo_path: "delhivery_logo.png",
          duration: "Apr 2022 - Present",
          location: "Dhaka, Bangladesh",
          description:
            "I had worked here on different real life use cases and Deep Learning Methodologies directly under Professor Emam Hossain. Besides, after working hard on Time Series Analysis and Dynamic Forecaseting for about an year a piece of work had been recognized in International Conference on TCCE-2020 and published in Springer entitled “A Novel Deep Learning Approach to Predict Air Quality Index”. I had an amazing journey working under him.",
          color: "#0879bf",
        },
        {
          title: "Assistant Programmer",
          company: "Arena Web Security",
          company_url: "https://www.arenawebsecurity.net",
          logo_path: "delhivery_logo.png",
          duration: "Apr 2021 - Present",
          location: "Dhaka, Bangladesh",
          description:
            "I had worked here on different real life use cases and Deep Learning Methodologies directly under Professor Emam Hossain. Besides, after working hard on Time Series Analysis and Dynamic Forecaseting for about an year a piece of work had been recognized in International Conference on TCCE-2020 and published in Springer entitled “A Novel Deep Learning Approach to Predict Air Quality Index”. I had an amazing journey working under him.",
          color: "#0879bf",
        },
        {
          title: "Research Assistant",
          company: "Deep Learning Research Lab (DLRL)",
          company_url: "",
          logo_path: "delhivery_logo.png",
          duration: "Sep 2019 - Dec 2020",
          location: "Chattogram, Bangladesh",
          description:
            "I had worked here on different real life use cases and Deep Learning Methodologies directly under Professor Emam Hossain. Besides, after working hard on Time Series Analysis and Dynamic Forecaseting for about an year a piece of work had been recognized in International Conference on TCCE-2020 and published in Springer entitled “A Novel Deep Learning Approach to Predict Air Quality Index”. I had an amazing journey working under him.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Conferences",
      experiences: [
        {
          title:
            "International Conference on Big Data, IoT and Machine Learning (BIM 2021)",
          company: "Center for Natural Science & Engineering Research (CNSER)",
          company_url: "https://confbim.com/",
          logo_path: "intel_logo.jpg",
          duration: "23 Sep 2021 - 25 Sep 2021",
          location: "Cox's Bazar, Bangladesh",
          description:
            "BIM creates opportunity to help everyone, including leaders, policy-makers and people from all income groups and nations, to harness converging technologies in order to create an inclusive, human-centered future. It aims to develop policies and implement the policies focusing the components of 4.0 IR for sustainable developments. BIM 2021 is a good platform for researchers, professionals and students to involve them in innovation and research related to 4.0 IR.",
          color: "#0071C5",
        },
        {
          title:
            "ICSDTIR-2021: International Conference On Sustainable Development in Technology for 4th Industrial Revolution",
          company: "Port City International University",
          company_url: "https://www.easychair.org/cfp/ICSDTIR-2021",
          logo_path: "intel_logo.jpg",
          duration: "12 Mar 2021 - 13 Mar 2021",
          location: "PCIU, Chittagong, Bangladesh",
          description:
            "ICSDTIR focuses on the types of compatible technology, their integration and potential impact on society. The primary goal of this conference is to develop an informed, collective understanding of the benefits, challenges, and related through sustainale development for the 4th IR (Industrial Revolution). The Conference aims to provide the platform for research communities, engineers, scientists and students to share their research experience and innovative ideas in the fields of engineering and technology. To promote sustainable industries and invest in research, development and innovation are important ways to facilitate sustainable development.",
          color: "#0071C5",
        },
        {
          title:
            "2nd International Conference on Trends in Computational and Cognitive Engineering(TCCE-2020)",
          company: "INSTITUTE OF INFORMATION TECHNOLOGY, JU",
          company_url: "https://tcce.iitju.edu.bd/",
          logo_path: "delhivery_logo.png",
          duration: "17 Dec 2020 - 18 Dec 2020",
          location: "Jahangirnagar University, Dhaka, Bangladesh",
          description:
            "TCCE focuses on experimental, theoretical and application aspects of innovations in Computational and Cognitive Engineering. The Conference aims to provide an opportunity to gather the researchers, scholars and experts from academia and industry working in the following areas of basic and applied sciences, engineering and technology to share their research findings. ",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Onsite Contests and Hackathons",
      experiences: [
        {
          title: "Inter University Programming Contest",
          company: "FSET Research Club, USTC",
          company_url: "",
          logo_path: "delhivery_logo.png",
          duration: "25 Nov 2019",
          location: "USTC, Bangladesh",
          description:
            "More than 100 teams had participated IUPC-2019. Among them we took place in the top 15. In the contest there were problems given from diverse problem domain. The research club of the University of Science and Technology, Chattogram had hosted and arranged the whole contest for the year 2019.",
          color: "#0879bf",
        },
        {
          title: "Software Development and PCIU Hackathon",
          company: "PCIU CSE Department",
          company_url: "",
          logo_path: "delhivery_logo.png",
          duration: "10 Nov 2018",
          location: "PCIU, Bangladesh",
          description:
            'The hackathon was searching for the solution of some real world problems. After thorough research and analysis I had developed a model to solve "Ensuring Proper Support For Agro Entrepreneurs" problem. Besides, had to develop a prototype of the model as implementation (android based). Acheived a verbal mention there.',
          color: "#0879bf",
        },
        {
          title: "ICPC Dhaka Regional 2018",
          company: "ICPC Foundation",
          company_url: "",
          logo_path: "delhivery_logo.png",
          duration: "3 Oct 2018",
          location: "PCIU, Bangladesh",
          description:
            "The International Collegiate Programming Contest is an algorithmic programming contest for students. Teams of three, representing their university, work to solve the most real-world problems, fostering collaboration, creativity, innovation, and the ability to perform under pressure. Through training and competition, teams challenge each other to raise the bar on the possible. Quite simply, it is the oldest, largest, and most prestigious programming contest in the world.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Workshops",
      experiences: [
        {
          title:
            "National Workshop on Big Data and Machine Learning (BDML-2020)",
          company: "ICT Division & IEE Computer Society (Bangladesh Chapter)",
          company_url: "",
          logo_path: "delhivery_logo.png",
          duration: "9 Dec 2020 - 10 Dec 2020",
          location: "CUET, Bangladesh",
          description:
            "A two-day national workshop on big data and machine learning held at Chattogram University of Engineering and Technology (CUET). There were hands on training over how to preoare speech corpus for robust LVCSR, how to manage big data storages, the approaches and challanges of it, how to make speaker recognition system using timbre propertimes, and lots more.",
          color: "#0879bf",
        },
        {
          title: "BDAPPS Developer Workshop",
          company: "bdapps",
          company_url: "",
          logo_path: "delhivery_logo.png",
          duration: "22 Sep 2019",
          location: "Chattogram, Bangladesh",
          description:
            "The BDAPPS Developer Workshop provides participants technical training on the concepts and programming methodologies needed to develop applications for mobile devices. Participants learn to use different android libraries. Instruction is aided with live projects which allow students to grasp concepts of the complete mobile application development life-cycle.",
          color: "#0879bf",
        },
        {
          title: "Machine Learning",
          company: "Port City International University",
          company_url: "",
          logo_path: "delhivery_logo.png",
          duration: "3 Aug 2019",
          location: "Chattogram, Bangladesh",
          description:
            "The workshop covers various topics on machhine learning to get started form scratch for a new student in this field — from its introduction and feed-forward neural networks to improving the learning models, also sequence modelling, deep neural netowrks, etc had also been demonstrated here. With this workshop, attendees are be able to start, develop and apply these models in real-life applications.",
          color: "#0879bf",
        },
        {
          title: "Workshop on Game Development",
          company: "Port City International University",
          company_url: "",
          logo_path: "delhivery_logo.png",
          duration: "28 Jul 2018",
          location: "Chattogram, Bangladesh",
          description:
            "In cooperation with the AgamiLabs, the Department of Computer Science and Engineering at Port City International University (PCIU), organized this workshop. During the whole training, the students built 3 arcade games using 3D unity in the area of computer science and/or digital media. On the end of the workshop, students presented their results to a jury who evaluated their performance and distributed prizes and certificates for the best performances.",
          color: "#0879bf",
        },
        {
          title: "Digital Entrepreneurship Workshop",
          company: "Grameenphone",
          company_url: "",
          logo_path: "delhivery_logo.png",
          duration: "17 Apr 2018",
          location: "Chattogram, Bangladesh",
          description:
            "The workshop has been specially designed to probide an understanding on the changing ecosystem of entrepreneurs, ideation & conception and the best practices of successful digital entrepreneurship; with a particular focus on Chittagong's developmental needs. Completing this workshop students will fuel innovation, boost personmal growth and community engagement among the youth who bear the mantle of th digital future.",
          color: "#0879bf",
        },
        {
          title: "Internet of things (IoT)",
          company: "BdOSN (Bangladesh Open Source Network)",
          company_url: "",
          logo_path: "delhivery_logo.png",
          duration: "25 Mar 2018",
          location: "Chattogram, Bangladesh",
          description:
            'A day long workshop entitled "Internet of THings (IoT)" was organized by Department of Computer Science and Engineering in collaboration with BdOSN. There were ten (10) distinctive projects which I with the help of my team made during the workshop. Of course the coach helped while making these projects. Building these projects includes arduino, sensors (different types), bread board, LEDs, LCD Display, connecting wires, Power. In accordance with all of these tools 10 projects had been made and later on using python programming the arduion was loaded with instructions to make them work.',
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "PCIU PCTS Official Club (Moderator)",
          company: "Port City International University",
          company_url: "https://www.facebook.com/groups/414553855782403",
          logo_path: "google_logo.png",
          duration: "June 2018 - Dec 2020",
          location: "Chattogram, Bangladesh",
          description:
            "During my tenure in this club, the portfolio of students that I have to lead them to were very distinct, as well as the superior competitions that I arranged, for instance, the Hackathon contest and different conferences for paper submission. ",
          color: "#4285F4",
        },
        {
          title: "UNYSAB MUN",
          company: "United Nations",
          company_url: "",
          logo_path: "delhivery_logo.png",
          duration: "24 Oct 2018 - 25 Oct 2018",
          location: "Rajshahi, Bangladesh",
          description:
            "This is a unique platform where through the successful establishment of worldwide crucial issues solutions are possible. Eventually, we submitted drafts and working papers, and participants on behalf of different countries gave their materialistic opinion towards the solutions. Participated in UNDP category on behalf of United Arab Emirates, discussed over potential equity of the world sustainable development goals, and earned a verbal mention.",
          color: "#D83B01",
        },
        {
          title: "World Water Day Campaign",
          company: "UNICEF",
          company_url: "",
          logo_path: "delhivery_logo.png",
          duration: "22 Mar 2021",
          location: "Dhaka, Bangladesh",
          description:
            "Joined the daylong online campaign on clean water security determination for common citizens. Though it was an online awareness campaign for ensuring clean and healthy purified water for the civilization of the world, the impact was great and 6 million joined remotely in this campaign. Point to be remembered, clean water and safety are one of the sustainable goals.",
          color: "#000000",
        },
        {
          title: "International Model United Nation",
          company: "United Nation",
          company_url: "",
          logo_path: "dsc_logo.png",
          duration: "Sep 2021 - Present",
          location: "Virtual",
          description:
            "This is a growing worldwide issue solvent crucial platform which is arranged under the shadow of United Nations assembly. Interestingly, this is a remote joining program where drafts resolutions and working paper submission is granting an open discussion over a trade war and Covid-19 pandemic situations to handle by developed countries and relief to developing and underdeveloped countries.",
          color: "#0C9D58",
        },
        {
          title: "NJF Volunteer",
          company: "Nobojagoron Foundation",
          company_url: "",
          logo_path: "delhivery_logo.png",
          duration: "July 2018 - Nov 2019",
          location: "Remote",
          description:
            "Fulfilled primary duty to be a teacher in the afternoon Nobojagoron Foundation School. Provided ICT lessons online to the poor but innovative children and teenagers. Besides the primary motto and duty as well, played a competitive and competent role to help underprivileged children for securing their future world and to train them to their ultimate goals, for instance, arranging game competition with IT regarding easy task solving. ",
          color: "#181717",
        },
      ],
    },
  ],
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
};
