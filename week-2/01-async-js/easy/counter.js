let count = 0;
function startcounter(){
  

    setTimeout(function(){
     
        count=count+1;
        console.log(count)
        startcounter();
    }, 1000)
}
startcounter();