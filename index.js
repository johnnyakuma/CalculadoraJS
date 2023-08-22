
function outcome(){
    let num1 = Number(document.getElementById('num-one').value)
    let num2 = Number(document.getElementById('num-two').value)
    let total = 0

    if (document.getElementById('box1').checked)//box1 add
        total = num1 + num2
    else if (document.getElementById('box2').checked)//box2 subtrated
        total = num1 - num2
    else if (document.getElementById('box3').checked)//box3 mult
        total = num1 * num2
    else if
    (document.getElementById('box4').checked)//box4 divide
        total = num1 / num2
    else
        total = 'Error'

    document.getElementById('resultArea').innerHTML = 'Result: '+ String(total)
}
