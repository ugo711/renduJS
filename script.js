"use script";

let hp=10; //santé mentale de départ de john

let changmentRestant=30;
let changementEffectue=0;

let musique = ["annisa - wejdene","aurelie - colonel ryel","caroline - mcsolaar","angela - hatik","roxanne - arizona zervas"];
while(changmentRestant>0 && hp>0){ //boucle qui s'arrete si john meurt ou est arrivé
    let playing=musique[Math.floor(Math.random() * 5)]; //selection aleatoire de la musique en train d'etre jouée
    if(playing=="annisa - wejdene"){//verifie si la musique actuelle est annisa et enleve 1 pv si c'est le cas
        hp = hp-1;
    }
    changementEffectue++;//actualise le nombre de changements effectués
    changmentRestant--;//actualise le nombre de changements restant
    console.log(`${playing} est en train de jouer. il reste ${changmentRestant} feux rouges. Il te reste ${hp} points de santé mentale.`);//indique les feux restants la musique et les points de vie
}
if(hp==0){//verifie si john est envoie et envoie le messagecorrespondant 
    console.log(`Vous avez perdu après ${changementEffectue} feux rouges`);
}else{
    console.log(`Vous avez gagné!! (hatik c'etait nul aussi)`)
}