let szam=0
//input sorok
let label1=document.createElement("label")
document.body.appendChild(label1)
label1.innerHTML="Sorok száma: "
let range1=document.createElement("input")
document.body.appendChild(range1)
range1.type="range"
range1.id="sorokSzama"
range1.min="5"
range1.max="15"
range1.value="10"
range1.addEventListener("change",frissit)

let br=document.createElement("br")
document.body.appendChild(br)

//inputoszlop
let label2=document.createElement("label")
document.body.appendChild(label2)
label2.innerHTML="Oszlopok száma: "
let range2=document.createElement("input")
document.body.appendChild(range2)
range2.type="range"
range2.id="oszlopokSzama"
range2.min="5"
range2.max="15"
range2.value="10"
range2.addEventListener("change",frissit)

let divSzoveg=document.createElement("div")
document.body.appendChild(divSzoveg)

let tablaDiv=document.createElement("div")
document.body.appendChild(tablaDiv)

frissit()


function frissit(){
     divSzoveg.innerHTML=`Sorok száma: ${range1.value} Oszlopok száma: ${range2.value}`

     tablaDiv.innerHTML=""
     let table=document.createElement("table")
     tablaDiv.appendChild(table)

     for (let i = 0; i < range1.value; i++) {
          let tr=document.createElement("tr")
          table.appendChild(tr)
          for (let j = 0; j < range2.value; j++) {
               let td=document.createElement("td")
               td.id=`${i}-${j}`
               tr.appendChild(td)
               td.addEventListener("click",()=>kattintas(td))
               
          }
          
     }

}

function kattintas(elem){
     //alert("hello")
     //alert(elem.id)
     if (elem.innerHTML!="")
          return
     if (szam==0){
          elem.innerHTML="x"
          elem.style.color="blue"
          szam=1
     }
     else{
          elem.innerHTML="o"
          elem.style.color="red"
          szam=0
     }

     if (ellenoriz() == true) {
          setTimeout(() => {
          if (szam==1)     
               alert("x nyerte a játékot");
          else
               alert("o nyerte a játékot");
          frissit()
          }, 250); 
          }
}

function ellenoriz(){
     //alert("hello")
     //jobbra 5 egyforma
     for (let i = 0; i < range1.value; i++) {
          for (let j = 0; j < range2.value-4; j++) {
               //x-ek vizsgálata
               let db=0
               for (let k = j; k < j+5; k++) {
                    if (document.getElementById(`${i}-${k}`).innerHTML=="x")
                         db++
               }
               if(db==5)
                    return true
               //o-k vizsgálata
               db=0
               for (let k = j; k < j+5; k++) {
                    if (document.getElementById(`${i}-${k}`).innerHTML=="o")
                         db++
               }
               if(db==5)
                    return true
          }
    }
     //lefele 5 egyforma
     for (let i = 0; i < range1.value-4; i++) {
          for (let j = 0; j < range2.value; j++) {
               //x-ek vizsgálata
               let db=0
               for (let k = i; k < i+5; k++) {
                    if (document.getElementById(`${k}-${j}`).innerHTML=="x")
                         db++
               }
               if(db==5)
                    return true
               //o-k vizsgálata
               db=0
               for (let k = i; k < i+5; k++) {
                    if (document.getElementById(`${k}-${j}`).innerHTML=="o")
                         db++
               }
               if(db==5)
                    return true
          }
    }
     //jobbra lefele átló 5 egyforma
     for (let i = 0; i < range1.value-4; i++) {
          for (let j = 0; j < range2.value-4; j++) {
               //x-ek vizsgálata
               let db=0
               for (let k = 0; k < 5; k++) {
                    if (document.getElementById(`${i+k}-${j+k}`).innerHTML=="x")
                         db++
               }
               if(db==5)
                    return true
               //o-k vizsgálata
               db=0
               for (let k = 0; k < 5; k++) {
                    if (document.getElementById(`${i+k}-${j+k}`).innerHTML=="o")
                         db++
               }
               if(db==5)
                    return true
          }
    }
     //balra lefele átló 5 egyforma
     for (let i = 0; i < range1.value-4; i++) {
          for (let j = 4; j < range2.value; j++) {
               //x-ek vizsgálata
               let db=0
               for (let k = 0; k < 5; k++) {
                    if (document.getElementById(`${i+k}-${j-k}`).innerHTML=="x")
                         db++
               }
               if(db==5)
                    return true
               //o-k vizsgálata
               db=0
               for (let k = 0; k < 5; k++) {
                    if (document.getElementById(`${i+k}-${j-k}`).innerHTML=="o")
                         db++
               }
               if(db==5)
                    return true
          }
    }
    return false
}
