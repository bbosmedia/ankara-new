
const lang = document.querySelector('html').getAttribute("lang");

function translatorOfWebsite(word){
    if(word === "МЕНЮ" || word === "Меню"){
        if(lang === "en"){
            return "MENU";
        }else if(lang === "uz"){
            return "MENU";
        }else if(lang === "ru"){
            return "МЕНЮ";
        }
    }
    
}

export default translatorOfWebsite;