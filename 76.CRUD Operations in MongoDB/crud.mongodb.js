// CRUD Operations

// CREATE
use("CrudDb")

// db.createCollection("courses")

// db.courses.insertOne({
//     name: "Ishan's WordPress Theme Development free course",
//     price: 0,
//     assignments: 12,
//     projects: 45
// })

// db.courses.insertMany([
//     {
//       "name": "Ishan's WordPress Theme Development free course",
//       "price": 0,
//       "assignments": 12,
//       "projects": 45
//     },
//     {
//       "name": "Advanced React with TypeScript Bootcamp",
//       "price": 49,
//       "assignments": 15,
//       "projects": 10
//     },
//     {
//       "name": "Python for Data Science: Beginner to Pro",
//       "price": 0,
//       "assignments": 20,
//       "projects": 8
//     },
//     {
//       "name": "Fullstack Web Dev with MERN Stack",
//       "price": 75,
//       "assignments": 18,
//       "projects": 12
//     },
//     {
//       "name": "Intro to Machine Learning with Scikit-Learn",
//       "price": 30,
//       "assignments": 10,
//       "projects": 6
//     },
//     {
//       "name": "Deep Learning Specialization",
//       "price": 99,
//       "assignments": 25,
//       "projects": 5
//     },
//     {
//       "name": "Git & GitHub Crash Course",
//       "price": 0,
//       "assignments": 5,
//       "projects": 2
//     },
//     {
//       "name": "Building REST APIs with Node.js",
//       "price": 40,
//       "assignments": 10,
//       "projects": 7
//     },
//     {
//       "name": "Flutter App Development for Beginners",
//       "price": 35,
//       "assignments": 14,
//       "projects": 9
//     },
//     {
//       "name": "Linux Command Line Basics",
//       "price": 0,
//       "assignments": 8,
//       "projects": 3
//     }
//   ]
//   )

//READ

// let a = db.courses.find({price:0})
// console.log(a)

// console.log(a.count())

// console.log(a.toArray())


// let b = db.courses.findOne({price:0})

// console.log(b)


// UPDATE

// db.courses.updateOne({price: 0}, {$set:{price:100}})

// db.courses.updateMany({price:0},{$set:{price:1000}})


// DELETE

db.courses.deleteOne({price:1000})

db.courses.deleteMany({price:1000})
