const postBTN = document.querySelector("#postBTN");
const postContent = document.querySelector("#post");

const postArr = []

postBTN.addEventListener("click", newPost)

function newPost(){
    let newPost = {
        title: postContent.value
    }
    postArr.push(newPost)
    console.log(postArr)
}