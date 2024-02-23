// mimic blog posts on a server

// array of existing posts
const posts  = [
    {title: 'Post one', Body: 'This is post one',},
    {title: 'Post two', Body: 'This is post two'}
];

// Method to get all posts and output them to the HTML page.
function getPosts(){
    setTimeout(() => {
        // retrieval of posts
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

// Function / Promise ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Method to create a new blog post using a promise
function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          posts.push(post); 

          // you should error check, but in this case not needed
          const error = false; 

          if (!error){
            resolve();
          }else
          {
            reject('Error: Something went wrong');
          }
        }, 2000);
    });
}

// Promise ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// because of the promise, we can now use .then to dop something when it gets resolved
// createPost({title: 'Post three', body: 'This is post three'})
//     .then(getPosts)
//     .catch(err => console.log(err));

// Promise.all ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// promise all example
// const promise1 = Promise.resolve('Hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => 
// setTimeout(resolve, 2000, 'Goodbye'));

// Promise.all([promise1, promise2, promise3, promise4])
//     .then(values => console.log(values))
//     .catch(err => console.log(err));

// Promise / Fetch ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// fetch returns a promise, so you have to do 2 .then's
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json());
//     // .then(json => console.log(json))

// Async / Await. a way to handle responses (more elegant way to handle promises)
// async function init () {
//     // waits for an asynchonous action complete
//     await createPost({title: "Post title here", body : "A new post"});

//     getPosts();
// }

// Async / Await / Fetch ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// async function fetchUsers (){
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');

//     // get the json data from the result
//     const data = res.json();

//     console.log(data);
// }

// fetchUsers();

// Async / Await / Fetch / Try Catch ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// async function fetchUsers() {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users');

//         // if there's an issue with the response
//         if (!res.ok) {
//             throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
//         }

//         // get the JSON data from the result
//         const data = await res.json();

//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching users:', error.message);
//     }
// }

// fetchUsers();


// Async / Await / Fetch / Try Catch / 

async function fetchAllUsers() {
    const [error, data] = await handlePromise(fetch('https://jsonplaceholder.typicode.com/users'));
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Data:', await data.json());
    }
}

async function handlePromise(promise) {
    try {
        const data = await promise;
        return [null, data];
    } catch (error) {
        return [error];
    }
}


fetchAllUsers();