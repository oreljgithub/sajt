let truba = document.getElementById('truba');
let gitara = document.getElementById('gitara');
let klarinet = document.getElementById('klarinet');
let dobos = document.getElementById('dobos');
let saksofon = document.getElementById('saksofon');
let klavir = document.getElementById('klavir');
let harfa = document.getElementById('harfa');
let violina = document.getElementById('violina');
let oboa = document.getElementById('oboa');
let harmonika = document.getElementById('harmonika');
let cinele = document.getElementById('cinele');
let djembe = document.getElementById('djembe');

muzickiInstrumenti = {
   truba:"Truba...",
gitara:"Gitara...",
klarinet:"Klarinet...",
dobos:"Dobos...",
saksofon:"Saksofon...",
klavir:"Klavir...",
harfa:"Harfa...",
violina:"Violina...",
oboa:"Oboa...",
harmonika:"Harmobika...",
cinele:"Cinele...",
djembe:"Djembe..."
    };
truba.addEventListener('mouseenter', function(){
    zvuk = document.getElementById('iTruba');
    zvuk.play();
    

    info = document.getElementById('iInfo');
    info.innerHTML = muzickiInstrumenti.iTruba;
    
});

gitara.addEventListener('mouseenter', function(){
    zvuk = document.getElementById('iGitara'); 
    zvuk.play();
    

    info = document.getElementById('iInfo');
    info.innerHTML = muzickiInstrumenti.gitara;
});

klarinet.addEventListener('mouseenter', function(){
    zvuk = document.getElementById('iKlarinet'); 
    zvuk.play();
    

    info = document.getElementById('iInfo');
    info.innerHTML = muzickiInstrumenti.klarinet;
});

dobos.addEventListener('mouseenter', function(){
    zvuk = document.getElementById('iDobos'); 
    zvuk.play();
    

    info = document.getElementById('iInfo');
    info.innerHTML = muzickiInstrumenti.dobos;
});

saksofon.addEventListener('mouseenter', function(){
    zvuk = document.getElementById('iSaksofon'); 
    zvuk.play();
    

    info = document.getElementById('iInfo');
    info.innerHTML = muzickiInstrumenti.saksofon;
});

klavir.addEventListener('mouseenter', function(){
    zvuk = document.getElementById('iKlavir');
    zvuk.play();
    

    info = document.getElementById('iInfo');
    info.innerHTML = muzickiInstrumenti.klavir;
    
});

harfa.addEventListener('mouseenter', function(){
    zvuk = document.getElementById('iHarfa'); 
    zvuk.play();
    

    info = document.getElementById('iInfo');
    info.innerHTML = muzickiInstrumenti.harfa;
});

violina.addEventListener('mouseenter', function(){
    zvuk = document.getElementById('iViolina'); 
    zvuk.play();
    

    info = document.getElementById('iInfo');
    info.innerHTML = muzickiInstrumenti.violina;
});

oboa.addEventListener('mouseenter', function(){
    zvuk = document.getElementById('iOboa'); 
    zvuk.play();
    

    info = document.getElementById('iInfo');
    info.innerHTML = muzickiInstrumenti.oboa;
});

harmonika.addEventListener('mouseenter', function(){
    zvuk = document.getElementById('iHarmonika'); 
    zvuk.play();
    

    info = document.getElementById('iInfo');
    info.innerHTML = muzickiInstrumenti.harmonika;
});

cinele.addEventListener('mouseenter', function(){
    zvuk = document.getElementById('iCinele'); 
    zvuk.play();
    

    info = document.getElementById('iInfo');
    info.innerHTML = muzickiInstrumenti.cinele;
});

djembe.addEventListener('mouseenter', function(){
    zvuk = document.getElementById('iDjembe'); 
    zvuk.play();
    

    info = document.getElementById('iInfo');
    info.innerHTML = muzickiInstrumenti.djembe;
});