 const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');

    btn.addEventListener('click', () => {
      const isOpen = menu.classList.contains('max-h-96');
      if (isOpen) {
        menu.classList.remove('max-h-96', 'opacity-100');
        menu.classList.add('max-h-0', 'opacity-0');
      } else {
        menu.classList.remove('max-h-0', 'opacity-0');
        menu.classList.add('max-h-96', 'opacity-100');
      }
    });
   function print() {
     let inputPrint1 = document.getElementById("input-1").value;
    let inputPrint2 = document.getElementById("input-2").value;

   let print = document.getElementById("printUnits");
   print.innerText = inputPrint1 +" To "+inputPrint2;
   chack();
   }
   function chack() {
    let inputPrint1 = document.getElementById("input-1").value;
    let inputPrint2 = document.getElementById("input-2").value;

   let print = document.getElementById("printUnits");
   if (inputPrint1 == inputPrint2) {
    print.innerText = "Please select deferent unit's";
   }
   else if (inputPrint1 != inputPrint2) {
   calculate();
   }
   else {
    print.innerText = "Please select an unit's";
   }
   }
    function calculate() {
      
    }