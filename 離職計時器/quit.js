document.addEventListener("DOMContentLoaded", function () {

    //hide
    let hidder = document.getElementById('hidder')
    hidder.addEventListener('click',()=>{
        let selector = document.getElementById('selector');
        let nav = document.getElementsByTagName('nav');
        selector.style.display = "none";
        nav[0].style.display = "none";
    })

    //main
    let leaveDate = document.getElementById('datepicker')
    let result = document.getElementById('result');
    let title = document.getElementById('title');

    leaveDate.addEventListener('change', () => {
        let tempDate = new Date(leaveDate.value)
        let days = DateMinus(tempDate);
        result.innerHTML = `${days} 天!`
    })

    function DateMinus(sDate){
        var sdate = new Date(sDate.toString().replace(/-/g, "/"));
        var now = new Date();
        var days = now.getTime() - sdate.getTime();
        var day = parseInt(days / (1000 * 60 * 60 * 24));
        return Math.abs(day+1);
   }

}); 