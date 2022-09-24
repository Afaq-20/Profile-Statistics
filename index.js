const counterEl = document.querySelectorAll(".counter")
counterEl.forEach((counterEl)=>{
    counterEl.innerText = "0";
    increamentCounter();
    function increamentCounter(){
        let current = +counterEl.innerText;
        const dataceil = counterEl.getAttribute("data-ceil");
        const increament = dataceil / 50
        current = Math.ceil(current + increament);
        counterEl.innerText =  current;
        if(current < dataceil){
            counterEl.innerText = current;
            setTimeout(increamentCounter,10)
        }
        else{
            counterEl.innerText = dataceil
        }
    }
})