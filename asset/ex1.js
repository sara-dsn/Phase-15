var envoyer = document.getElementById("envoi");
envoyer.addEventListener("click", function(){
    f_valid();
});

function f_valid() {



    var societe = document.getElementById("societe").value;
    var s_manquant = document.getElementById("s_manquant");
    var s_validation=/^[A-Z][a-z]+$/;

    var contact = document.getElementById("contact").value;
    var c_manquant = document.getElementById("c_manquant");
    var c_validation=/^[a-zA-ZéèêëËÊÉÈÎÏîï][a-zéèëêîïâç]+([-'\[a-zA-ZéèêëËÊÉÈÎÏîï][a-zéèëêîïâç]+])$/;

    var cp = document.getElementById("cp").value;
    var cp_manquant = document.getElementById("cp_manquant");
    var cp_validation=/^0[0-9]{9}$/;

    var ville = document.getElementById("ville").value;
    var v_manquant = document.getElementById("v_manquant");
    var v_validation=/^[a-zA-ZéèêëËÊÉÈÎÏîï][a-zéèëêîïâç]+([-'\[a-zA-ZéèêëËÊÉÈÎÏîï][a-zéèëêîïâç]+])$/;

    var mail = document.getElementById("email").value;
    var e_manquant = document.getElementById("e_manquant");
    var e_validation=/^[a-zA-ZéèêëËÊÉÈÎÏîï][a-zéèëêîïâç]([-'\[a-zA-ZéèêëËÊÉÈÎÏîï][a-zéèëêîïâç]+])+@+[[a-zA-ZéèêëËÊÉÈÎÏîï][a-zéèëêîïâç]+].[a-zéèëêîïâç]{2}$/;


    if (s_validation.test(societe)==false) {
        alert("f");
        s_manquant.textContent = "Entrez le nom de la société s'il vous plaît quen avec ùmajus et minu.";
        s_manquant.style.color = "red";
    }
    else {
        alert("t");
        s_manquant.textContent="";
    };
    if (!contact.checkValidity) {
        c_manquant.textContent = "Entrez le nom de la personne à contacter s'il vous plaît.";
        c_manquant.style.color = "red";
    }
    if (!ville.checkvalidity) {
        v_manquant.textContent = "Entrez le nom de la Ville s'il vous plaît.";
        v_manquant.style.color = "red";
    }
    let select=document.getElementById("choix");
    let affiche=document.getElementById("champ");
    select.addEventListener("change",function(){
        affiche.value=select.value;
    })
    };