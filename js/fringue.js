// Paramètres de la simulation
let timestep        = 0.005;    // Intervalle de temps pour chaque étape de simulation
let steps_per_frame = 20;       // Nombre d'étapes de simulation par trame d'animation
let node_mass       = 0.5;      // Masse de chaque nœud du système
let gravity         = 10;       // Force de gravité
let spring          = 2000;     // Constante de raideur du ressort
let damping         = 0.2;      // Facteur d'amortissement pour résister au mouvement
let max_strain      = 2;        // Déformation maximale autorisée dans un ressort

// Initialisation des positions, vitesses et connexions entre les nœuds
let pos = [], vel = [], mesh = [];

// Création des nœuds en grille avec positions et vitesses initiales
for (let x = 2; x < 800; x += 8) {
    for (let y = 10; y < 400; y += 8) {
        pos.push([x, y]);
        vel.push([0, 0]);
    }
}

// Création des ressorts entre les nœuds en fonction de leur distance
for (let a = 0; a < pos.length; a++) {
    mesh.push([]);

    for (let b = 0; b < pos.length; b++) {
        let Lx = pos[b][0] - pos[a][0];
        let Ly = pos[b][1] - pos[a][1];
        let L  = Math.sqrt(Lx * Lx + Ly * Ly);

        // Ajout du ressort à la connexion s'il est dans une certaine distance
        if (L > 0 && L < 15) mesh[a].push([b, L]);
    }
}

// Suppression aléatoire de certains ressorts en fonction de la position des nœuds
for (let n = 0; n < mesh.length; n++) {
    if (pos[n][1] < 100 && Math.random() < 0.02) mesh[n] = [];
}

// Variables pour l'interaction de la souris
let mouse_down = 0, mouse_x = 0, mouse_y = 0;

// Gestion des événements de la souris
canvas.onmousedown = () => mouse_down = 1;
canvas.onmouseup   = () => mouse_down = 0;
canvas.onmousemove = (e) => {
    mouse_x = e.offsetX;
    mouse_y = e.offsetY;
}

// Contexte du canvas
let ctx = canvas.getContext('2d');

// Boucle principale de la simulation
(function loop() {
    if (mouse_down) remove_springs_near_mouse();

    for (let i = 0; i < steps_per_frame; i++) update();

    draw();
    requestAnimationFrame(loop);
})();

// Fonction de mise à jour de la simulation
function update() {
    for (let a = 0; a < mesh.length; a++) {
        for (let i = 0; i < mesh[a].length; i++) {
            let b  = mesh[a][i][0];
            let L0 = mesh[a][i][1];
            let Lx = pos[b][0] - pos[a][0];
            let Ly = pos[b][1] - pos[a][1];
            let L  = Math.sqrt(Lx * Lx + Ly * Ly);
            let strain = (L - L0) / L0;

            // Suppression du ressort si la déformation est trop importante
            if (strain > max_strain) {
                remove_spring(a, b);
            } else {
                let Vx = vel[a][0];
                let Vy = vel[a][1];
                let springF  = Math.max(0, spring * strain);
                let dampingF = -damping * (Lx * Vx + Ly * Vy) / L;

                let Fx = (Lx / L) * (springF + dampingF);
                let Fy = (Ly / L) * (springF + dampingF);

                vel[a][0] += (Fx / node_mass) * timestep;
                vel[a][1] += (Fy / node_mass + gravity) * timestep;
            }
        }
    }

    // Mise à jour des positions des nœuds
    for (let n = 0; n < mesh.length; n++) {
        pos[n][0] += vel[n][0] * timestep;
        pos[n][1] += vel[n][1] * timestep;
    }
}

// Fonction de rendu graphique
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.strokeStyle = "rgba(93,93,93,0.98)";

    // Dessin des ressorts entre les nœuds
    for (let a = 0; a < pos.length; a++) {
        for (let i = 0; i < mesh[a].length; i++) {
            let b = mesh[a][i][0];
            ctx.moveTo(pos[a][0], pos[a][1]);
            ctx.lineTo(pos[b][0], pos[b][1]);
        }
    }

    // Dessin d'un petit rectangle à la position actuelle de la souris
    ctx.stroke();
    ctx.fillRect(mouse_x - 10, mouse_y - 10, 0, 0);
}

// Fonction pour supprimer un ressort entre deux nœuds
function remove_spring(a, b) {
    for (let [A, B] of [[a, b], [b, a]]) {
        for (let i = 0; i < mesh[A].length; i++) {
            if (mesh[A][i][0] == B) mesh[A].splice(i, 1);
        }
    }
}

// Fonction pour supprimer les ressorts proches de la position de la souris
function remove_springs_near_mouse() {
    let N = [];

    for (let n = 0; n < mesh.length; n++) {
        if (Math.abs(mouse_x - pos[n][0]) < 10 && Math.abs(mouse_y - pos[n][1]) < 10) {
            N.push(n);
        }
    }

    for (let a of N) {
        for (let b of mesh[a]) {
            if (a != b) remove_spring(a, b[0]);
        }
    }
}
