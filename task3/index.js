const form = document.getElementById('input-text');

document.getElementById('show-text').addEventListener('click', ()=>{

    const checkboxes = form.elements['decoration'];
    const selectedValuesCheckBoxes = [];

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selectedValuesCheckBoxes.push(checkboxes[i].value);
        }
      }
      

    const radios = form.elements['aligment'];
    const selectedValueRadio=[];
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedValueRadio.push(radios[i].value);
        }
      }

      console.log(selectedValuesCheckBoxes.join("").concat(selectedValueRadio));
    document.getElementById('display').innerHTML=
    `
    <div style="${selectedValuesCheckBoxes.join("").concat(selectedValueRadio)}" >
      ${document.getElementById('type-text').value}
    </div>
    `
})