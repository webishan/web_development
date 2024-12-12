// async function getData() {
//     // simulate getting data from server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }


// Settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully

async function getData() {
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
            }),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        })

      let data = await x.json()
      return data
}

async function main() {
    console.log("Loading modules")

    console.log("Do something else")

    console.log("Load data")
    let data = await getData()

    console.log(data)

    console.log("Process data")

    console.log("task 2")

}

main()

// Example POST method implementation:
// async function postData(url="", data = {}) {
//     const response = await fetch(url, {
//         method: "POST",
//         header: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//     });
//     return response.json();
// }

// postData("https://example.com/answer", { answer: 42 }).then((data) => {
//     console.log(data);
// });

// callback approach:
// data.then((v) => {

// console.log(data)

// console.log("Process data")

// console.log("task 2")

// })