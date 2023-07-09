const students = [
    "Student 1",
    "Student 2",
    "Student 3",
];


const show = () =>{
    list.innerHTML+=
    `
    <label for="topic">Topic</label>
    <input type="text" name="topic" id="topic">
    `
    students.forEach(student =>{
        list.innerHTML+=
        `
        <div class="students">
            <p>${student}</p>
            <input type="checkbox" name="present-check">
        </div>
        `
    })
    list.innerHTML+=`<button id="check">Check</button>`;
    document.getElementById('check').addEventListener('click', () => {
        const presents = document.querySelectorAll('input[name="present-check"]');

        const tmp_topic = document.getElementById('topic').value;

        list.innerHTML ="";
        list.innerHTML+=
        `
            <p>Topic ${tmp_topic}</p>
            <label style="margin: 5px;">Name</label>
            <label style="margin-left: 20px;">Is Present</label>
        `
        for(let i = 0; i < presents.length;i++){
            list.innerHTML+=
        `
        <div class="students">
            <p style="margin: 5px;">${students[i]}</p>
            <p style="margin: 5px;">${presents[i].checked==true? " present" : " not present"}</p>
        </div>
        `
        }
    });
}


const select_btn = document.getElementById('Select');
select_btn.addEventListener('click',show);

const list = document.getElementById('list');

