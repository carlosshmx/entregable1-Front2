/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
 datosPersona.nombre= prompt("Ingresa tu nombre");
 datosPersona.edad = 2024 - parseInt(prompt("Ingresa el año en que naciste"));
 datosPersona.ciudad= prompt("Ingresa la ciudad donde vives");
 datosPersona.interesPorJs = confirm("Te interes JavaScript?");
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const perfilNombre = document.querySelector("#nombre");
  const perfilEdad = document.querySelector("#edad");
  const perfilCiudad = document.querySelector("#ciudad");
  const perfilInteresJs = document.querySelector("#javascript");

  perfilNombre.innerText = datosPersona.nombre;
  perfilEdad.innerText = datosPersona.edad;
  perfilCiudad.innerText = datosPersona.ciudad;
  perfilInteresJs.innerText = datosPersona.interesPorJs == true ? "Si" : "No";
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const contenedorMaterias = document.querySelector("#fila");

  if(!contenedorMaterias.hasChildNodes()){
    listado.forEach((materia, index) => {

      const nuevaMateria = document.createElement("div");
      nuevaMateria.classList.add("caja");

      nuevaMateria.innerHTML = `<img src="${listado[index].imgUrl}" alt="${listado[index].lenguajes}">
      <p class="lenguajes">${listado[index].lenguajes}</p>
      <p class="bimestre">${listado[index].bimestre}</p>`

      contenedorMaterias.appendChild(nuevaMateria);
    });
  }

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const sitio = document.querySelector("#sitio")
  sitio.classList.toggle("dark")

}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

const sobreMi = document.querySelector("#sobre-mi");

window.addEventListener("keydown", (event) =>{
  if(event.key === "f"){
    sobreMi.classList.remove("oculto");
  }
})
