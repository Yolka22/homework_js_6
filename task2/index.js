let right_ans = 0;
let answers_count = document.querySelectorAll('input').length/2;

document.getElementById('check-btn').addEventListener('click', ()=>{
    answers = document.querySelectorAll('input');
    answers.forEach(element => {
        if(element.className=='right' && element.checked == true){
            right_ans++;
        }
        
    }
    );
    document.getElementById('display-result').innerHTML=
    `
        <p>result ${right_ans} correct answers to ${answers_count} answers</p>
    `;
    right_ans = 0;
})