


// -------Add-A-QUESTION--------


const test = document.querySelector('[data-js="test"]');
const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (e) => {
    e.preventDefault()
    // console.log("submit");
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
    biggerForm.append(newSection);
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
    //  console.log(newSection);       
    form.reset( )
});

// -------COUNTER--------


// text.addEventListener("input",(evt) =>{
//     let a =characterCounter(evt.target.value);
//     const counterBox = document.querySelector("p");
//     if (counterBox.textContent == `${a} characters left`) {
//         counterBox.textContent ==``;
//     }else{
//     counterBox.textContent = `${a} character left`;
// }
// })




//  -------------------------------
let  text = document.getElementById('userQuestion');
let  text_2 =document.getElementById('userAnswer');






text.addEventListener("input",(evt) => {
    characterCounter(evt.target)
})
text_2.addEventListener("input",(evt) => {
    characterCounter(evt.target)
})


function characterCounter(input) {
    let b = 150 - input.value.length ;

    let counterBox = document.querySelector("p");

    if (input == text) {
        counterBox = document.querySelector("p");
    } else {
        counterBox = document.getElementById("text_2");
    }
    counterBox.textContent == `${b} characters left`
    if (counterBox.textContent == `${b} characters left`) {
        counterBox.textContent ==``;
    }else{
        if (b == 1) {
            counterBox.textContent = `${b} character left`;
             } else{
             counterBox.textContent = `${b} characters left`;
             }
    }
    
    return counterBox

}
    
    
    
    
    








// function characterCounter(x) {
//     let characterLeft = 150 - x.length ;
//     return   characterLeft 
    
// }