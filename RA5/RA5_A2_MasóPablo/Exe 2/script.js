// Funció per formatar la data
function formatDate(dateString) {
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6, 8);
    return `${day}/${month}/${year}`;
}

// Cargar y mostrar las variables meteorológicas
fetch("dadesobertes_pg.json")
    .then(response => response.json())
    .then(data => {
        let outputHTML = '';

        data.forEach(day => {
            const formattedDate = formatDate(day.diaPredit.replace('Z', ''));
            
            outputHTML += `
                <div>
                    <h2 class="day-title">Previsió del dia:</h2>
                    <div class="variable">
                        <div class="variable-title">estatDelCel:</div>
                        <div class="variable-value">${day.versio.variables.estatDelCel}</div>
                    </div>
                    <div class="variable">
                        <div class="variable-title">precipitacions:</div>
                        <div class="variable-value">${day.versio.variables.precipitacions}</div>
                    </div>
                    <div class="variable">
                        <div class="variable-title">temperatures:</div>
                        <div class="variable-value">${day.versio.variables.temperatures}</div>
                    </div>
                    <div class="variable">
                        <div class="variable-title">visibilitat:</div>
                        <div class="variable-value">${day.versio.variables.visibilitat}</div>
                    </div>
                    <div class="variable">
                        <div class="variable-title">vent:</div>
                        <div class="variable-value">${day.versio.variables.vent}</div>
                    </div>
                </div>
            `;
        });

        document.getElementById("output").innerHTML = outputHTML;
    })
    .catch(error => {
        document.getElementById("output").innerHTML = "Error al carregar les dades.";
        console.error("Error cargando JSON:", error);
    });
/*
Si sabem els nom de les propietats que esperem i volem mostrar-les amb estils diferents: Cal
afegir el següent javascript controlant cada propietat a la secció <script>
 // Cargar y mostrar el JSON
 fetch("superherois.json")
 .then(response => response.json())
 .then(data => {
 document.getElementById("output").innerHTML = `
 <h2>${data.squadName}</h2>
 <p><strong>Ciutat:</strong> ${data.homeTown}</p>
 <p><strong>Any de formació:</strong> ${data.formed}</p>
 <p><strong>Base secreta:</strong> ${data.secretBase}</p>
 <h3>Membres:</h3>
 ${data.members.map(hero => `
 <div class="hero">
 <h2>${hero.name}</h2>
 <p><strong>Identitat secreta:</strong> ${hero.secretIdentity}</p>
 <p><strong>Edat:</strong> ${hero.age}</p>
 <p><strong>Poders:</strong> ${hero.powers.join(", ")}</p>
 </div>
 `).join("")}
 `;
 })
 .catch(error => {
 document.getElementById("output").innerHTML = "Error al carregar les dades.";
 console.error("Error cargando JSON:", error);
 });
*/