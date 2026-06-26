import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Calculator,
  Code2,
  Cpu,
  Dumbbell,
  FlaskConical,
  Music4,
  Palette,
  PenLine,
} from "lucide-react";

export type CourseCategory =
  | "Coding"
  | "STEM"
  | "Arts"
  | "Chess"
  | "Music"
  | "Math"
  | "Fitness"
  | "Writing";

export type CourseIconName =
  | "Brain"
  | "Code2"
  | "Cpu"
  | "Palette"
  | "FlaskConical"
  | "PenLine"
  | "Music4"
  | "Calculator"
  | "Dumbbell";

export const courseIcons: Record<CourseIconName, LucideIcon> = {
  Brain,
  Code2,
  Cpu,
  Palette,
  FlaskConical,
  PenLine,
  Music4,
  Calculator,
  Dumbbell,
};

export interface CourseInstructor {
  name: string;
  title: string;
  initials: string;
  bg: string;
  rating: number;
  students: number;
  bio: string;
}

export interface CourseModule {
  title: string;
  lessons: number;
  topics: string[];
}

export interface Course {
  slug: string;
  title: string;
  desc: string;
  longDesc: string;
  grades: string;
  tag: string;
  category: CourseCategory;
  icon: CourseIconName;
  image: string;
  banner?: string;
  imageAlt: string;
  bg: string;
  border: string;
  iconBg: string;
  tagColor: string;
  duration: string;
  sessionLength: string;
  schedule: string;
  price: string;
  popular: boolean;
  outcomes: string[];
  modules: CourseModule[];
  instructor: CourseInstructor;
}

