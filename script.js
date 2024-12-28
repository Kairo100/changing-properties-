const inputs = document.querySelectorAll(".css-changer  input");

inputs.forEach((inputs)=> inputs.addEventListener("change", update) );
/*
you can use this as function or single line as above
inputs.forEach(function(input){
    input.addEventListener("change",update);
})

*/ 
function update(){
    const suffixData = this.dataset.sizing || " ";
    document.documentElement.style.setProperty(
       
        `--${this.name}`,
    
     this.value + suffixData


    );
}