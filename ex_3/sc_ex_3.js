function imgRequest() {
const input = document.querySelector(".input");
const btn = document.querySelector(".button");
const resultNode = document.querySelector(".result");
    
     function makeRequest(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
            
        xhr.onload = function() {
            if (xhr.status != 200) {
                console.log('Статус ответа: ', xhr.status);
            } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
                }
            }
        };
            
        xhr.onerror = function() {
            console.log('Ошибка! Статус ответа: ', xhr.status);
        };
            
        xhr.send();
    };
    
    function displayResult(apiData) {
        if (input.value < 1 || input.value > 10) {
                 const wrongNumber = document.querySelector(".result");
                 wrongNumber.textContent = "Число вне диапазона от 1 до 10" 
             } else { 
        
        let cards = '';
        // console.log('start cards', cards);
        
        apiData.forEach(item => {
          const cardBlock = `
            <div class="card">
              <img
                src="${item.download_url}"
                class="card-image"
              />
              <p>${item.author}</p>
            </div>
          `;
          cards = cards + cardBlock;
        });
        
        // console.log('end cards', cards);
        
        resultNode.innerHTML = cards;
      }
    }

    btn.addEventListener('click', () => {
        makeRequest(`https://picsum.photos/v2/list/?limit=${input.value}`, displayResult);
      })
}

document.addEventListener("DOMContentLoaded", imgRequest);