export const courses: Course[] = [
  {
    slug: "chess-fundamentals",
    title: "Chess Fundamentals",
    desc: "Strategy, critical thinking, and patience — through the timeless game.",
    longDesc:
      "Chess Fundamentals introduces young learners to the royal game through structured lessons, live puzzles, and friendly tournament play. Students build pattern recognition, forward planning, and resilience while having fun with peers at their level.",
    grades: "Grades 1–5",
    tag: "Chess",
    category: "Chess",
    icon: "Brain",
    image: "/images/courses/chess-fundamentals.png",
    imageAlt: "Young student with books developing strategic thinking skills",
    bg: "bg-amber-50",
    border: "border-amber-200",
    iconBg: "bg-amber-400",
    tagColor: "bg-amber-100 text-amber-700 border-amber-200",
    duration: "8-week program",
    sessionLength: "45 min sessions",
    schedule: "Tues & Thu · 4:00 PM ET",
    price: "From $29/session",
    popular: false,
    outcomes: [
      "Master opening principles and basic tactics",
      "Develop strategic thinking and patience",
      "Compete confidently in friendly mini-tournaments",
      "Build focus and sportsmanship through play",
    ],
    modules: [
      {
        title: "Board Basics & Piece Movement",
        lessons: 4,
        topics: ["Setup & notation", "Piece values", "Check & checkmate", "Castling rules"],
      },
      {
        title: "Tactics & Patterns",
        lessons: 5,
        topics: ["Forks & pins", "Discovered attacks", "Basic endgames", "Puzzle drills"],
      },
      {
        title: "Strategy & Tournament Prep",
        lessons: 4,
        topics: ["Opening repertoire", "Middle-game plans", "Time management", "Live tournament"],
      },
    ],
    instructor: {
      name: "Marcus Thorne",
      title: "Strategic Logic & Chess",
      initials: "MT",
      bg: "bg-amber-400",
      rating: 5.0,
      students: 980,
      bio: "FIDE-rated coach with 10+ years teaching chess to young learners. Marcus makes complex strategy accessible through stories, puzzles, and playful competition.",
    },
  },
  {
    slug: "python-explorers",
    title: "Python Explorers",
    desc: "Build real apps and games with Python — from Hello World to full interactive projects.",
    longDesc:
      "Python Explorers takes students from their first line of code to building interactive games and utilities. Through live coding sessions, pair programming, and project showcases, learners gain confidence with real-world programming skills.",
    grades: "Ages 8–14",
    tag: "Coding",
    category: "Coding",
    icon: "Code2",
    image: "/images/courses/python-explorers.png",
    imageAlt: "Young coder learning Python on a laptop",
    bg: "bg-primary-50",
    border: "border-primary-200",
    iconBg: "bg-primary",
    tagColor: "bg-primary-100 text-primary-dark border-primary-200",
    duration: "10-week program",
    sessionLength: "60 min sessions",
    schedule: "Mon & Wed · 5:30 PM ET",
    price: "From $35/session",
    popular: true,
    outcomes: [
      "Write clean Python code with variables, loops, and functions",
      "Build a playable game from scratch",
      "Debug errors independently using best practices",
      "Present a capstone project to classmates",
    ],
    modules: [
      {
        title: "Python Foundations",
        lessons: 4,
        topics: ["Variables & data types", "Input/output", "Conditionals", "Loops"],
      },
      {
        title: "Functions & Logic",
        lessons: 5,
        topics: ["Defining functions", "Lists & dictionaries", "Error handling", "Mini challenges"],
      },
      {
        title: "Game Development Capstone",
        lessons: 5,
        topics: ["Game loop design", "Sprites & collision", "Scoring systems", "Project showcase"],
      },
    ],
    instructor: {
      name: "David Ray",
      title: "Applied Robotics & Coding",
      initials: "DR",
      bg: "bg-sky-500",
      rating: 4.9,
      students: 720,
      bio: "Software engineer turned educator, David specializes in making coding approachable for kids through project-based learning and live debugging sessions.",
    },
  },
  {
    slug: "robotics-makers-lab",
    title: "Robotics Makers Lab",
    desc: "Hands-on engineering challenges that solve real-world problems.",
    longDesc:
      "Robotics Makers Lab combines mechanical design, electronics, and programming in a collaborative workshop environment. Students design, build, and iterate on robots that complete real challenges — from line-following to obstacle navigation.",
    grades: "Ages 10–15",
    tag: "Robotics",
    category: "STEM",
    icon: "Cpu",
    image: "/images/courses/robotics-makers-lab.png",
    imageAlt: "Student building with colorful blocks during a robotics lesson",
    bg: "bg-sky-50",
    border: "border-sky-200",
    iconBg: "bg-sky-500",
    tagColor: "bg-sky-100 text-sky-700 border-sky-200",
    duration: "12-week program",
    sessionLength: "90 min sessions",
    schedule: "Sat · 10:00 AM ET",
    price: "From $45/session",
    popular: false,
    outcomes: [
      "Understand sensors, motors, and microcontrollers",
      "Design and prototype a working robot",
      "Program autonomous behaviors with block and text code",
      "Document an engineering design process",
    ],
    modules: [
      {
        title: "Engineering Foundations",
        lessons: 4,
        topics: ["Mechanical systems", "Circuit basics", "Sensor types", "Safety protocols"],
      },
      {
        title: "Build & Program",
        lessons: 6,
        topics: ["Chassis design", "Motor control", "Sensor integration", "Autonomous navigation"],
      },
      {
        title: "Challenge Arena",
        lessons: 4,
        topics: ["Competition rules", "Iteration cycles", "Team collaboration", "Final showcase"],
      },
    ],
    instructor: {
      name: "David Ray",
      title: "Applied Robotics",
      initials: "DR",
      bg: "bg-sky-500",
      rating: 4.9,
      students: 720,
      bio: "Former robotics engineer who brings real-world prototyping into every session. David guides students through the full design-build-test cycle.",
    },
  },
  {
    slug: "art-digital-design",
    title: "Art & Digital Design",
    desc: "Express creativity through drawing, illustration and digital media.",
    longDesc:
      "Art & Digital Design nurtures creative confidence through traditional drawing fundamentals and digital illustration tools. Students explore color theory, composition, and character design while building a portfolio they can share with pride.",
    grades: "Ages 6–12",
    tag: "Arts",
    category: "Arts",
    icon: "Palette",
    image: "/images/courses/art-digital-design.png",
    imageAlt: "Creative student with notebook and bright ideas for art class",
    bg: "bg-pink-50",
    border: "border-pink-200",
    iconBg: "bg-pink-500",
    tagColor: "bg-pink-100 text-pink-700 border-pink-200",
    duration: "8-week program",
    sessionLength: "45 min sessions",
    schedule: "Wed & Fri · 4:30 PM ET",
    price: "From $29/session",
    popular: false,
    outcomes: [
      "Apply color theory and composition principles",
      "Create digital illustrations with professional tools",
      "Develop a personal art style and portfolio",
      "Give and receive constructive creative feedback",
    ],
    modules: [
      {
        title: "Drawing Fundamentals",
        lessons: 4,
        topics: ["Line & shape", "Shading techniques", "Perspective basics", "Still life studies"],
      },
      {
        title: "Digital Illustration",
        lessons: 5,
        topics: ["Layer workflows", "Brushes & textures", "Character design", "Background scenes"],
      },
      {
        title: "Portfolio & Showcase",
        lessons: 3,
        topics: ["Art critique", "Portfolio curation", "Presentation skills", "Gallery day"],
      },
    ],
    instructor: {
      name: "Elena Vance",
      title: "Digital Media & Arts",
      initials: "EV",
      bg: "bg-pink-500",
      rating: 4.8,
      students: 1560,
      bio: "Professional illustrator and art educator who helps kids find their creative voice. Elena blends traditional techniques with modern digital tools.",
    },
  },
  {
    slug: "science-lab",
    title: "Science Lab",
    desc: "Explosive experiments and fascinating discoveries in biology, chemistry, and physics.",
    longDesc:
      "Science Lab brings the wonder of discovery into every session with safe, hands-on experiments across biology, chemistry, and physics. Students learn the scientific method while exploring phenomena that spark lifelong curiosity.",
    grades: "Ages 7–13",
    tag: "Science",
    category: "STEM",
    icon: "FlaskConical",
    image: "/images/courses/science-lab.png",
    imageAlt: "Student ready for hands-on science and STEM exploration",
    bg: "bg-green-50",
    border: "border-green-200",
    iconBg: "bg-green",
    tagColor: "bg-green-100 text-green-700 border-green-200",
    duration: "10-week program",
    sessionLength: "60 min sessions",
    schedule: "Tue · 5:00 PM ET",
    price: "From $32/session",
    popular: false,
    outcomes: [
      "Apply the scientific method to real experiments",
      "Understand core concepts in biology, chemistry, and physics",
      "Record observations and draw evidence-based conclusions",
      "Present findings in a science fair format",
    ],
    modules: [
      {
        title: "Scientific Method & Safety",
        lessons: 3,
        topics: ["Hypothesis design", "Lab safety", "Measurement tools", "Data recording"],
      },
      {
        title: "Life & Physical Sciences",
        lessons: 6,
        topics: ["Cell biology", "Chemical reactions", "Forces & motion", "Energy transfer"],
      },
      {
        title: "Science Fair Capstone",
        lessons: 3,
        topics: ["Independent project", "Experiment design", "Results analysis", "Presentation day"],
      },
    ],
    instructor: {
      name: "Dr. Sarah Chen",
      title: "Biochemistry & STEM",
      initials: "SC",
      bg: "bg-primary",
      rating: 4.9,
      students: 1240,
      bio: "PhD biochemist with a gift for making complex science exciting. Dr. Chen designs experiments that are safe, memorable, and deeply educational.",
    },
  },
  {
    slug: "creative-writing",
    title: "Creative Writing",
    desc: "Storytelling, world-building, and finding your unique voice on the page.",
    longDesc:
      "Creative Writing empowers young authors to craft compelling stories, build vivid worlds, and develop their unique literary voice. Through workshops, peer feedback, and published author visits, students grow as confident writers.",
    grades: "Ages 7–14",
    tag: "Writing",
    category: "Writing",
    icon: "PenLine",
    image: "/images/courses/creative-writing.png",
    imageAlt: "Student in a live online writing class with notebook and headset",
    bg: "bg-orange-50",
    border: "border-orange-200",
    iconBg: "bg-orange",
    tagColor: "bg-orange-100 text-orange-700 border-orange-200",
    duration: "8-week program",
    sessionLength: "45 min sessions",
    schedule: "Thu · 4:00 PM ET",
    price: "From $29/session",
    popular: false,
    outcomes: [
      "Craft engaging characters and plot structures",
      "Build immersive fictional worlds",
      "Revise work using constructive feedback",
      "Publish a finished short story or poem",
    ],
    modules: [
      {
        title: "Story Foundations",
        lessons: 4,
        topics: ["Character development", "Setting & world-building", "Plot arcs", "Show don't tell"],
      },
      {
        title: "Genre Exploration",
        lessons: 4,
        topics: ["Fantasy writing", "Mystery & suspense", "Poetry forms", "Personal narrative"],
      },
      {
        title: "Workshop & Publication",
        lessons: 3,
        topics: ["Peer critique", "Revision strategies", "Editing polish", "Author showcase"],
      },
    ],
    instructor: {
      name: "Elena Vance",
      title: "Creative Writing & Literature",
      initials: "EV",
      bg: "bg-pink-500",
      rating: 4.8,
      students: 1560,
      bio: "Published author and writing coach who creates a supportive workshop environment where every student's voice is celebrated.",
    },
  },
  {
    slug: "music-theory-basics",
    title: "Music Theory Basics",
    desc: "Rhythm, melody, and harmony — the building blocks of every great song.",
    longDesc:
      "Music Theory Basics introduces young musicians to the language of music through interactive lessons, ear training, and composition exercises. No prior experience required — just curiosity and a love of sound.",
    grades: "Ages 6–12",
    tag: "Music",
    category: "Music",
    icon: "Music4",
    image: "/images/The_Friend.85cbfd7e36821d7569bc2fbfb9894a2c.webp",
    imageAlt: "Children enjoying a collaborative music lesson",
    bg: "bg-violet-50",
    border: "border-violet-200",
    iconBg: "bg-primary-light",
    tagColor: "bg-primary-100 text-primary-dark border-primary-200",
    duration: "8-week program",
    sessionLength: "45 min sessions",
    schedule: "Mon · 4:00 PM ET",
    price: "From $29/session",
    popular: false,
    outcomes: [
      "Read basic sheet music and rhythm notation",
      "Identify scales, intervals, and chords by ear",
      "Compose a short original melody",
      "Collaborate in a group performance piece",
    ],
    modules: [
      {
        title: "Rhythm & Notation",
        lessons: 4,
        topics: ["Beat & tempo", "Note values", "Time signatures", "Clapping exercises"],
      },
      {
        title: "Melody & Harmony",
        lessons: 4,
        topics: ["Major scales", "Intervals", "Simple chords", "Ear training games"],
      },
      {
        title: "Composition & Performance",
        lessons: 3,
        topics: ["Melody writing", "Arrangement basics", "Rehearsal skills", "Recital day"],
      },
    ],
    instructor: {
      name: "Marcus Thorne",
      title: "Music & Performance",
      initials: "MT",
      bg: "bg-amber-400",
      rating: 5.0,
      students: 980,
      bio: "Multi-instrumentalist and music educator who makes theory fun through games, movement, and collaborative jam sessions.",
    },
  },
  {
    slug: "math-masters",
    title: "Math Masters",
    desc: "Build number fluency and problem-solving confidence through engaging challenges.",
    longDesc:
      "Math Masters transforms arithmetic and algebra into an adventure of puzzles, real-world applications, and team challenges. Students develop computational fluency while learning to think like mathematicians.",
    grades: "Grades 3–8",
    tag: "Math",
    category: "Math",
    icon: "Calculator",
    image: "/images/The_Traveler.883c94f365d9a10a4f93c224c51ef0a7.webp",
    imageAlt: "Student solving math problems with confidence",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    iconBg: "bg-indigo-500",
    tagColor: "bg-indigo-100 text-indigo-700 border-indigo-200",
    duration: "10-week program",
    sessionLength: "60 min sessions",
    schedule: "Wed · 5:00 PM ET",
    price: "From $32/session",
    popular: false,
    outcomes: [
      "Strengthen arithmetic and pre-algebra skills",
      "Solve multi-step word problems systematically",
      "Apply math to real-world scenarios",
      "Compete in friendly math challenge events",
    ],
    modules: [
      {
        title: "Number Sense & Operations",
        lessons: 4,
        topics: ["Mental math tricks", "Fractions & decimals", "Ratios & proportions", "Estimation"],
      },
      {
        title: "Problem Solving Strategies",
        lessons: 5,
        topics: ["Word problems", "Logic puzzles", "Pattern recognition", "Visual models"],
      },
      {
        title: "Algebra Readiness",
        lessons: 4,
        topics: ["Variables & expressions", "Simple equations", "Graphing basics", "Math olympiad prep"],
      },
    ],
    instructor: {
      name: "Dr. Sarah Chen",
      title: "Mathematics & STEM",
      initials: "SC",
      bg: "bg-primary",
      rating: 4.9,
      students: 1240,
      bio: "Mathematics specialist who turns abstract concepts into tangible puzzles. Dr. Chen's students consistently report newfound confidence in school math.",
    },
  },
  {
    slug: "active-kids-fitness",
    title: "Active Kids Fitness",
    desc: "Fun movement, coordination, and healthy habits for growing bodies.",
    longDesc:
      "Active Kids Fitness combines age-appropriate exercise, coordination drills, and mindfulness in live virtual sessions. Students build strength, flexibility, and healthy habits in a supportive, non-competitive environment.",
    grades: "Ages 5–12",
    tag: "Fitness",
    category: "Fitness",
    icon: "Dumbbell",
    image: "/images/banner01.png",
    imageAlt: "Children staying active in a fun group fitness session",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    iconBg: "bg-green",
    tagColor: "bg-green-100 text-green-700 border-green-200",
    duration: "6-week program",
    sessionLength: "30 min sessions",
    schedule: "Daily · 3:30 PM ET",
    price: "From $19/session",
    popular: false,
    outcomes: [
      "Improve coordination, balance, and flexibility",
      "Learn proper form for age-appropriate exercises",
      "Develop consistent healthy movement habits",
      "Practice mindfulness and body awareness",
    ],
    modules: [
      {
        title: "Movement Foundations",
        lessons: 3,
        topics: ["Warm-up routines", "Balance drills", "Stretching basics", "Body awareness"],
      },
      {
        title: "Strength & Coordination",
        lessons: 4,
        topics: ["Core exercises", "Agility games", "Partner activities", "Endurance building"],
      },
      {
        title: "Mindful Movement",
        lessons: 3,
        topics: ["Cool-down routines", "Breathing exercises", "Goal setting", "Fitness journal"],
      },
    ],
    instructor: {
      name: "Marcus Thorne",
      title: "Youth Fitness & Wellness",
      initials: "MT",
      bg: "bg-amber-400",
      rating: 5.0,
      students: 980,
      bio: "Certified youth fitness coach who makes movement joyful. Marcus emphasizes form, fun, and building habits that last a lifetime.",
    },
  },
];

export const categoryFilters = [
  "All",
  "Coding",
  "STEM",
  "Arts",
  "Chess",
  "Music",
  "Math",
  "Fitness",
  "Writing",
] as const;

export type CategoryFilter = (typeof categoryFilters)[number];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

export function getRelatedCourses(course: Course, limit = 3): Course[] {
  return courses
    .filter((c) => c.slug !== course.slug && c.category === course.category)
    .slice(0, limit);
}

export function getCourseSlugs(): string[] {
  return courses.map((course) => course.slug);
}
