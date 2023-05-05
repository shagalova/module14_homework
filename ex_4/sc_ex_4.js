const btn = document.querySelector(".button");
const image = document.querySelector(".image");
   
btn.addEventListener('click', () => {   
  const inputW = document.querySelector("#input1").value;
  const inputH = document.querySelector("#input2").value; 
  let wrongNumber = document.querySelector(".result");
      
    if (!(inputW >= 100 && inputW <= 300 && inputH >= 100 && inputH <= 300)) {
      image.src = ""
      wrongNumber.textContent = "Одно из чисел вне диапазона от 100 до 300";
        return;
    }
                    
    fetch(`https://picsum.photos/${inputW}/${inputH}`)
        
      .then(response => {
        wrongNumber.textContent = "";
        image.src = response.url;
      });
}) 
