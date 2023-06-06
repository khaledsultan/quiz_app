




const test = document.querySelector('[data-js="test"]');
const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("submit");
    const formElements = e.target.elements;
    // console.log("formElements", formElements);

    const userQuestion = formElements.userQuestion.value;
    // console.log(userQuestion)
    
    const userAnswer = formElements.userAnswer.value;
    // console.log(userAnswer)

    const userTag = formElements.tag.value;
    // console.log(userTag)

    const newSection = document.createElement("section");
    // newSection.classList.add("body","product");
    test.append(newSection);
    // test.append(newSection);
    newSection.innerHTML= `
            <a href="" class="bookmark" data-js="bookmark">🔖</a>
            <p class="ques">${userQuestion}</p>
            <button type="button" data-js="button">show answer</button>
            <div class="show hide" data-js="answer">
                ${userAnswer} </div>
            <ul>
                <a href="">#${userTag}</a>
            </ul>`
     console.log(newSection);       
     
});