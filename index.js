function number(num) {
    var input = document.getElementById('screen')
     input.value  += num
}
function result(){
    var input = document.getElementById('screen')
    input.value = eval(input.value)
}


function clearresult(){
    var input = document.getElementById('screen')
    input.value = " ";
}

function deletechar() {
    var input = document.getElementById('screen');
    var remove = input.value;
   remove = remove.slice(0,-1);
   input.value = remove;
}