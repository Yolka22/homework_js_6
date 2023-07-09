const directions = [
    "Odessa - Lviv",
    "Kyiv - Kharkiv",
]

const direction_selector = document.getElementById('direction');
directions.forEach(direction => {

    var optionElement = document.createElement("option");
    optionElement.text = direction;
    optionElement.value = direction;
    direction_selector.add(optionElement);
    
});

document.getElementById('search').addEventListener('click', ()=>{
    const tickets = document.getElementById('dispaly-tickets');
    for (let i = 0; i < 14; i++) {
        tickets.innerHTML+=
        `
        <div>
            <input type="checkbox" name="ticket">${i+1}
            <input type="checkbox" name="ticket">${(i+1)*2}
        </div>
        `
    }
    document.body.innerHTML+=
    `
    <p id="price"></p>
    <button id="book" name="book">Book</button>
    `
    document.getElementById('book').addEventListener('click',()=>{
        const allow_tickets = document.querySelectorAll('input[name="ticket"]')
        let acum = 0;
        allow_tickets.forEach(ticket=>{
            if(ticket.checked==true){
                acum+=50;
            }
        })
    })
})
