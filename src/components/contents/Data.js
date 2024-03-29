
export let Data = [
  {
    id: 1,
    title:'CompareWise',
    demo:'https://comparewise.ca/',
    github:'',
    group: true,
    skills: [
      { skill:'HTML' },
      { skill:'CSS' },
      { skill:'JavaScript' },
      { skill:'jQuery' },
      { skill:'PHP' },
      { skill:'WordPress' },
    ],
    pic: require('./../../img/work11.png'),
    desc:'A fair, accessible, and simple approach to financing in Canada.',
    roles: [
      { role:'Created custom WordPress themes and plugins using HTML5, CSS3, JavaScript and PHP.' },
      { role:'Translated wireframes into scalable and reusable code.' },
      { role:'Maintained the website by identifying issues and providing quick fixes.' },
      { role:'Ensured cross-platform and browser compatibility.' },
    ]
  },
    {
      id: 2,
      title:'Kovan',
      demo:'https://github.com/bivt-cap/bivt-frontend',
      github:'https://github.com/bivt-cap/bivt-frontend',
      group: true,
      skills: [
        { skill:'React-Native' }, 
        { skill:'React-Hooks' },
        { skill:'Native-base' },
      ],
      pic: require('./../../img/work2.png'),
      desc:'An all-in-one group management solution with seven different plug-ins.',
      roles: [
        { role:'Collaborated with team members to plan and execute a native app.' },
        { role:'Built and implemented to-do list and poll plug-in with React Native and React Hooks.' },
        { role:'Created graphs for poll plug-in with SVG for scalability and easy editing.' },
        { role:'Styled the app with Native-Base to reduce the built time.' },
        { role:'Made the promotional website using React.js. to show the seven different features and marketing plans.' },
      ]
    },
    {
      id:3,
      title:'Movie Box',
      demo:'https://saepak.github.io/movieapp',
      github:'https://github.com/saepak/movieApp',
      group: false,
      skills: [
        { skill:'React'}, 
        { skill:'Material-UI'},
        { skill:'TMDB API'},
      ],
      pic: require('./../../img/work3.png'),
      desc:'A web app that lets you search for movies and TV shows. Browse through your favorite shows!',
      roles: [
        { role:'Created search and filter features using React.js.'},
        { role:'Fetched TMDB Movie API to provide massive data about movies and TV shows.'},
        { role:'Styled the components using Material-UI for responsive design.'},
      ]
    },
    {
      id:4,
      title:'My Expense Manager',
      demo:'https://saepak.github.io/expense-tracker',
      github:'https://github.com/saepak/expense-tracker',
      group: false,
      skills: [
        { skill:'React'}, 
        { skill:'React-Hooks'},
        { skill:'Google OAuth'},
        { skill:'Chart-JS'},
        { skill:'Ant-Design'},
      ],
      pic: require('./../../img/work4.png'),
      desc: 'A simple management app that enables users to track their expense.',
      roles: [
        { role:'Built features to create and submit expenses for easy budgeting.'},
        { role:'Used Google OAuth to keep data safe and provide strong authentication.'},
        { role:'Created a chart to visualize expenses.'},
      ]
    },
        // {
    //   id: 1,
    //   title:'Autoland',
    //   demo:'http://cha894.com/',
    //   github:'',
    //   group: true,
    //   skills: [
    //     { skill:'HTML' },
    //     { skill:'CSS' },
    //     { skill:'jQuery' },
    //   ],
    //   pic: require('./../../img/work8.png'),
    //   desc:'An online used car marketplace with a large amount of inventory.',
    //   roles: [
    //     { role:'Collaborated with designers and back-end developers.' },
    //     { role:'Developed and maintained the user interface.' },
    //     { role:'Created images sliders and sticky banners using jQuery.' },
    //     { role:'Changed and updated the content on request.' },
    //   ]
    // },

    // {
    //   id: 2,
    //   title:'Happy car',
    //   demo:'https://play.google.com/store/apps/details?id=com.happycarservice.sell',
    //   github:'',
    //   group: true,
    //   skills: [
    //     { skill:'HTML' },
    //     { skill:'CSS' },
    //     { skill:'jQuery' },
    //   ],
    //   pic: require('./../../img/work9.png'),
    //   desc:'A web application that helps buyers searching for used cars.',
    //   roles: [
    //     { role:'Developed web applications using HTML, CSS and jQuery.' },
    //     { role:'Fixed bugs, tested for usability and updated the content.' },
    //   ]
    // },
    // {
    //   id:6,
    //   title:'Landing page',
    //   demo:'https://saepak.github.io/cocacola_landing_page/',
    //   github:'https://github.com/saepak/cocacola_landing_page',
    //   group: false,
    //   skills: [
    //     { skill:'Vanilla javascript'}, 
    //     { skill:'Sass'}, 
    //     { skill:'Swiper.js'}, 
    //     { skill:'Font Awesome'}, 
    //   ],
    //   pic: require('./../../img/work6.png'),
    //   desc:'A fully responsive Coca-cola landing page.',
    //   roles: [
    //     { role:'Styled the page using Sass.'},
    //     { role:'Made touch movement interaction on the slider by Swiper.js.'},
    //     { role:'Created a vertical image slider to display pictures.'},
    //   ]
    // },
    // {
    //   id:7,
    //   title:'Pixabay Image Gallery',
    //   demo:'https://saepak.github.io/image-gallery',
    //   github:'https://github.com/saepak/image-gallery',
    //   group: false,
    //   skills: [
    //     { skill:'React'}, 
    //     { skill:'React-Hooks'}, 
    //     { skill:'Tailwind CSS'}, 
    //     { skill:'Pixabay API'}, 
    //   ],
    //   pic: require('./../../img/work5.png'),
    //   desc:'A high quality image library by Pixabay API.',
    //   roles: [
    //     { role:'Fetched Pixabay API for retrieving free images.'},
    //     { role:'Created a search function to make it easy to find images.'},
    //     { role:'Used Tailwind CSS to make the styling process faster.'},
    //   ]
    // },
    // {
    //   id:8,
    //   title:'Pixabay Image Gallery',
    //   demo:'https://the-world-air-quality.netlify.app/',
    //   github:'https://github.com/saepak/world-air-quality',
    //   group: false,
    //   skills: [
    //     { skill:'React.js'}, 
    //     { skill:'Chart.js'}, 
    //     { skill:'Air Quality API'}, 
    //     { skill:'Countries & Cities API'}, 
    //     { skill:'Netlify'}
    //   ],
    //   pic: require('./../../img/work10.png'),
    //   desc:'A single page web app that allows the user to select a city and show the AQI forecast.',
    //   roles: [
    //     { role:'Fetched Countries & Cities API to select a city with an auto-complete text box.'},
    //     { role:'Created a graph showing the AQI forecast for the next few days.'},
    //     { role:'Displayed the geo location information for the selected city.'},
   //      { role:'Deployed the website on Netlify.'},
    //   ]
    // },
]