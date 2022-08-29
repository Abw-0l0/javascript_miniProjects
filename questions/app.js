const question = document.querySelectorAll(".question");

question.forEach(function(orange) {
    const btn = orange.querySelector(".question-btn");

    btn.addEventListener("click", function(){

        question.forEach(function(mango){
            if(mango !== orange ){
                mango.classList.remove("show-text");
            }
        });

        orange.classList.toggle("show-text");
    })
});

// const btn = document.querySelectorAll(".question-btn");

// btn.forEach(function(item){
//     item.addEventListener("click", function(e){
//         const abc = e.currentTarget.parentElement.parentElement;
//         abc.classList.toggle("show-text");
//     });
// });