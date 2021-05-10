// write your code here

// fetch("http://localhost:3000/images")
// .then(function(response)  {
// return response.json() 
// })
// .then(function(images) {
//     console.log(images)
// })







// <!-- <article class="image-card">
//         <h2 class="title">Title of image goes here</h2>
//         <img src="./assets/image-placeholder.jpg" class="image" />
//         <div class="likes-section">
//           <span class="likes">0 likes</span>
//           <button class="like-button">♥</button>
//         </div>
//         <ul class="comments">
//           <li>Get rid of these comments</li>
//           <li>And replace them with the real ones</li>
//           <li>From the server</li>
//         </ul>
//         <form class="comment-form">
//           <input
//             class="comment-input"
//             type="text"
//             name="comment"
//             placeholder="Add a comment..."
//           />
//           <button class="comment-button" type="submit">Post</button>
//         </form>
//       </article> -->

// CREATE ARTICLE

function createCard(cardData) {

let cardEl = document.createElement("article")
cardEl.setAttribute("class", "image-card")

let titleEl = document.createElement("h2")
titleEl.setAttribute("class", "title")
titleEl.innerText = cardData.title
cardEl.append(titleEl)

let imgEl = document.createElement("img")
imgEl.setAttribute("src", cardData.image)
imgEl.setAttribute("class", "image")
cardEl.append(imgEl)

let likesSectionEl = document.createElement("div")
cardEl.append(likesSectionEl)

let likeEl = document.createElement("span")
likeEl.setAttribute("class", "likes")
likeEl.innerText = cardData.likes
likesSectionEl.append(likeEl)

let likeButtonEl = document.createElement("button")
likeButtonEl.setAttribute("class", "like-button")
likeButtonEl.innerText = "♥"
likesSectionEl.append(likeButtonEl)

let commentEl = document.createElement("ul")
commentEl.setAttribute("class", "comments")
commentEl.setAttribute("id", cardData.comments.content)
cardEl.append(commentEl)


let commentForm = document.createElement("form")
commentForm.setAttribute("class", "comment-form")
cardEl.append(commentForm)

let commentInput = document.createElement("input")
commentInput.setAttribute("class", "comment-input")
commentInput.setAttribute("type", "text")
commentInput.setAttribute("placeholder", "Add a comment...")
commentForm.append(commentInput)

let submitButton = document.createElement("button")
submitButton.setAttribute("class", "comment-button")
submitButton.setAttribute("type", "submit")
submitButton.innerText = "Post"
commentForm.append(submitButton)

}

let container = document.querySelector(".image-container")

function creatAllCard(cards){
for(const card of cards ) {
    const createdCard = createCard(card)
    container.append(createdCard)
}
}

fetch("http://localhost:3000/images")
.then (function(response){
const data = response.json()
console.log("First log", data)
return data
})

.then (function(data){
    console.log("Second log", data)
    creatAllCard(data)
})