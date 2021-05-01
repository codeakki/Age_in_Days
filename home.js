//Age in Days

function ageInDays(){
var birtheyear = prompt('What year you are born .....Good Friend ?');
var ageInDayss = (2021-birtheyear)*365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('You are '+ ageInDayss +' days old\n.');
h1.setAttribute('id','ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}