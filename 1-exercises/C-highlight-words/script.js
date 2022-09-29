function highlightWords(paragraph, colours) {
  // Write your code here...
  let paragraphEl = document.createElement("p");
  let selectDropdown = document.createElement("select");

  colours.map((color) => {
    let optionEl = document.createElement("option")
    optionEl.setAttribute("value",color);
    optionEl.innerHTML = color;
    selectDropdown.appendChild(optionEl);
  });

  let wordArray = paragraph.split(" ");

  wordArray.map((word) => {
    let span = document.createElement("span");
    span.innerHTML = `${word} `;
    paragraphEl.appendChild(span);

    //click event
    span.addEventListener("click",setBackground);
    function setBackground(){
      if(selectDropdown.value === "yellow"){
      span.style.backgroundColor = "yellow"
      }else if(selectDropdown.value === "green"){
      span.style.backgroundColor = "green";
      }else if(selectDropdown.value === "blue"){
      span.style.backgroundColor = "blue";
      }else {
      span.style.backgroundColor = "";
      }
    }
  });
    let divEl=document.getElementById("content");
    divEl.appendChild(paragraphEl);
    divEl.appendChild(selectDropdown); 
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
