
var questionContainer = document.getElementById('questions')
var score = 0;
questionContainer.className = 'question_container' // class
// function Question(title, options, answer){
//     this.title = title
//     this.options = options
//     this.answer = answer
// }
// var question1 = new Question("what is the capital of pakistan", ['karachin', 'lahore' , 'islamabad' , 'panjab' , 'quetta'], "islamabad") 
// var question2 = new Question("what is the full form of HTML", ['hypertext markup language', 'hypertext mouaz language', 'hypertext mouaz language',], 'hypertext markup language')
// var question3 = new Question("what is world cleanest city", ['karachi', 'Copenhagen', 'Brisbane', 'new york', 'karachi'])
// console.log(question1)
// console.log(question2)
// console.log(question3)

var questions = [
    {
        title: "1) Who is the best teacher in Sylani?",
        options: [' a) Sir Rizwan Jamal <i class="fa-solid fa-heart"></i>', ' b) Sir kashif Sulaiman <i class="fa-solid fa-heart"></i> ', ' c) Both (a) and (b)', ' d) none of these'],
        answer: " c) Both (a) and (b)" // gape is imp
    },
    {
        title: "2) what is the full form of HTML?",
        options: ['hypertext markup language', 'hypertext marketing language', 'hypertext mouaz language','hypertext mozzila language'], 
        answer: "hypertext markup language"
    },
    {
        title: "3) what is world cleanest city?",
        options: ['karachi', 'Copenhagen', 'New york', 'Washington'],
        answer: "Copenhagen"
    },
    {
        title: "4) Which currency is used in Spain?",
        options: ['Euro', 'Dollar', 'gbp', 'Renminbi '],
        answer: "Euro"
    },
    {
        title: "5) What is the capital of pakistan?",
        options: ['Karachi', 'Lahore', 'Islamabad', 'Panjab'],
        answer: "Islamabad"
    },
    {
        title: "6) WHO stands for?",
        options: ['World Health Organized', 'World Health Organization', 'World Help Organization', 'World Healthy Organized'],
        answer: "World Health Organization"
    },
    {
        title: "7) Best PM Of Pakistan?",
        options: ['Nawaz Sharif', 'Imran Khan', 'Bhutto', 'Shebaz Sharif'],
        answer: "Imran Khan"
    },
    {
        title: "8) Arshad Nadeem (Gold medalist) javelin throw record was?",
        options: ['80.21 meters', '90.18 meters', '92 meters', '87 meters'],
        answer: "90.18 meters"
    },
    {
        title: "9) pakistan army ranking in world?",
        options: ['3rd', '9th', '4rth', '7th'],
        answer: "9th"
    },
    {
        title: "10) The Only Nuclear Power Muslim Country In The World Is?",
        options: ['Turkey', 'Pakistan', 'Iran', 'Afghanistan'],
        answer: "Pakistan"
    }
]

var currentQuestion = 0
// renderQuiz()    

userInfo()
function userInfo(){

    var h2 = document.createElement('h2')
    h2.innerHTML = "Questions Whose Answers You Will Have To Know <br>"
    h2.className = 'title title2'  // class name same as other h2

    var hH2 = document.createElement('h2')
    hH2.innerHTML = "All these different Questions Contains Equal Marks"
    hH2.className = 'title title2' // class name same as otehr h2


    var H2 = document.createElement('h2')
    H2.innerHTML = "These Questions Has No Time Limit"
    H2.className = 'title title2' // class name same as other h2


    var hHH2 = document.createElement('h2')
    hHH2.innerHTML = "let's See How Much marks you get  ...."
    hHH2.className = 'title title2' // class name same as otehr h2

    var startBtn = document.createElement('button')
    startBtn.innerHTML = 'Start Now'
    startBtn.className = 'next_btn' // give classes of same design btn // give class of next_btn
    startBtn.setAttribute('onclick','renderQuiz()')


    questionContainer.appendChild(h2)   // append all the h2 with same classes
    questionContainer.appendChild(hH2)  // append all the h2 with same classes
    questionContainer.appendChild(H2)   // append all the h2 with same classes
    questionContainer.appendChild(hHH2) // append all the h2 with same classes
    questionContainer.appendChild(startBtn) 
}

function renderQuiz(){
    questionContainer.innerHTML = ''
    if(currentQuestion>=0 && currentQuestion<questions.length){
    var titleElement = document.createElement('h2')
    titleElement.className = 'title ques_h2'              // class
    titleElement.innerText = questions[currentQuestion].title
    questionContainer.appendChild(titleElement)

    for(var i=0; i<questions[currentQuestion].options.length; i++){
        var optionElement = document.createElement('input')
        optionElement.setAttribute('type','radio')
        optionElement.setAttribute('name','ans')

        optionElement.setAttribute('class', `radio${i}`)
        
        optionElement.value = questions[currentQuestion].options[i]

        var spanElement = document.createElement('span')
        spanElement.innerHTML = questions[currentQuestion].options[i] + '<br />'
        spanElement.className = 'span_element title2'   // class  same as h2 bcz of font-size

        questionContainer.appendChild(optionElement)
        questionContainer.appendChild(spanElement)
    }

    var nextBtn = document.createElement('button')
    nextBtn.innerText = 'NEXT'
    nextBtn.setAttribute('onclick',`nextQuestion()`)
    nextBtn.className = 'next_btn'               //class

    questionContainer.appendChild(nextBtn)
} 
else{
    questionContainer.className = 'result_question_container'  // re-asign the class of question container
    questionContainer.setAttribute('data-aos','zoom-in')
    var result = (score*100) / questions.length;
    result.toFixed(2)
    var h2 = document.createElement('h2')
    h2.className = "result_h2"
    h2.innerHTML = 'YOUR RESULT  <br><br>' + result + ' %'
    questionContainer.appendChild(h2)
}
}
function nextQuestion(){

    var radio0 = document.querySelector('.radio0')
    var radio1 = document.querySelector('.radio1')
    var radio2 = document.querySelector('.radio2')
    var radio3 = document.querySelector('.radio3')

    if(radio0.checked === true || radio1.checked === true || radio2.checked === true || radio3.checked === true){

        var allRadio = [radio0,radio1,radio2,radio3]

        for(var i = 0 ; i<allRadio.length; i++){
            if(allRadio[i].checked === true){
                if(allRadio[i].value == questions[currentQuestion].answer){

                    score++
                }
            }
        }
        currentQuestion++
        questionContainer.innerHTML = ''
        renderQuiz()
    }
    }
