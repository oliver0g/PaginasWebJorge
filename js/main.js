const backendURL = "https://mi-backend.onrender.com"; // URL de tu backend

async function mostrarScores() {
  const response = await fetch(`${backendURL}/api/scores`);
  const scores = await response.json();

  const lista = document.getElementById("listaScores");
  lista.innerHTML = "";
  scores.forEach(s => {
    const li = document.createElement("li");
    li.textContent = `${s.name} - ${s.score} pts - Nivel ${s.level}`;
    lista.appendChild(li);
  });
}

// Llamar la función al cargar la página
mostrarScores();
