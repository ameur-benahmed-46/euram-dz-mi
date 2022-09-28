let ASD = document.querySelectorAll(".title[data-index='1']  .boxing")
let ADO = document.querySelectorAll(".title[data-index='2']  .boxing")
let SI  = document.querySelectorAll(".title[data-index='3']  .boxing")
let THG = document.querySelectorAll(".title[data-index='4']  .boxing")
let MN  = document.querySelectorAll(".title[data-index='5']  .boxing")
let LM  = document.querySelectorAll(".title[data-index='6']  .boxing")
let BDD = document.querySelectorAll(".title[data-index='7']  .boxing")
let RES = document.querySelectorAll(".title[data-index='8']  .boxing")
let POO = document.querySelectorAll(".title[data-index='9']  .boxing")
let SE  = document.querySelectorAll(".title[data-index='10'] .boxing")
let DAW = document.querySelectorAll(".title[data-index='11'] .boxing")
//ASD
let asdCours = ["Programme ASD 3", "Complexité des algorithmes" , "les méthodes de tri", "les arbres", "arbre binaire en c"]
contenu(ASD[0] , "ASD" , asdCours , "docx")
let asdTdTp = ["TD1", "TP1" , "TP1 solution", "TD2", "TP2","TD3",'TP3']
contenu(ASD[1] , "ASD" , asdTdTp , "docx")

//ADO
let adoCours = ["Chapitre I","Chapitre II","Chapitre III"]
contenu(ADO[0] , "ADO" , adoCours , "pdf")
let adoTdTp = ["TD1", "TP1" , "TD2", "TP2","TP Polycope MIPS-R3000"]
contenu(ADO[1] , "ADO" , adoTdTp , "pdf")

//Si
let siCours = ["Cours_SI","Chapitre-I","Chapitre-II","Chapitre-III","chapitre-IV"]
contenu(SI[0] , "SI" , siCours , "pdf")
let siTd = ["TD 1","TD 1 suit", "solution TD 1"]
contenu(SI[1] , "SI" , siTd , "pdf")
let siTp = ["TP 1", "solution TP 1", "solution TP 2"]
contenu(SI[1] , "SI" , siTp , "docx")

//THG
let thgCours = ["Cours 1","Cours 1 suite","Cours 2 chemins chaines","Cours 3 arbre THG","Cours 4 plus court chemin"]
contenu(THG[0] , "THG" , thgCours , "pdf")
let thgTd = ["TD1","TD2"]
contenu(THG[1] , "THG" , thgTd , "pdf")

//MN
let mnCours = ["cours 1","Cours 2","Cours 3","Cours 4"]
contenu(MN[0] , "MN" , mnCours , "pdf")
let mnTp = ["tp1","tp3","revision"]
contenu(MN[1] , "MN" , mnTp , "pdf")


// LM
let lmCours = ["Logique et calcul propositionnel","Logique des prédicats"]
contenu(LM[0] , "LM" , lmCours , "pdf")
let lmTd = ["TD 1","TD 2" ,"TD 3"]
contenu(LM[1] , "LM" , lmTd , "pdf")


// BDD
let bddCours = ["1-introduction","2-Modele-relationnel","3-Modele_conceptuel","4-Algebre-relationnelle" ,"5-SQL_DML"]
contenu(BDD[0] , "BDD/cours" , bddCours , "pdf")
let bddTd = ["TD 1","TD 2" ,"TD 3","TD 4"]
contenu(BDD[1] , "BDD/td" , bddTd , "pdf")
let bddTp = ["TP 0","TP 1"]
contenu(BDD[1] , "BDD/tp" , bddTp , "pdf")

//RES
let resCours = ["Intro Réseaux" , "Intro Réseaux (Suite)" ,"Couche physique" ,"Modele OSI"]
contenu(RES[0], "RES" , resCours , "pdf")
let resTdTp = ["TD 1","TD 2","TD 3","TP 1","TP 2","TP 3"]
contenu(RES[1], "RES" , resTdTp , "pdf")

//POO
let pooCours = ["01- Intro POO","02- POO Classe","03- POO Heritage_polymorphisme","04- Classes_Abstraites_Interfaces.pdf"]
contenu(POO[0],"POO",pooCours , "pdf")
let pooTdTp = ["Fiche TD1","Solutions TD1","Fiche TD2","Solutions TD2","Fiche TD3"]
contenu(POO[1],"POO",pooTdTp , "pdf")


//SE
let seCours= ["Cours 1" , "Cours 2" ,"Cours 3" ,"Cours 4"]
contenu(SE[0] , "SE" ,seCours , "pdf")

//DAW
let dawCours= ["Chapitre I Support de cours" , "Chap II- Part 1" ,"Chap II- Part 2"]
contenu(DAW[0] , "DAW" ,dawCours , "pdf")
let dawTp= ["TP1-Page 1sur2" ,"TP1-Page 1sur2" ,"TP2"] 
contenu(DAW[1] , "DAW" ,dawTp , "pdf")



function contenu(ele , module , arr ,typeDOC){
  for(let i=0;i<arr.length;i++){
    ele.innerHTML+= `<a href="L2/${module}/${arr[i]}.${typeDOC}" target='_blank'> ${arr[i]} </a>`
  }
}
