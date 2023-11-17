// console.log om te checken of het script is gelinkt

console.log("goeiemorgen")


// alle benodigde variabelen aanmaken

var glasLeeg = document.querySelector(".glasleeg");

var bierViltje = document.querySelector(".viltje");

var bierTap = document.querySelector(".biertap");

var bierSpatel = document.querySelector(".spatel");

var startKnop = document.querySelector(".start")

var stopKnop = document.querySelector(".stop");

var dorstWaarde = 0;

var blijheidWaarde = 100;

//Met let kun je een ook een variabele aanmaken die vrijer is in gebruik en dit werkte om de onderstaande twee variabelen goed aan te roepen zodat de progresbar goed zo werken. dit is gehaald van deze site:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

let dorstScore = document.getElementById("dorst");

let blijheidScore = document.getElementById("blijheid");

var getaptGlas = document.querySelector(".getaptglas");

var bierOpBar = document.querySelector(".bieropbar");

var klantBar = document.querySelector(".klantbar");

var glasTap = document.querySelector(".glastap");

var viltjeBar = document.querySelector(".viltjebar");

var scoreBord = document.querySelector(".scoretekst");

var gameOverScore = document.querySelector(".melding");

var glasLeeg1;

var getaptGlas1;

var bierVoorKlant1;

var schuimWeg;

var viltjeBar1;

var aantalGlazen;

var klantTevreden;

var glasVol;

var aantalGlazen = 0;

var volschuim;
var volzonderschuim;
var nietvol;


//ervoor zorgen dat er een glas van het aanrecht onder de tap komt te staan

glasLeeg.addEventListener("click", glasNaarTap);

function glasNaarTap() {
    if (glasLeeg1 == 1) {
        console.log("Er staat al een glas!");
    } else {
        bierOpBar.src = "./images/dummy.png";
        glasTap.src = "./images/glasleeg.png";
        glasLeeg1 = 1;
        glasVervang = document.querySelector(".glastap");
    };

    if (schuimWeg == 0) {
        viltjeBar.src = "./images/dummy.png";
    } else {

    };
};


// ervoor zorgen dat er een viltje van het aanrecht naar de bar gaat

bierViltje.addEventListener("click", viltjeNaarBar);

function viltjeNaarBar() {
    if (viltjeBar1 == 1) {
        console.log("Er ligt al een viltje!");
    } else {

    };

    viltjeBar.src = "./images/Viltje.png";
    viltjeBar1 = 1;
};


//aanmaken van timers waarmee de dorst en blijheid wordt bijgehouden

//website gebruikt voor setinterval: https://www.bitdegree.org/learn/javascript-setinterval#:~:text=Stopping%20the%20Function,-In%20some%20cases&text=The%20setInterval()%20returns%20a,clearInterval(intervalId)%3B
//de dorst en blijheid gaan pas omlaag/omhoog wanneer er op start wordt gedrukt en er wordt een stopknop aangemaakt om het te stoppen. Wanneer er op de start- of stopknop wordt gedrukt, wordt er een fucntie met setinterval gestart die ervoor zorgt dat er een andere functie om de zoveel seconden wordt uitgevoerd.

startKnop.addEventListener("click", startFunction);


function startFunction() {
    dorstBar = setInterval(dorstMeter, 200);
    blijheidBar = setInterval(blijheidMeter, 300);
    stopKnop.textContent = "Stoppen";
    console.log("starten");
};

stopKnop.addEventListener("click", stopFunction);

function stopFunction() {
    console.log("stoppen");
    clearInterval(dorstBar);
    clearInterval(blijheidBar);
};


//site gebruikt voor het maken van de progressbar en het veranderen van de value in het element: https://stackoverflow.com/questions/20277052/how-to-make-a-health-bar
https: //developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

//Site opgezocht voor het gebruik van location.reload() :https://www.w3schools.com/jsref/met_loc_reload.asp. Hiermee wordt de pagina na 7 seconden opnieuw geladen wanneer de dorst of blijheid te laag of hoog is.

//met de startknop(startKnop-> startFunction) worden onderstaande functies gestart

function dorstMeter() {
    dorstWaarde = dorstWaarde + 1;
    dorstScore.value = dorstWaarde;
    if (dorstWaarde == 100) {
        console.log("game over");
        gameOverScore.textContent = "[Game Over] " + "Score getapte biertjes: " + aantalGlazen + " Getapte biertjes";
        gameOverScore.classList.add("meldingtekst");
        reload = setTimeout(refresh, 7000);
        stopFunction();
    } else {

    };
};

function blijheidMeter() {
    blijheidWaarde = blijheidWaarde - 1;
    blijheidScore.value = blijheidWaarde;
    if (blijheidWaarde == 0) {
        console.log("game over");
        gameOverScore.textContent = "[Game Over] " + "Score getapte biertjes: " + aantalGlazen + " Getapte biertjes";
        gameOverScore.classList.add("meldingtekst");
        reload = setTimeout(refresh, 7000);
        stopFunction();
    } else {

    };
};

function refresh() {
    location.reload();
};

//function aangemaakt om het tappen van het bier te regelen. Er wordt alleen bier getapt wanneer er een glas onder de tap is gezet.

bierTap.addEventListener("click", bierTappen);

