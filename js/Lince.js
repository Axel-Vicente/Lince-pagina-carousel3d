var angle = 0;
var angleRotationDefault = 45;
var opacity = 0;
var intervalID = 0;
document.onclick = capture_click;

function galleryspin(sign, link, angleRotation) {
    spinner = document.querySelector("#spinner");
    if (link == 'yes') {
        angle = angleRotation;
    }else{
        if (!sign) { angle = angle + angleRotationDefault; } else { angle = angle - angleRotationDefault; }
    }
    spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
    info(angle);
}

function info(angleRotation) {
    if (angleRotation == 360 || angleRotation == -360) { angle = 0; }
    if (angleRotation == 0 || angleRotation == 360 || angleRotation == -360) {
        document.querySelector("#info").innerHTML = "<div class='cards' id='text'>" +
                                                        "<div class='card-item'>" +
                                                            "<div class='card-image'>" +
                                                                "<img class='card-image-img' src='img/lince-alimentacion.jpg'/>" +
                                                            "</div>" +
                                                            "<div class='card-info'>" +
                                                                "<h2 class='card-title'>Alimentación</h2>" +
                                                                "<p class='card-intro'>El lince ibérico es el único carnívoro considerado como especialista en conejos. Esta especie le aporta del 80 al 90% de su alimentación. También consume anátidas, ungulados, perdices, micromamíferos y aves. La aparición de estas presas en su dieta depende de la época del año, de la disponibilidad de presas y de la zona.</p>" +
                                                            "</div>" +
                                                        "</div>" +
                                                    "</div>";
        fadeInAnimation();
    } else if (angleRotation == 45 || angleRotation == -315) {
        document.querySelector("#info").innerHTML = "<div class='cards' id='text'>" +
                                                        "<div class='card-item'>" +
                                                            "<div class='card-image'>" +
                                                                "<img class='card-image-img' src='img/lince-reproduccion.jpg'/>" +
                                                            "</div>" +
                                                            "<div class='card-info'>" +
                                                                "<h2 class='card-title'>Reproducción</h2>" +
                                                                "<p class='card-intro'>La época del celo comienza entre enero y febrero, adelantándose en las regiones meridionales desde finales del mes de diciembre hasta mediados del mes de febrero. El lince, a pesar de ser un animal de hábitos solitarios, en esta época del año suele permanecer con su pareja.<br>Eligen las madrigueras en lugares bien protegidos y escondidos como roquedos o árboles huecos. La gestación dura de sesenta y cinco a setenta y dos días, de lo que se deduce que la época del nacimiento se sitúa entre los meses de marzo y abril. Las camadas suelen constar de una a cuatro crías, siendo lo más habitual dos cachorros. A las cuatro semanas la madre lince cambia de madriguera, y a los dos meses los cachorros son capaces de acompañar a su madre en las cacerías. Estos son independientes a los siete o doce meses (más o menos cuando la hembra entra de nuevo en celo) y permanecen en su territorio natal hasta los veinte meses. Suelen sobrevivir a la independencia entre uno y dos linces por hembra.</p>" +
                                                            "</div>" +
                                                        "</div>" +
                                                    "</div>";
        fadeInAnimation();
    } else if (angleRotation == 90 || angleRotation == -270) {
        document.querySelector("#info").innerHTML = "<div class='cards' id='text'>" +
                                                        "<div class='card-item'>" +
                                                            "<div class='card-image'>" +
                                                                "<img class='card-image-img' src='img/lince-beneficios.jpg'/>" +
                                                            "</div>" +
                                                            "<div class='card-info'>" +
                                                                "<h2 class='card-title'>Beneficios de la consevación del lince</h2>" +
                                                                "<p class='card-intro'>La consevación de esta especie tiene especial importancia desde distintos puntos de vista: <br>" +
                                                                "<ol>" +
                                                                    "<li>Se considera una especie paraguas, es decir su protección conlleva la de su hábitat, el monte mediterráneo, y las especies asociadas de fauna y flora silvestres que forman parte de nuestro patrimonio medioambiental.</li>" +
                                                                    "<li>Ecológicamente, el lince es un gran depredador que ejerce un papel controlador de mesodepredadores como el zorro o el meloncillo, disminuyendo la presión sobre la presa base común a varias especies, el conejo de monte.</li>" +
                                                                    "<li>Desde el punto de vista socioeconómico la conservación de su hábitat genera miles de puestos de trabajo para Extremadura, Murcia, Andalucía y Castilla La Mancha.</li>" +
                                                                    "<li>Por último, el lince ibérico forma parte de nuestro patrimonio natural y su conservación es una responsabilidad para los poderes públicos y para las personas pues constituye una especie fundamental en el equilibrio de determinados ecosistemas de la Península Ibérica.</li>" +
                                                                "</ol>" +
                                                                "</p>" +
                                                            "</div>" +
                                                        "</div>" +
                                                    "</div>";
    } else if (angleRotation == 135 || angleRotation == -225) {
        document.querySelector("#info").innerHTML = "<div class='cards' id='text'>" +
                                                        "<div class='card-item'>" +
                                                            "<div class='card-image'>" +
                                                                "<img class='card-image-img' src='img/lince-habitat.jpg'/>" +
                                                            "</div>" +
                                                            "<div class='card-info'>" +
                                                                "<h2 class='card-title'>Hábitat y territorio</h2>" +
                                                                "<p class='card-intro'>Es una especie solitaria que en general rechaza la presencia de iguales de su mismo sexo en su territorio.<br>La disponibilidad de territorio les otorga un mayor rango jerárquico, con mayor zona de caza, de descanso y reproducción.<br>Por este motivo, los linces asentados deben dedicar gran parte de su actividad diaria a campear el territorio, marcando éste principalmente con excrementos y orina.Las hembras necesitan territorios abundantes en alimento y en refugios que faciliten la reproducción y cuidado de sus crías.Los linces machos intentan incluir en su territorio el mayor número de territorios de hembras reproductoras, lo que implica una mayor área de campeo.Tanto machos como hembras tienen territorios propios en el que no permiten la presencia de individuos del mismo sexo, excepto en caso de relaciones parentales durante un periodo de tiempo determinado.<br>Durante el primer mes de vida de las crías, las hembras reducen su área de campeo para no alejarse de la madriguera donde mantienen a su camada. Esto les permite vigilar y alimentar continuamente a sus cachorros.<br>Otro aspecto importante respecto al territorio, es la necesidad de presencia de agua permanente.</p>" +
                                                            "</div>" +
                                                        "</div>" +
                                                    "</div>";
    } else if (angleRotation == 180 || angleRotation == -180) {
        document.querySelector("#info").innerHTML = "<div class='cards' id='text'>" +
                                                        "<div class='card-item'>" +
                                                            "<div class='card-image'>" +
                                                                "<img class='card-image-img' src='img/lince-crias.jpg'/>" +
                                                            "</div>" +
                                                            "<div class='card-info'>" +
                                                                "<h2 class='card-title'>La cría</h2>" +
                                                                "<p class='card-intro'>A los 20 días de nacer la hembra transporta a sus cachorros hacia un nuevo refugio para evitar parásitos y evitar la atracción de depredadores. Estos cambios son continuos hasta que las crías puedan desplazarse por sí mismas. A partir de los 28 días de vida son capaces de salir de la madriguera y son lactantes hasta los 65 días de vida. Cuando alcanzan el primer mes la hembra trae a la madriguera sus presas, para ir desarrollando su capacidad predadora mediante juegos.<br>Durante la crianza la madre juega un papel fundamental en el proceso de desarrollo del comportamiento de la caza, fuertemente innato. Desde la primera pieza que les muestra aunque aún no estén preparados para consumirlas, avanza progresivamente dejando a su presas malheridas para que los cachorros perfeccionen sus cualidades para la caza con presas fácilmente capturables.<br>Los cachorros dan caza a su primer conejo en torno a los 100 días de vida, momento en el que comienzan a depurar las técnicas de acecho y rececho propias de la especie.</p>" +
                                                            "</div>" +
                                                        "</div>" +
                                                    "</div>";
    } else if (angleRotation == 225 || angleRotation == -135) {
        document.querySelector("#info").innerHTML = "<div class='cards' id='text'>" +
                                                        "<div class='card-item'>" +
                                                            "<div class='card-image'>" +
                                                                "<img class='card-image-img' src='img/lince-recuperacion.jpg'/>" +
                                                            "</div>" +
                                                            "<div class='card-info'>" +
                                                                "<h2 class='card-title'>Recuperación del lince ibérico</h2>" +
                                                                "<p class='card-intro'>" +
                                                                    "<dt>Las principales amenazas para el lince ibérico han sido:</dt>" +
                                                                        "<dd>-La baja abundancia del conejo.</dd>" +
                                                                        "<dd>-La mortalidad no natural y por enfermedades.</dd>" +
                                                                        "<dd>-La baja variabilidad genética.</dd>" +
                                                                        "<dd>-Bajo número de poblaciones.</dd>" +
                                                                    "<dt>En base a estas amenazas detectadas, las principales líneas de actuación de los proyectos de recuperación han sido:</dt>" +
                                                                        "<dd>-La recuperación del conejo silvestre para aumentar la capacidad del hábitat para sostener mayor población de linces en las zonas donde ya existe presencia.</dd>" +
                                                                        "<dd>-Reducción de la mortalidad no natural, debida a la actividad humana.</dd>" +
                                                                        "<dd>-Establecimiento de un programa sanitario.</dd>" +
                                                                        "<dd>-Reforzamiento genético de la población de Doñana.</dd>" +
                                                                        "<dd>-Creación de nuevas poblaciones mediante reintroducción.</dd><br><br>" +
                                                                "Para alcanzar estos objetivos ha sido necesario elaborar acuerdos de colaboración con titulares de terrenos de particulares, ya que gran parte del área de distribución del lince incluye fincas destinadas a cotos de caza, el 80% de titularidad privada.<br>Entre los años 2002 y 2010 en Doñana, el número mínimo de linces detectados por fototrampeo pasó de 93 a 252 ejemplares , aumentando el territorio de ocupación en 41.000 ha. En Sierra Morena también aumentó la población de 59 a 179 individuos y el área ocupada.<br>Para facilitar el intercambio genético en Doñana se utilizó la translocación de 4 ejemplares procedentes de Sierra Morena. Así mismo, se han creado dos nuevas poblaciones por reintroducción, con un total de 100 linces.<br>El escenario para la especie aún es inestable pero prometedora si se continúan aplicando medidas de conservación de forma eficaz.</p>" +
                                                            "</div>" +
                                                        "</div>" +
                                                    "</div>";
    } else if (angleRotation == 270 || angleRotation == -90) {
        document.querySelector("#info").innerHTML = "<div class='cards' id='text'>" +
                                                        "<div class='card-item'>" +
                                                            "<div class='card-image'>" +
                                                                "<img class='card-image-img' src='img/lince-extra.jpg'/>" +
                                                            "</div>" +
                                                            "<div class='card-info'>" +
                                                                "<h2 class='card-title'>Amenzazas</h2>" +
                                                                "<p class='card-intro'>Las principales amenazas sobre la especie son la mortalidad inducida por el hombre, sobre todo por atropellos con vehículos de motor, pero también por caza furtiva directa, instalación de cepos y lazos dirigidos a otras especies, envenenamiento ilegal, etc.<br>Desde el año 2000, han muerto en Doñana cincuenta y siete linces, veinticuatro de los cuales fueron atropellados. El índice de mortalidad es alto en las carreteras que unen Matalascañas con las poblaciones cercanas, donde murieron ocho animales en la última década. La cifra es elevada si tenemos en cuenta que el número de linces que habitan en el parque no supera el medio centenar. Cuatro de cada diez linces atropellados mueren en estas carreteras, ya que la vía atraviesa una de las zonas que utilizan los linces para sus desplazamientos.<br>Está amenazado por la tuberculosis, persecución y caza de su especie y de sus presas. La reducción de las poblaciones de conejo como consecuencia de la mixomatosis, neumonía vírica, así como la ganadería intensiva, con la consiguiente sobreexplotación del estrato herbáceo, que limita a su vez las poblaciones de conejos y repercute en los linces ibéricos es también una amenaza a tener en cuenta." +
                                                                "</p>" +
                                                            "</div>" +
                                                        "</div>" +
                                                    "</div>";
    } else if (angleRotation == 315 || angleRotation == -45) {
        document.querySelector("#info").innerHTML = "<div class='cards' id='text'>" +
                                                        "<div class='card-item'>" +
                                                            "<div class='card-image'>" +
                                                                "<img class='card-image-img' src='img/lince-comportamiento.jpeg'/>" +
                                                            "</div>" +
                                                            "<div class='card-info'>" +
                                                                "<h2 class='card-title'>Comportamiento</h2>" +
                                                                "<p class='card-intro'>En la mayoría de los casos, el lince ibérico vive de manera solitaria y nómada, y es muy territorial, mostrándose más sociable en la época de celo. Es un ágil cazador. Se aproxima sigilosamente a la presa y salta sobre ella con rapidez. Menos frecuentemente espera oculto a que pase una presa.<br>Cuando las temperaturas máximas aumentan, los linces pasan más tiempo descansando, al contrario que cuando hay precipitaciones. Los linces juveniles son básicamente crepusculares y diurnos, con un aumento de su actividad nocturna después de su primer año de vida. Durante el invierno, los linces pueden tener actividad durante las veinticuatro horas del día, contrastando con sus hábitos casi estrictamente nocturnos en verano.<br>Un estudio de radiotelemetría en el parque nacional del Coto de Doñana mostró linces principalmente nocturnos, con la actividad concentrada en el crepúsculo, y cuando los animales se movían de sus lugares de reposo diurnos hacia los de caza nocturna. El recorrido diario realizado fue como promedio de siete kilómetros, con los machos viajando generalmente más lejos que las hembras." +
                                                                "</p>" +
                                                            "</div>" +
                                                        "</div>" +
                                                    "</div>";
    }
}

function fadeInAnimation(){
    setInterval(show, 200);
}

function show(){
    var text = document.querySelector("#text");
    opacity = Number(window.getComputedStyle(text).getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 0.1;
        text.style.opacity = opacity + 0.1;
    } else {
        clearInterval(intervalID);
    }
}

function preloadChargeDefaultImg(){
    info(0);
}

function rotateAndSelect(angleRotation){
    galleryspin('', 'yes', angleRotation);

    var click = event.target;
    var elements = document.querySelectorAll(".selected");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("selected");
    }
    click.classList.add("selected");
}