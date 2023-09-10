

// Oppgave 1
const removeButton = document.getElementById("remove-btn");
const paragraphToRemoveTextFrom = document.getElementById("remove");


removeButton.addEventListener("click", function() {
    paragraphToRemoveTextFrom.textContent = "";
  });




// Oppgave 2
const changeButton = document.getElementById("change-btn");
const paragraphToChangeTextFrom = document.getElementById("change");


changeButton.addEventListener("click", function() {  
    paragraphToChangeTextFrom.textContent = "Changeling";
  });




// Oppgave 3
const print = document.getElementById("input");
const printThis = document.getElementById("input-text");


print.addEventListener("input", function() {
    inputnow = print.value;
    printThis.textContent = inputnow;
})




// Oppgave 4
const myList = ["item one", "item two", "item three"];
const printList = document.getElementById("write-list");

function printMyList() {
    const ul = document.getElementById("ul");   
    ul.innerHTML = ""; 
    for (const item of myList) {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    }
}   
  
document.getElementById("write-list").addEventListener("click", function() {    
printMyList();
})




// Oppgave 5
const selectElement = document.getElementById("select");
const textElement = document.getElementById("text");
const createButton = document.getElementById("create");
const outputDiv = document.getElementById("output");


createButton.addEventListener("click", function() {  
  const selectedValue = selectElement.value; 
  const inputText = textElement.value;
  const newElement = document.createElement(selectedValue);  

  newElement.textContent = inputText;
  outputDiv.appendChild(newElement); 
  textElement.value = '';
});




// Oppgave 6
const ul = document.getElementById("list");
const removeLiButton = document.getElementById("remove-li");


removeLiButton.addEventListener("click", function() {
  const li = ul.querySelectorAll("li"); 
  if (li.length > 0) {    
    ul.removeChild(li[li.length - 1]);
  }
});




// Oppgave 7
const nameInput = document.getElementById("name");
const orderButton = document.getElementById("order");


nameInput.addEventListener("input", function() {   
    if (nameInput.value.length > 4) {    
      orderButton.disabled = true;
    } else {
      orderButton.disabled = false;
    }
  });




// Oppgave 8
const colorButton = document.getElementById("color");
const ule = document.querySelector(".children");


colorButton.addEventListener("click", function() {
  ule.querySelectorAll("li").forEach(function(lie, index) {
    if (index % 2 === 0) {
      lie.classList.toggle("purple-border", !lie.classList.contains("purple-border"));
      lie.classList.remove("blue-border");
    } else {
      lie.classList.toggle("blue-border", !lie.classList.contains("blue-border"));
      lie.classList.remove("purple-border");
    }    
  });
});