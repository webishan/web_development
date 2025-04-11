

// Select the database to use.
use('SigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
  {
    "name": "WordPress",
    "Price": 20000,
    "Instructor": "Ishan"
  },
  {
    "name": "React JS",
    "Price": 25000,
    "Instructor": "Amina"
  },
  {
    "name": "Python for Beginners",
    "Price": 18000,
    "Instructor": "Zayed"
  },
  {
    "name": "Data Science Bootcamp",
    "Price": 30000,
    "Instructor": "Nusrat"
  },
  {
    "name": "MERN Stack Development",
    "Price": 35000,
    "Instructor": "Tanvir"
  },
  {
    "name": "Graphic Design Masterclass",
    "Price": 15000,
    "Instructor": "Rafi"
  },
  {
    "name": "Digital Marketing Essentials",
    "Price": 22000,
    "Instructor": "Sadia"
  },
  {
    "name": "Machine Learning with Python",
    "Price": 32000,
    "Instructor": "Rahim"
  },
  {
    "name": "UI/UX Design Fundamentals",
    "Price": 21000,
    "Instructor": "Faria"
  },
  {
    "name": "Android App Development",
    "Price": 28000,
    "Instructor": "Nayeem"
  }
]
);



// Print a message to the output window.
console.log(`Done inserting data`);

