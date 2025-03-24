import { time } from "framer-motion";

export const Events = [
  {
    name: 'Breaking Math (Quiz) (1st round)',
    date: '28th MARCH',
    time: '10:00 AM - 12:00 PM',
    venue: ' Drawing hall 30',
    iconBg: '#33ffd3', // Unique color
    points:
      'Conducted by GOOGLE Developer Community & AZURE User Group Chennai.',
  },
  {
    name: 'Code Mathrix (1st Round)',
    date: '28th MARCH',
    time: '10:00 AM - 12:00 PM',
    venue: ' RCC Lab',
    iconBg: '#33ffb8', // Unique color
    points: 'Conducted by Developers Community',
  },

  {
    name: 'SQL Heist (1st round)',
    date: '28th MARCH',
    time: '10:00 AM - 12:00 PM',
    venue: ' RCC Lab',
    iconBg: '#33ffb8', // Unique color
    points: 'Conducted by Developers Community',
  },

  {
    name: 'Pseudo 2 Code (1st Round)',
    date: '28th MARCH',
    time: '10:00 AM - 12:00 PM',
    venue: ' Dept Lab (Main)',
    iconBg: '#33ffb8', // Unique color
    points: 'Conducted by Developers Community',
  },

  {
    name: 'Ellam Design La Irukku (Designing)',
    date: '28th MARCH',
    time: '10:00 AM - 12:00 PM',
    venue: ' Dept Lab (Mini)',
    iconBg: '#33ffb8', // Unique color
    points: 'Conducted by Developers Community',
  },

  {
    name: 'Pi-rates of the Lost Equation (Treasure Hunt)',
    date: '28th MARCH',
    time: '10:00 AM - 12:00 PM',
    venue: ' LH 48 , Dept',
    iconBg: '#33ffb8', // Unique color
    points: 'Conducted by Developers Community',
  },

  {
    name: 'Mystery Mansion (1st round)',
    date: '28th MARCH',
    time: '10:00 AM - 12:00 PM',
    venue: ' LH 1',
    iconBg: '#33ffb8', // Unique color
    points: 'Conducted by Developers Community',
  },

  {
    name: 'WordViz (1st round)',
    date: '28th MARCH',
    time: '10:00 AM - 12:00 PM',
    venue: ' LH 2',
    iconBg: '#33ffb8', // Unique color
    points: 'Conducted by Developers Community',
  },

  {
    name: 'Infinity Adrift (Shipwreck) ',
    date: '28th MARCH',
    time: '11:00 AM - 12:00 PM',
    venue: ' LH 5',
    iconBg: '#33ffb8', // Unique color
    points: 'Conducted by Developers Community',
  },

  {
    name: 'SQL Heist (2nd round) ',
    date: '28th MARCH',
    time: '1:00 PM - 1:40 PM',
    venue: ' RCC Lab',
    iconBg: '#33ffb8', // Unique color
    points: 'Conducted by Developers Community',
  },

  {
    name: 'WordViz (2nd round) ',
    date: '28th MARCH',
    time: '1:30 PM - 2:00 PM',
    venue: ' LH 2',
    iconBg: '#33ffb8', // Unique color
    points: 'Conducted by Developers Community',
  },

  {
    name: 'Conundrum Carnival (Potpourri) ',
    date: '28th MARCH',
    time: '1:45 PM - 4:00 PM',
    venue: ' Ramanujam Hall',
    iconBg: '#33ffb8', // Unique color
    points: 'Conducted by Developers Community',
  },

  {
    name: 'Pseudo2Code (2nd Round) ',
    date: '28th MARCH',
    time: '1:45 PM - 2:45 PM',
    venue: ' Dept Lab (Main)',
    iconBg: '#33ffb8', // Unique color
    points: 'Conducted by Developers Community',
  },

  {
    name: 'Breaking Math (Quiz) (2nd Round) ',
    date: '28th MARCH',
    time: '2:00 PM - 3:00 PM',
    venue: ' Vivek Auditorium',
    iconBg: '#33ffb8', // Unique color
    points: 'Conducted by Developers Community',
  },

  {
    name: 'Paper Presentation (The Thought Exchange)  ',
    date: '28th MARCH',
    time: '2:00 PM - 3:00 PM',
    venue: ' Dr Natesan Seminar Hall (RCC)',
    iconBg: '#33ffb8', // Unique color
    points: 'Conducted by Developers Community',
  },

  {
    name: 'Mystery Mansion (2nd round)  ',
    date: '28th MARCH',
    time: '2:00 PM - 3:45 PM',
    venue: ' LH 6 and EG hall 49',
    iconBg: '#33ffb8', // Unique color
    points: 'Conducted by Developers Community',
  },

  {
    name: 'Code Mathrix(2nd Round) ',
    date: '28th MARCH',
    time: '2:45 PM - 3:45 PM',
    venue: ' RCC Lab ',
    iconBg: '#33ffb8', // Unique color
    points: 'Conducted by Developers Community',
  },

  

  // {
  //   name: "SQL Heist (1st round)",
  //   date: "10:00 AM - 12:00 PM",
  //   iconBg: "#FFC300", // Unique color
  //   points: "Crack the database secrets.",
  // },
  // {
  //   name: "Pseudo 2 Code (1st Round)",
  //   date: "10:00 AM - 12:00 PM",
  //   iconBg: "#C70039", // Unique color
  //   points: "Transform pseudo logic into real code.",
  // },
  // {
  //   name: "Art Attack",
  //   date: "10:00 AM - 12:00 PM",
  //   iconBg: "#900C3F", // Unique color
  //   points: "Unleash your creativity with colors.",
  // },
  // {
  //   name: "Mystery Mansion (1st round)",
  //   date: "10:00 AM - 12:00 PM",
  //   iconBg: "#581845", // Unique color
  //   points: "Solve mysteries and uncover secrets.",
  // },
  // {
  //   name: "Wordviz (1st round)",
  //   date: "10:00 AM - 12:00 PM",
  //   iconBg: "#FF7F50", // Unique color
  //   points: "Showcase your vocabulary and wordplay skills.",
  // },
  // {
  //   name: "Pi-rates of the Lost Equation (Treasure Hunt)",
  //   date: "2:00 PM - 3:30 PM",
  //   iconBg: "#20B2AA", // Unique color
  //   points: "Solve math riddles to find hidden treasure.",
  // },
  // {
  //   name: "Conundrum Carnival (Potpourri)",
  //   date: "2:00 PM - 4:00 PM",
  //   iconBg: "#FF6347", // Unique color
  //   points: "Engage in a mix of puzzles and challenges.",
  // },
  // {
  //   name: "SQL Heist (2nd round)(10mins spare time)",
  //   date: "1:30 PM - 2:10 PM",
  //   iconBg: "#FFD700", // Unique color
  //   points: "Advanced queries for cracking databases.",
  // },
  // {
  //   name: "Pseudo 2 Code (2nd Round)",
  //   date: "2:10 PM - 3:10 PM",
  //   iconBg: "#ADFF2F", // Unique color
  //   points: "Turn ideas into executable code.",
  // },
  // {
  //   name: "Code Mathrix(2nd Round)",
  //   date: "2:30 PM - 3:30 PM",
  //   iconBg: "#6495ED", // Unique color
  //   points: "Dive deeper into coding challenges.",
  // },
  // {
  //   name: "Paper Presentation",
  //   date: "2:00 PM - 3:00 PM",
  //   iconBg: "#FF4500", // Unique color
  //   points: "Present innovative ideas with confidence.",
  // },
  // {
  //   name: "Mystery Mansion (2nd round)",
  //   date: "2:00 PM - 4:00 PM",
  //   iconBg: "#800080", // Unique color
  //   points: "Unearth the final secrets of the mansion.",
  // },
  // {
  //   name: "Wordviz (2nd round)",
  //   date: "1:45 PM - 2:05 PM",
  //   iconBg: "#4682B4", // Unique color
  //   points: "Compete with the best in word challenges.",
  // },
]
