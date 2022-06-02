const boton = document.getElementById("aceptar");
const ul = document.getElementById("ul");
const div = document.getElementById("tareas");

boton.addEventListener("click", (e) => {
    e.preventDefault();
    let texto = document.getElementById("input");
    if (texto.value == '') {
        alert("Introduce un texto valido!");
        return;
    }
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = texto.value;
    li.appendChild(quitarTarea());
    li.appendChild(p);
    ul.appendChild(li);
    div.appendChild(ul);
    texto.value = '';
});

function quitarTarea() {
    const quitarTar = document.createElement("button");
    quitarTar.textContent = "X";
    quitarTar.className = "quitarTar";
    quitarTar.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);
    })
    return quitarTar;
}