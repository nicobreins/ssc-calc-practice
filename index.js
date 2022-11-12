const markadd = document.getElementById('choice_add');
const marksub = document.getElementById('choice_sub');
const markmult = document.getElementById('choice_mult');
const markdivi = document.getElementById('choice_divi');

const changemark = (markbtn) => {
    document.getElementById('mark').innerHTML = markbtn.innerHTML;
    document.getElementById('mark').value = markbtn.value;
    document.getElementById('testchoice').style.display = 'none';
    document.getElementById('rangesel').style.display = 'block';

}


const randomDigit = (max,min)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

const startbtn = document.getElementById('start_game');
const nextbtn = document.getElementById('next_que');

const randomFeed = () =>{
    let firstmin = document.getElementById('firstnum_rengestart').value;
    let firstmax = document.getElementById('firstnum_rangeend').value;
    let secomin = document.getElementById('secondnum_rengestart').value;
    let secomax = document.getElementById('secondnum_rangeend').value;

    
    let firstnummin = parseFloat(firstmin);
    let firstnummax = parseFloat(firstmax);
    let secondnummin = parseFloat(secomin);
    let secondnummax = parseFloat(secomax);

    if(firstmin != ''&& firstmax != ''&& secomin != ''&& secomax != ''){
        if(firstnummin >= firstnummax || secondnummin >= secondnummax){
            document.getElementById('minmax-error').innerHTML = "Min should be smaller than Max";
        }else if(firstnummin < firstnummax || secondnummin < secondnummax){
            document.getElementById('minmax-error').innerHTML = ""
            document.getElementById('num1').innerHTML = randomDigit(firstnummax,firstnummin);
            document.getElementById('num2').innerHTML = randomDigit(secondnummin,secondnummax);
            document.getElementById('rangesel').style.display = 'none';
            document.getElementById('game').style.display = 'block';
            document.getElementById('answer').value = '';
            document.getElementById('ans').innerHTML = '';
        }
    }else{
        document.getElementById('minmax-error').innerHTML = "Please fill all the fields";
    }

    
}

let seconds;


let el = document.getElementById('counter');

function incrementSeconds() {
    seconds += 1;
    el.innerText = seconds + "s";
}


let cancel;

startbtn.onclick = function(){
    randomFeed();
    seconds = 0;   
    cancel = setInterval(incrementSeconds, 1000);
    
}

const check = document.getElementById('ans_check');

const checkResult = () => {
    const num1 = document.getElementById('num1').innerHTML;
    const num2 = document.getElementById('num2').innerHTML;
    let ansin = document.getElementById('answer').value;
    let mark = document.getElementById('mark').value;
    let result = eval(num1 + mark + num2);

    const ansmsg= document.getElementById('ans');

    if(result == ansin && ansin !=''){
        ansmsg.innerHTML = '<strong style="color:#0DBA3E">Correct Answer</strong>'  +' <br> Time:'+ seconds + 's';
        check.disabled = true;
        clearInterval(cancel);
    }else if(ansin !=''){
        ansmsg.innerHTML = '<strong style="color:red"> Wrong Ans </strong> | Correct ans is ' + result.toFixed(2) +' <br> Time:'+ seconds + 's';
        check.disabled = true;
        clearInterval(cancel);
    }else{
        ansmsg.innerHTML = 'Please add your answer';
    }
}

document.getElementById('answer').onkeyup = function(){
    if(document.getElementById('answer').value != ''){
        check.disabled = false;
    }else if(document.getElementById('answer').value == ''){
        check.disabled = true;
    }
}


check.onclick = function(){
    checkResult();   
}


nextbtn.onclick = function(){
    randomFeed();
    seconds = 0;   
    // check.disabled = false;
    clearInterval(cancel);
    cancel = setInterval(incrementSeconds, 1000);
}

markadd.onclick = function (){
    changemark(markadd);
}

marksub.onclick = function (){
    changemark(marksub);
}

markmult.onclick = function (){
    changemark(markmult);
}

markdivi.onclick = function (){
    changemark(markdivi);
}


document.getElementById('home').onclick = function(){
    document.getElementById('testchoice').style.display = 'grid';
    document.getElementById('rangesel').style.display = 'none';
    document.getElementById('game').style.display = 'none';
}

document.getElementById('home1').onclick = function(){
    document.getElementById('testchoice').style.display = 'grid';
    document.getElementById('rangesel').style.display = 'none';
    document.getElementById('game').style.display = 'none';
}

document.getElementById('chngrng').onclick = function(){
    document.getElementById('testchoice').style.display = 'none';
    document.getElementById('rangesel').style.display = 'block';
    document.getElementById('game').style.display = 'none';
}
