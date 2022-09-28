
/*********************************** ASD *********************************/
let boxing1 = document.querySelectorAll(".title[data-index='1'] .boxing")

let nomCours = ["Introduction","Lecture de variables","Structures Conditionnelles","Boucles" ,"Fonctions" 
              , "Tableaux" ,"Chaine de caracteres" , "Pointeurs" ,'Structures',"Fichiers"  ] 
createCours(boxing1[0],"ASD",nomCours.length ,nomCours)
createTdTp(boxing1[1],"ASD",3 , "")
boxing1[1].innerHTML+=` <a href="L1/ASD/td4.docx" target='_blank'> TD 4</a> 
                        <a href="L1/ASD/tp4.docx" target='_blank'> TP 4</a>`
boxing1[2].innerHTML += `<a href="L1/ASD/Exercices.pdf" target='_blank'> Exercices </a> 
                        <a href="L1/ASD/Correction.pdf" target='_blank'> Correction</a>`
createExman(boxing1[2],"ASD",15 , "")
/*********************************** SM  *********************************/
let boxing2 = document.querySelectorAll(".title[data-index='2'] .boxing")

let nomCours1 = ["Chapitre 01 S1","Chapitre 02 S1", "Chapitre 01 S2" , "Chapitre 02 S2" , "Chapitre 03 S2" , "Chapitre 04 S2" , "Chapitre 05 S2"]
createCours(boxing2[0],"SM",nomCours1.length , nomCours1)
let nomTdSm = ['TD1' , 'TD1 - Corr' , 'TD2' , 'TD2 - Corr' , 'TD3' , 'TD4' ,'SM Serie 1' , 'SM Serie 2' , 'SM Serie 3']
createTdTp(boxing2[1],"SM" , nomTdSm.length , nomTdSm)
let nomExamen = ["Devoir","Devoir - Corr" ,"Examen","Examen - Corr" ,"Examen-2019" ,"Examen-2020","Sujet1_corrige","Sujet2_corrige"]
createExman(boxing2[2],"SM" , nomExamen.length,nomExamen)

boxing2[2].innerHTML +=`<a href="L1/SM/sujet3.docx" target='_blank'> Sujet3 </a> 
                        <a href="L1/SM/corrige.docx" target='_blank'> corrige</a>`;

/********************************* Analyse *********************************/
let boxing3 = document.querySelectorAll(".title[data-index='3'] .boxing")

let nomCours2 = ["Cours d’analyse 1ère année" , "Chapitre du Corps des Nombres Complexes","Intégrales définies et primitives.pdf"]
let nomTd2    = ["td1" ,"td2","serie1","serie2","serie3","serie4" , 'td3' ,'td4']
let nomExmn2  = ["Analyse1" ,"Analyse1 ar" , "Corrigé Analyse1" , "Examen2008","Examen2013","Examen2015","Examen2016","Examen2017","Examen2018","Examen2019","Examen2020"]

createCours(boxing3[0] , "Analyse"  , nomCours2.length , nomCours2)
createTdTp (boxing3[1] , "Analyse"  , nomTd2.length    , nomTd2)
createExman(boxing3[2] , "Analyse"  , nomExmn2.length  , nomExmn2)
boxing3[2].innerHTML += `<a href="L1/Analyse/Examen-2011.jpg" target='_blank'> Examen 2011 </a> 
                        <a href="L1/Analyse/Examen-2011.jpg" target='_blank'> Examen 2012</a>`

/********************************* algebre *********************************/
let boxing4 = document.querySelectorAll(".title[data-index='4'] .boxing")

let nomCours3 = ["Logique","Les Ensembles ","Les Applications","Relations Binaires","Structures Algébriques" , "Espaces vectoriels" ,"Suite" ,"Applicatinos linéaires" ,"Suite" ,"Déterminants" ,"Les Matrices" ,"Systèmes Linéaires"]
let nomTd3    = ["TD 1+la correction" , "TD 2+la correction" , "TD 3" ,"TD-Strictures Algerbriques" ,"serie 1" ,"serie 2" ,"serie 3","serie 4"]
let UrLExmn3  = ["Examen1.pdf","Examen2.pdf","Examen3.pdf","Examen4.pdf","Examen5.pdf","Examen6.pdf","Examen7.pdf","Examen8.pdf","Examen9.pdf","Examen10.pdf","Examen11.pdf","Examen12.pdf","Examen13.pdf","Examen14.jpg","Examen16.docx","Examen17.docx"]
let nomExmn3  = ["Examen1","Examen2","Examen3","Examen4","Examen5","Examen6","Examen7","Examen8","Examen9","Examen10","Examen11","Examen12","Examen13","Examen14","Examen","Correction"]

createCours(boxing4[0] , "Algebre"  , nomCours3.length , nomCours3)
createTdTp(boxing4[1] , "Algebre" , nomTd3.length , nomTd3)
for (let i = 0; i < UrLExmn3.length; i++) {
  boxing4[2].innerHTML+= `<a href="L1/Akgebre/${UrLExmn3[i]}" target='_blank'> ${nomExmn3[i]}</a>`
  
}

/****************************************************************************/




function createCours(ele , module , nmbr ,arr){
  for (let i = 0; i < nmbr; i++) {
    ele.innerHTML += `<a href="L1/${module}/cours${i+1}.pdf" target='_blank'> ${arr[i]}</a>`
}
}
function createTdTp(ele , module , nmbr , arr){
  for (let i = 0; i < nmbr; i++) {
    if(!(module === "ASD")){
      ele.innerHTML += `<a href="L1/${module}/${arr[i]}.pdf" target='_blank' >${arr[i]}</a> `
    }else{
      ele.innerHTML += `<a href="L1/${module}/td${i+1}.pdf" target='_blank'> TD ${i+1}</a>
                        <a href="L1/${module}/tp${i+1}.pdf" target='_blank'> TP ${i+1}</a>`

    }
    }
}
function createExman(ele , module , taille , arr){
let s = "";
  for(let i=0;i<taille;i++){
    if(module === "ASD"){
      if(i<8){
          s = "s1"
        }
        else{
          s = "s2"
        }
          ele.innerHTML += `<a href="L1/${module}/${i+1}-Examen.pdf" target='_blank'> Exman ${s}</a>   
                            <a href="L1/${module}/${i+1}-CorrectionExamen.pdf" target='_blank'> corige</a>`
    }else{
          ele.innerHTML += `<a href="L1/${module}/${arr[i]}.pdf" target='_blank'> ${arr[i]}</a> ` 
    }
  }
}

