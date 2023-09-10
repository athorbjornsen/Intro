//import "./styles.css";


const text =
    "Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.";
  

function longestWord(text) {  
    const wordsArray = text.split(/\s+/);  
   
    wordsArray.sort((a, b) => {
      if (a.length === b.length) {
        return a.localeCompare(b); 
      }
      return b.length - a.length; 
    });      

  
  const wordList = document.createElement("ul");
  wordsArray.forEach((word) => {
    const listItem = document.createElement("li");
    listItem.textContent = word;
    wordList.appendChild(listItem);
  });
  document.body.appendChild(wordList);
}
  
  
  const sortedWords = longestWord(text);
  console.log(sortedWords);








