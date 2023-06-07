
// -------BOOKMARK-SELECTED--------

const bookmark = document.querySelector('[data-js="bookmark"]');
bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("selected");

     
})

 

// -------SHOW-ANSWER-BUTTON--------

const button = document.querySelector('button');
const answer = document.querySelector('[data-js="answer"]');
button.addEventListener("click", () => {
    
    const initialText = 'show answer';
    answer.classList.toggle("hide");
    if (button.textContent.includes(initialText)) {
      button.textContent = 'Hide answer';
    } else {
      button.textContent = initialText;
    }
    
     
})

// // -------DARK-MOOD-BUTTON--------
// const dark = document.querySelector('[data-js="darkmood"]');
//       dark.addEventListener("click", () => {
//      dark.classList.toggle("dark");

     
// })


// const form = document.querySelector('[data-js="form"]');
// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     console.log("submit");
//     // const userQuestion =document.querySelector('[data-js="userQuestion"]');
//     // const userAnswer =document.querySelector('[data-js="userAnswer"]');
//     // const userTag =document.querySelector('[data-js="userTag"]');
//     // const newSection = document.createElement("section");
//     // newSection.classList.add("body","product");
//     document.form.append(newSection);
//     newSection.innerHTML= `
//     <a href="" class="bookmark" data-js="bookmark">🔖</a>
//             <p class="ques">${userQuestion}</p>
//             <button type="button" data-js="button">show answer</button>
//             <ul>
//                 <a href="">#${userTag}</a>
                
//             </ul>`
     
// })






//  -------functions--------\

// const hideButton = document.querySelector('[data-js="button"]');
//  hideButton.addEventListener("click", () => {
//     hideButton.classList.add("hide");
//     // mainElement.classList.remove("dark");
//     // hideButton.classList.add("hide");
//   });

