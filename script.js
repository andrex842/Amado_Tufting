$(document).ready(function(){
    $('#centered-div').fadeIn(10000);
});
const scrollingDiv = document.querySelector('.content');

function mostrarProductosPagina(pagina) {
    // Oculta todas las tarjetas de productos
    $('.col-md-3').hide();
    
    // Calcula el rango de tarjetas que deben mostrarse
    var inicio = (pagina - 1) * 4;
    var fin = inicio + 4;
    
    // Muestra las tarjetas de productos en el rango
    $('.col-md-3').slice(inicio, fin).show();
}

// Maneja el clic en los botones de paginación
$('.page-link').click(function (e) {
    e.preventDefault();
    var pagina = parseInt($(this).text());
    mostrarProductosPagina(pagina);
});

// Mostrar la primera página por defecto
mostrarProductosPagina(1);



   const frameworks = [
    {
    name: "Evita Altas Temperaturas",
    title: "Evita la prolongaciòn al sol y a las altas temperaturas.",
    description: "Con este sencillo paso prolongas mas la vida de la alfombra, evitando la exposiciòn al sol directo.",
    Image: src="Imagenes/solito.png"
    },
    {
    name: "Cortar",
    title: "Cortar sin halar",
    description: "Si vez una hebra de lana cortala sin tirar de ella, recuerda que tu alfombra puede desprende microfibras durante los primeros dias",
    Image: src="Imagenes/solito.png"
    },
    {
    name: "Limpia",
    title: "Limpia con pañitos",
    description: "Recuerda limpiar una vez al mes y en caso de manchas limpia tu alfombra con un pañito o un trapo humedo, agua tibia y detergente",
    Image: src="Imagenes/solito.png"
    },
    {
    name: "No lavadora",
    title: "Evitar hacer el uso de lavadora",
    description: "No es para lavar en la lavadora, ya que desprende las fibras de tu alfombra",
    Image: src="Imagenes/solito.png"
    }
   ];
   
   function move(id, position, color, labelText) {
    var tl = gsap.timeline();
    tl.to("#bgBubble", { duration: 0.15, bottom: "-30px", ease: "ease-out" }, 0)
    .to("#bubble1", { duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out" }, 0)
    .to("#bubble2", { duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out" }, 0)
    .to("#bubble3", { duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out" }, 0)
    .to("#bubble4", { duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out" }, 0)
    .to(".icon", { duration: 0.05, opacity: 0, ease: "ease-out" }, 0)
    .to("#bgBubble", { duration: 0.2, left: position, ease: "ease-in-out" }, 0.1)
    .to("#bgBubble", { duration: 0.15, bottom: "-50px", ease: "ease-out" }, '-=0.2')
    .to(`#bubble${id}`, { duration: 0.15, y: "0%", opacity: 1, boxShadow: '0 3px 3px rgba(0,0,0,0.12), 0 3px 3px rgba(0,0,0,0.24)', ease: "ease-out" }, '-=0.1')
    .to(`#bubble${id} > span`, { duration: 0.15, y: "0%", opacity: 0.7, ease: "ease-out" }, '-=0.1')
    .to("#navbarContainer", { duration: 0.3, backgroundColor: color, ease: "ease-in-out" }, 0)
    .to("#bg", { duration: 0.3, backgroundColor: color, ease: "ease-in-out" }, 0)
    .to("#bgBubble", { duration: 0.3, backgroundColor: color, ease: "ease-in-out" }, 0);
   
    // Agregar una etiqueta de texto centrada en el navbarContainer
    var navbarContainer = document.getElementById("navbarContainer");
    var label = document.createElement("div");
    label.textContent = labelText;
    label.style.position = "absolute";
    label.style.top = "50%";
    label.style.left = "50%";
    label.style.transform = "translate(-50%, -50%)";
    navbarContainer.appendChild(label);
    var previousFrameworkInfo = document.getElementById("frameworkInfo");
    if (previousFrameworkInfo) {
    navbarContainer.removeChild(previousFrameworkInfo);
    }
    
    // Agregar información del framework correspondiente
 var frameworkInfo = document.createElement("div");
 frameworkInfo.id = "frameworkInfo"; // Asigna un ID para futuras referencias
 var framework = frameworks[id - 1]; // Restamos 1 porque los índices comienzan en 0
 frameworkInfo.innerHTML = `
 <img src="`+framework.Image+`">
 <h2>${framework.name}</h2>
 <p>${framework.title}</p>
 <p>${framework.description}</p>`;
 frameworkInfo.style.position = "absolute";
 frameworkInfo.style.top = "40%"; // Ajusta la posición según tus necesidades
 frameworkInfo.style.left = "50%";
 frameworkInfo.style.transform = "translate(-50%, -50%)";
 navbarContainer.appendChild(frameworkInfo);
    
   }

function ShowHide(){
    
    /*if(document.getElementById("ocultini").style.visibility=="hidden"){

        document.getElementById("ocultini").style.visibility ="visible";
    }
    else{
        document.getElementById("ocultini").style.visibility ="hidden";
    }*/
}

function calcular(){
    
    var valorFinxmetro2 = 4000;
    var ancho = document.getElementById('ancho').value;
    var largo = document.getElementById('Largo').value;
    var medida = parseInt(ancho) * parseInt(largo)/100;
    var fondo = medida * 300;
    var resultadoFin;
    
    if(document.getElementById('fondoS').checked){

        resultadoFin = medida*valorFinxmetro2+fondo;
    }
    if(document.getElementById('fondoN').checked){
        resultadoFin = medida*valorFinxmetro2-fondo;
    }
    document.getElementById("contenido").innerHTML= "El valor aproximado sera de: " +"<h1> $" + resultadoFin + "</h1>";
   
    
}



   
   