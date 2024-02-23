// mimic blog posts on a server

const posts  = [
    {title: 'Post one', Body: 'This is post one',},
    {title: 'Post two', Body: 'This is post two'}
];

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

function createPost(post, callback){
    setTimeout(() => {
      posts.push(post);  
      callback();
    }, 2000);
}

// callback - when a post is created | all lines of code have been run, it will call the getposts method
createPost({title: 'post three', body: 'This is post three'}, getPosts);

// callback HELL
// old pattern for handling asynchonous functions
step1(function (value1) {
    step2(function(value2){
        step3(function(value3){
            step4(function(value4){
                step5(function(value5){
                    step6(function(value6){
                        step7(function(value7){
                            step8(function(value8){
                                step9(function(value9){
                                    step10(function(value10){
                                        step11(function(value11){
                                            step12(function(value12){
                                                step13(function(value13){
                                                    step14(function(value14){
                                                        step15(function(value15){
                                                            // You have arrived at the pyramid of doom (callback hell)
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});