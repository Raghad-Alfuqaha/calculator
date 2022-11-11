
function display(val){
    document.getElementById('result').value += val
    return val;

}
function opreration(opr){
    let z =  document.getElementById('result').value.slice(-1)

    if (z === "+") {
        return;
      } else if (z === "-") {
        return;
      } else if (z === "*") {
        return;
      } else if (z === "/") {
        return;
      } 
      else if(z==="."){ 
        return;
      }
      else{
        document.getElementById('result').value += opr
      }
} 
function solve(){

    let x = document.getElementById('result').value
    let y = eval(x);
    document.getElementById('result').value = y
    return y
}
function clearScreen(){
   document.querySelector("#result").value = "" ;
 
   }


