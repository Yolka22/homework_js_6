document.getElementById("send").addEventListener('click', ()=>{
    document.getElementById("display-message").innerHTML+=`
    <div>
    <p>${document.getElementById('nickname').value}</p>
    <p>${document.getElementById('message').value}</p>
    </div>
    `
})