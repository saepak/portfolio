
export let Data = [
    {
      id:1,
      title:'Easy Realty System',
      href:'',
      github:'https://github.com/jyotSarup/ez.dashboard',
      group: true,
      skills: [
        { skill:'React'}, 
        { skill:'React-Hooks'},
        { skill:'Material-UI'},
        { skill:'SASS'}
      ],
      pic: require('./../../img/work01.png'),
      desc:'A property management system for professional real estate agents.',
      roles: [
        { role:'Built the front-end of Easy Realty System’s property lists and fetched API using React.js, React Hooks and Material-UI.'},
        { role:'Styled components with SASS for logical code organization.'},
        { role:'Tested all features for cross browser and multiple devices compatibility.'},
      ]
    },
    {
      id:2,
      title:'Kovan',
      href:'https://kovanapp.com/',
      github:'https://github.com/bivt-cap/bivt-frontend',
      group: true,
      skills: [
        { skill:'React-Native' }, 
        { skill:'React-Hooks' },
        { skill:'Native-base' },
      ],
      pic: require('./../../img/work02.png'),
      desc:'An all-in-one group management solution with 7 plug-ins',
      roles: [
        { role:'Collaborated with other students to plan, executed a native app.' },
        { role:'Built and implemented to-do list and poll plug-in with React Native and React Hooks.' },
        { role:'Created graphs for poll plug-in with SVG for scalability and easy editing.' },
        { role:'Styled the app with Native-Base to reduce the built time.' },
        { role:'Made the promotional website using React.js. to show the seven different features and marketing plans.' },
      ]
    },
    {
      id:3,
      title:'Movie Box',
      href:'',
      github:'https://github.com/saepak/movieApp',
      group: false,
      skills: [
        { skill:'React'}, 
        { skill:'Material-UI'},
        { skill:'TMDB API'},
      ],
      pic: require('./../../img/work04.png'),
      desc:'A web app that lets you search for movies and TV shows.',
      roles: [
        { role:'Created search and filter features using React.js.'},
        { role:'Fetched TMDB Movie API to provide massive data about movies and TV shows.'},
        { role:'Styled the components using Material-UI for responsive design.'},
      ]
    },
    {
      id:4,
      title:'Mini Memo',
      href:'',
      github:'https://github.com/saepak/movieApp',
      group: false,
      skills: [
        { skill:'React'}, 
        { skill:'Apollo'},
        { skill:'GraphQL'},
      ],
      pic: require('./../../img/sample.png'),
      desc:'A simple note app that enables users to keep track of their tasks, ideas and goals.',
      roles: [
        { role:'Built a server storing data using GraphQL to extend my knowledge to the back-end development.'},
        { role:'Used Apollo.js for easy management of the data.'},
      ]
    },
    {
      id:5,
      title:'Quick Recipe',
      href:'',
      github:'https://github.com/saepak/RecipeApp',
      group: false,
      skills: [
        { skill:'React'}, 
        { skill:'React-Hooks'}, 
        { skill:'Edamam API'}, 
      ],
      pic: require('./../../img/sample.png'),
      desc:'A quick recipe app for ingredients in your kitchen.',
      roles: [
        { role:'Fetched Edamam API to provide to display recipes and cooking information.'},
        { role:'Created search function to make it easy to find the recipe based on ingredients.'},
      ]
    },
]