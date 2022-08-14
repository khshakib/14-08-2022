const buttons = document.querySelectorAll('.mybutton');
const heading = document.querySelector('h1');

for (let i = 0; i < buttons.length; i++) {
    
    buttons[i].addEventListener("click", function(){
        var text = this.innerHTML
       heading.innerHTML=  "You Have Selected " + text
        console.log(i)
       
    })
    console.log(i);
    
}