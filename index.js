// Todo: Make M+ M- and MC functional
let str = "";
let btn = document.querySelectorAll('.button');
Array.from(btn).forEach((buttons)=>{
    buttons.addEventListener('click', (e)=>{
        if(e.target.innerHTML == "="){
            str = eval(str);
            document.querySelector('input').value = str;
        }
        else if(e.target.innerHTML == "AC"){
            str = "";
            document.querySelector('input').value = str;
        }
        else{
        str = str + e.target.innerHTML;
            // console.log(e.target);
            document.querySelector('input').value = str;
        };
    });
});