function bierTappen() {
    if (glasVol == 1) {
        console.log("Er is al bier getapt!");
    } else if (glasLeeg1 == 1) {
        console.log("glas staat onder tap");
        nummer = Math.random() * 3;
        nummer = Math.floor(nummer);
        console.log(nummer)
        if (nummer == 0) {
            getaptGlas.src = "./images/glasggevmets.png";
            glasVervang.src = "./images/dummy.png";
            getaptGlas1 = 1;
            glasVol = 1;
        } else if (nummer == 1) {
            getaptGlas.src = "./images/glasggevzons.png";
            glasVervang.src = "./images/dummy.png";
            getaptGlas1 = 2;
            glasVol = 1;
        } else if (nummer == 2) {
            getaptGlas.src = "./images/glasnietggev.png";
            glasVervang.src = "./images/dummy.png";
            getaptGlas1 = 3;
            glasVol = 1;
        } else {

        };
    } else {
        console.log("plaats een glas onder de tap!")
    };
};


//function voor het weghalen van het schuim van het eerder getapte biertje. Dit werkt alleen als er een biertje is getapt.

bierSpatel.addEventListener("click", schuimVerwijderen);

function schuimVerwijderen() {
    if (getaptGlas1 == 1) {
        getaptGlas.src = "./images/glasmetschuimklaar.png";
        bierVoorKlant1 = 1;
        schuimWeg = 1;
    } else if (getaptGlas1 == 2) {
        getaptGlas.src = "./images/glasgoedgevzonderklaar.png";
        bierVoorKlant1 = 2;
        schuimWeg = 1;
    } else if (getaptGlas1 == 3) {
        bierVoorKlant1 = 3;
        schuimWeg = 1;
        console.log("Er is geen schuim!");
    } else {
        console.log("er is nog geen bier getapt!");
    }

};


//functie voor het verplaatsen van het bier zonder schuim naar de klant aan de bar. De functie wordt alleen volledig uitgevoerd wanneer de vorige onderdelen ook goed zijn gegaan.

klantBar.addEventListener("click", bierNaarKlant);

function bierNaarKlant() {

    if (viltjeBar1 == 1) {
        if (bierVoorKlant1 == 1) {
            bierOpBar.src = "./images/glasmetschuimklaar.png";
            getaptGlas.src = "./images/dummy.png";
            scoreBijwerken(volschuim);
            klantTevreden = 1;
        } else if (bierVoorKlant1 == 2) {
            bierOpBar.src = "./images/glasgoedgevzonderklaar.png";
            getaptGlas.src = "./images/dummy.png";
            scoreBijwerken(volzonderschuim);
            klantTevreden = 1;
        } else if (bierVoorKlant1 == 3) {
            bierOpBar.src = "./images/glasnietggev.png";
            getaptGlas.src = "./images/dummy.png";
            scoreBijwerken(nietvol);
            klantTevreden = 1;
        } else if (getaptGlas1 >= 1) {
            console.log("Er zit nog schuim op het bier!");
        } else {
            console.log("Tap eerst een biertje!");
        };
    } else if (klantTevreden == 1) {
        console.log("Dankjewel!");
    } else {
        console.log("Er is nog geen bier getapt!");
        console.log("Er ligt nog geen viltje op de bar!");
    };
};


//functie om de scores bij te werken aan de hand van het getapte glas bier. Ook wordt de score weergeven voor de gebruiker. Elk biertje heeft andere waarden vnan dorst en blijheid. Dit gebeurt alleen als de eerdere functies goed zijn uitgevoerd.

function scoreBijwerken(typeGlas) {
    if (typeGlas == volschuim) {
        dorstWaarde = dorstWaarde - 20;
        dorstScore.value = dorstWaarde;

        blijheidWaarde = blijheidWaarde + 15;
        blijheidScore.value = blijheidWaarde;
        reset();
        aantalGlazen = aantalGlazen + 1;
        scoreBord.textContent = aantalGlazen + " Getapte biertjes";
    } else if (typeGlas == volzonderschuim) {
        dorstWaarde = dorstWaarde - 25;
        dorstScore.value = dorstWaarde;

        blijheidWaarde = blijheidWaarde + 10;
        blijheidScore.value = blijheidWaarde;
        reset();
        aantalGlazen = aantalGlazen + 1;
        scoreBord.textContent = aantalGlazen + " Getapte biertjes";
    } else if (typeGlas == nietvol) {
        dorstWaarde = dorstWaarde - 10;
        dorstScore.value = dorstWaarde;

        blijheidWaarde = blijheidWaarde + 5;
        blijheidScore.value = blijheidWaarde;
        reset();
        aantalGlazen = aantalGlazen + 1;
        scoreBord.textContent = aantalGlazen + " Getapte biertjes";
    } else {

    };
};


//function die wordt uitgevoerd om voornamelijk de controle variabelen van de eerdere functies te resetten zodat er weer een nieuw biertje kan worden getapt.

function reset() {
    klantTevreden = 0;
    glasVol = 0;
    getaptGlas1 = 0;
    glasLeeg1 = 0;
    bierVoorKlant1 = 0;
    schuimWeg = 0;
    viltjeBar1 = 0;
    console.log("Gelukt!");
}