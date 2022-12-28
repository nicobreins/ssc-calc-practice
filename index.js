const markadd = document.getElementById('choice_add');
const marksub = document.getElementById('choice_sub');
const markmult = document.getElementById('choice_mult');
const markdivi = document.getElementById('choice_divi');
const markmis = document.getElementById('choice_mix');

const randommark = ['+','-','×','÷']
const randommarkvalue = ['+','-','*','/']

const changemark = (markbtn) => {   
    if(markbtn == markmis){
        let temprandommark = randomDigit(3,0)
        document.getElementById('mark').innerHTML = randommark[temprandommark];
        document.getElementById('mark').value = randommarkvalue[temprandommark];
        document.getElementById('mark').classList.add('mix')
    }else{
        document.getElementById('mark').innerHTML = markbtn.innerHTML;
        document.getElementById('mark').value = markbtn.value;
    }

    document.getElementById('testchoice').style.display = 'none';
    document.getElementById('rangesel').style.display = 'block';
}


const randomDigit = (max,min)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

const randomMark = ()=>{
    let temprandommark2 = randomDigit(3,0)
    document.getElementById('mark').innerHTML = randommark[temprandommark2];
    document.getElementById('mark').value = randommarkvalue[temprandommark2];
    
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
    clearInterval(cancel);
    cancel = setInterval(incrementSeconds, 1000);
    document.getElementById('answer').disabled = false;
    
}

const check = document.getElementById('ans_check');

const checkResult = () => {
    const num1 = document.getElementById('num1').innerHTML;
    const num2 = document.getElementById('num2').innerHTML;
    let ansin = document.getElementById('answer').value;
    let mark = document.getElementById('mark').value;
    let result = eval(num1 + mark + num2).toFixed(2);

    const ansmsg= document.getElementById('ans');

    if(result == parseFloat(ansin) && ansin!=''){
        ansmsg.innerHTML = '<strong style="color:#0DBA3E">Correct answer</strong>'  +' <br> Time: '+ seconds + 's';
        check.disabled = true;
        document.getElementById('answer').disabled = true;
        clearInterval(cancel);
    }else if(result != parseFloat(ansin) && ansin !=''){
        ansmsg.innerHTML = '<strong style="color:red"> Wrong answer </strong> | Correct answer is <strong>' + result + '</strong>' +' <br> Time:'+ seconds + 's';
        check.disabled = true;
        clearInterval(cancel);
        document.getElementById('answer').disabled = true;

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
    if(document.getElementById('mark').classList.contains('mix')){
        randomMark();
        console.log('yex')
    }
    seconds = 0;   
    // check.disabled = false;
    clearInterval(cancel);
    cancel = setInterval(incrementSeconds, 1000);
    document.getElementById('answer').disabled = false;
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

markmis.onclick = function (){
    changemark(markmis);
}


document.getElementById('home').onclick = function(){
    document.getElementById('testchoice').style.display = 'block';
    document.getElementById('rangesel').style.display = 'none';
    document.getElementById('game').style.display = 'none';
    document.getElementById('mark').classList.remove('mix')
}

// document.getElementById('home1').onclick = function(){
//     document.getElementById('testchoice').style.display = 'block';
//     document.getElementById('rangesel').style.display = 'none';
//     document.getElementById('game').style.display = 'none';
// }

document.getElementById('chngrng').onclick = function(){
    document.getElementById('testchoice').style.display = 'none';
    document.getElementById('rangesel').style.display = 'block';
    document.getElementById('game').style.display = 'none';
}


// const inputBox = document.getElementById('answer');

// const virtualKeyboardSupported = "virtualKeyboard" in navigator;




// inputBox.onfocus = function(){
//     if(virtualKeyboardSupported){
//         navigator.virtualKeyboard.overlaysContent = true;
//         navigator.virtualKeyboard.show();
//     }
    
// }

// navigator.virtualKeyboard.addEventListener('geometrychange', (event) => {
//     let { x, y, width, height } = event.target.boundingRect;
//     console.log('Virtual keyboard geometry changed:', x, y, width, height);
//     document.getElementById('ans').innerHTML = 'Virtual keyboard geometry changed:', x, y, width, height;
//   });
