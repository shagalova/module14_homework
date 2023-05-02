
const button = document.querySelector(".button");
const output = document.querySelector(".result");

function imgRequest() {

button.addEventListener('click', () => {   
 // localStorage.clear();
  const input = document.querySelectorAll(".input");
  
  let wrongNumber = document.querySelector(".result");

  
  input.forEach(input => {

if (input.value >= 1 && input.value <= 10) {
  
  input.classList.add("valid")
} else {
  input.classList.remove("valid")
}
})

  const elem1 = document.querySelector("#input1");
  const elem2 = document.querySelector("#input2");

if (!(elem1.classList.contains("valid")) && elem2.classList.contains("valid")) {
  wrongNumber.textContent = "Номер страницы вне диапазона от 1 до 10";
//return
}

if (!(elem2.classList.contains("valid")) && elem1.classList.contains("valid")) {
  wrongNumber.textContent = "Лимит вне диапазона от 1 до 10";
//return
}

if (!(elem1.classList.contains("valid")) && !(elem2.classList.contains("valid"))) {
  wrongNumber.textContent = "Номер страницы и лимит вне диапазона от 1 до 10";
//return
} 

if (elem1.classList.contains("valid") && elem2.classList.contains("valid")) {
     
          const input = document.querySelectorAll(".input")
          const input1 = document.querySelector("#input1").value;
          const input2 = document.querySelector("#input2").value; 
    
           
         
    fetch(`https://picsum.photos/v2/list?page=${input1}&limit=${input2}`)
    .then(response => {
      return response.json();
    }) 
    .then(data => {
      let cards = '';
      data.forEach(item => {
        let output = `
          <div class="card">
            <img
              src="${item.download_url}"
              class="card-image"
            />
            <p>${item.author}</p>
          </div>
        `;
        cards = cards + output;
      });
      
      output.innerHTML = cards;
   //   return output;
   localStorage.setItem('myJSON', JSON.stringify(data));
   
  
  });

  }  
})         
}

function getPreviousImage () {

  const myJSON = localStorage.getItem('myJSON');
  
  const JSONData = JSON.parse(myJSON);
  
  
  
 const jsonOutput = document.querySelector(".result");
    let cards = '';
    myJSON.forEach(item => {
      
      let jsonOutput = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
          <p>${item.author}</p>
        </div>
      `;
     
      cards = cards + jsonOutput;
      
    });
    
    jsonOutput.innerHTML = cards;
    
 
  } 

  window.addEventListener('load', getPreviousImage);
  button.addEventListener('click', function() {    
    localStorage.clear();
  })

document.addEventListener("DOMContentLoaded", imgRequest);
