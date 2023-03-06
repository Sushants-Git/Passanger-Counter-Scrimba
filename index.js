let count = 0;
let passanger = document.getElementById("count-el");

function increase() {
  count = count + 1;
  passanger.textContent = count;
}



let contentEl = document.getElementById("content-el")

function save(){
  let text = ""
  if(contentEl.textContent == "Previous Passangers:"){
    text = " " + count
  }else{
    text = " - " + count
  }
  contentEl.textContent += text
}

function reset() {
  count = 0;
  passanger.textContent = count;
  contentEl.textContent = "Previous Passangers:";
}
