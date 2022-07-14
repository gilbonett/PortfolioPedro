export default function darkTheme(btn, classDark){

    const $temabtn = document.querySelector(btn),
    $selectores = document.querySelectorAll("[data-dark]");
    //console.log($temabtn);
    //console.log($selectores);
  
    let luna = "🌙",
      sol = "☀️";
  
      document.addEventListener("click", e=>{
        if(e.target.matches(btn)){
          console.log($temabtn.textContent);
          if($temabtn.textContent === luna ){
            $selectores.forEach(el => el.classList.add(classDark));
            $temabtn.textContent = sol;
          } else{
            $selectores.forEach(el => el.classList.remove(classDark));
            $temabtn.textContent = luna;
          }
        }
      })
  }
  