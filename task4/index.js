const books = document.querySelectorAll("div");
const form = document.getElementById("offer");
const eventChoose = (event) => {
  let title = event.target.querySelector("h4").textContent;

  form.querySelector('[name="title"]').innerText = title;
};

books.forEach((book) => {
  book.addEventListener("click", eventChoose);
});

document.getElementById("buy-btn").addEventListener("click", () => {
  document.querySelector("main").innerHTML += 
`<div style = "width: 400px;">
    ${form.querySelector('[name="name"]').value}, thanks for the order! Book ${
    form.querySelector('[name="title"]').textContent
  } will be delivered on ${form.querySelector('[name="date"]').value} to ${
    form.querySelector('[name="adress"]').value
  }
</div>`;
});
