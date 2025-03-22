import { time } from "framer-motion";

const eventData = [
  {
    id: 1,
    name: 'SQL Heist',
    img: '/events/SQL_Heist.jpeg',
    type: 'Technical',
    location: 'RCC Lab',
    teamSize: '1-2',
    time: '10:00 AM',
    rules: [
      '2 rounds: MCQ Challenge (25 mins) & SQL Puzzle Solving (40 mins).',
      'Offline event.',
    ],
    description:
      'Test your SQL skills in a thrilling challenge! Solve MCQs and crack complex database puzzles to uncover the mystery.',
  },
  {
    id: 2,
    name: 'Pseudo2Code',
    img: '/events/pseudocode.jpeg',
    type: 'Technical',
    location: 'Dept of Mathematics Lab',
    time: '10:00 AM',
    teamSize: '1-2',
    rules: [
      'Round 1: MCQs on pseudocode & algorithms (25 mins).',
      'Round 2: Pseudocode writing & implementation (1 hr).',
    ],
    description:
      'A test of teamwork, logic, and precision! One team member writes pseudocode while the other implements it into working code.',
  },
  {
    id: 3,
    name: 'Code Mathrix',
    img: '/events/CodeMathrix.png',
    type: 'Technical',
    location: 'RCC Lab',
    time: '10:00 AM',
    teamSize: '1-2',
    rules: [
      'Round 1: MCQs on CS fundamentals (25 mins).',
      'Round 2: Solve coding problems to mark matrix squares (60 mins).',
    ],
    description:
      'An offline coding challenge where solving problems marks matrix squares. Complete a row, column, or diagonal to win!',
  },
  {
    id: 4,
    name: 'Ellam design la irukku',
    img: '/events/Art Attack.jpeg',
    type: 'Non Technical',
    time: '10:00 AM',
    location: 'Dept.of Mathematics Lab',
    teamSize: '1-3',
    rules: [
      'Theme will be disclosed on the spot.',
      'Use only provided art materials.',
      'Time limit: 1 hour.',
      'Judge’s decision is final.',
    ],
    description:
      'Unleash your creativity in this technical art-based challenge! Create stunning artwork based on the given theme in a limited time.',
  },
  {
    id: 5,
    name: 'Thought Exchange',
    img: '/events/paperpresentation.png',
    type: 'Non Technical',
    location: 'Vivek Auditorium',
    teamSize: '2',
    time: '2:00 PM',
    rules: [
      'Submit abstract before event day.',
      'Time limit: 5 mins presentation + 2 mins Q&A.',
      'Judge’s decision is final.',
    ],
    description:
      'This team-based event challenges participants to select a topic from a provided list and present their research in an engaging, informative way. The event fosters teamwork, critical thinking, and effective communication while encouraging exploration across the fields.',
  },
  {
    id: 6,
    name: 'Mystery Mansion',
    img: '/events/mysterymansion.jpeg',
    type: 'Non Technical',
    time: '2:00 AM',
    location: 'LH 1 and EG Hall 49', 
    teamSize: '1-3',
    rules: [
      'Solve puzzles to escape the mansion.',
      'Time limit: 30 minutes.',
      'Team collaboration is key!',
    ],
    description:
      'Enter the Mystery Mansion and work together to solve intriguing puzzles to escape before time runs out!',
  },
  {
    id: 7,
    name: 'Wordviz',
    img: '/events/wordviz.jpeg',
    type: 'Non Technical',
    time: '1:30 AM',
    location: 'LH 2',
    teamSize: '1-2',
    rules: [
      'Round 1: Word Association Game.',
      'Round 2: Creative Storytelling based on given words.',
      'Time limit: 5 mins per round.',
    ],
    description:
      "An engaging and fun event where participants decode visual puzzles, word arrangements ,and abstract clues to uncover hidden words, proverbs, phrases, and idioms.",
  },
  {
    id: 8,
    name: 'Through The Lens\n (Online Event)',
    img: '/events/ThroughTheLens.jpeg',
    type: 'Non Technical',
    time: '14th - 23th March',
    location: 'Online',
    teamSize: '2',
    rules: [
      'Submit original photographs based on the given theme.',
      'Editing is allowed but should not misrepresent reality.',
      'Deadline: 2 days before event closure.',
    ],
    description:
      'Capture moments through your lens! Submit your best themed photographs in this online photography contest.',
  },
  {
    id: 9,
    name: 'Breaking Math (Quiz)',
    img: '/events/Numerix nexus .png',
    type: 'Math',
    time: '10:00 AM',
    location: 'DH-30 (DOM)',
    teamSize: '2-4',
    rules: [
      'Quiz format with multiple rounds.',
      'Each round eliminates lower-scoring teams.',
      'No external help allowed.',
    ],
    description:
      'Breaking Math is an engaging mathematical quiz designed to test participants’problem-solving skills and mathematical expertise. This event provides a unique platform for participants to showcase their knowledge and analytical abilities.',
  },
  {
    id: 11,
    name: 'Infinity Adrift (Shipwreck)',
    img: '/events/Infinity Adrift.webp',
    type: 'Math',
    time: '11:00 AM',
    location: 'LH 5',
    teamSize: '1',
    rules: [
      'Individual event.',
      'Participants defend themselves to the captains (judges).',
      'Further rules disclosed on spot.',
      'Judge’s decision is final.',
    ],
    description:
      'Defend your mathematical character or concept in this test of logic, persuasion, and creativity!',
  },
  {
    id: 12,
    name: 'Pi-Rates of the Lost Equation \n (Treasure Hunt)',
    img: '/events/Pirates of the Lost Equation.jpeg',
    type: 'Math',
    time: '10:00 AM',
    location: 'LH 48',
    teamSize: '2-4',
    rules: [
      'Solve math-based clues to find the next location.',
      'Teamwork and problem-solving are key!',
      'Fastest team to find the treasure wins.',
    ],
    description:
      'A thrilling math-based treasure hunt where logic and problem-solving will lead you to victory!',
  },
  {
    id: 13,
    name: 'Conundrum Carnival (Potpourri)',
    img: '/events/Pirates of the Lost Equation.jpeg',
    type: 'Math',
    time: '1:45 PM',
    location: 'Ramanujam Hall',
    teamSize: '3',
    rules: [
      'It is a team Event',
      'Three Participants per team',
      'the Event consist of 3 rounds including prelims' ,
      'Usage of any kind of electronic gadgets is strictly prohibited',
      'Further rules will be disclosed on spot',
      "Judge's decision is final",
    ],
    description:
      "It is a fun and interactive team event designed to test participants' team spirit, understanding, and collaboration. Through engaging rounds, teams will tackle mathematical questions and challenges that assess their problem-solving skills and synergy.",
  },
]

export default eventData;
