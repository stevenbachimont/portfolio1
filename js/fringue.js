
let timestep        = .005;
let steps_per_frame = 10;
let node_mass       = 0.5;
let gravity         = 6;
let spring          = 1000;
let damping         = .05;
let max_strain      =  4;

/* - - - Make Arrays for Positions, Velocities, and Connections - - - */

let pos = [], vel = [], mesh = [];

// Make grid of node positions with zero velocity
for (let x = 2; x < 800; x += 8) {
    for (let y = 10; y < 400; y+=8) {
        pos.push([x,y]);
        vel.push([0,0]);
    }
}

// Loop thru each node 'a'
for (let a = 0; a < pos.length; a++) {

    // Make empty array to store node 'a's connections
    mesh.push([]);

    // Loop thru other nodes 'b'
    for (let b = 0; b < pos.length; b++) {

        // Get distance between 'a' and 'b'
        let Lx = pos[b][0] - pos[a][0];
        let Ly = pos[b][1] - pos[a][1];
        let L  = Math.sqrt(Lx*Lx + Ly*Ly);

        // connect 'b' to 'a' if nearby
        if (L > 0 && L < 15) mesh[a].push( [b, L] );
    }
}

// Fix some nodes at the top
for (let n = 0; n < mesh.length; n++) {
    if (pos[n][1]<100 && Math.random()< .02) mesh[n] = [];
}

/* - - - Set up Mouse, Canvas and Drawing Context - - - */

let mouse_down = 0, mouse_x = 0, mouse_y = 0;

canvas.onmousedown = () => mouse_down = 1;
canvas.onmouseup   = () => mouse_down = 0;

canvas.onmousemove = (e) => {
    mouse_x = e.offsetX;
    mouse_y = e.offsetY;
}

let ctx = canvas.getContext('2d');

/* - - - Run Animation Loop - - - */

(function loop(){

    if (mouse_down) remove_springs_near_mouse();

    for (let i = 0; i < steps_per_frame; i++) update();

    draw();
    requestAnimationFrame(loop);

})()

/* - - - Update Function - - - */

// This does a 'timestep' across all nodes

function update() {

    // Loop thru each node 'a'
    for (let a = 0; a < mesh.length; a++) {

        // Loop thru node's connections
        for (let i = 0; i < mesh[a].length; i++) {

            // Get node 'b' and rest length L0 between nodes 'a' and 'b'
            let b  = mesh[a][i][0];
            let L0 = mesh[a][i][1];

            // Get actual Distance between nodes 'a' and 'b'
            let Lx = pos[b][0] - pos[a][0];
            let Ly = pos[b][1] - pos[a][1];
            let L  = Math.sqrt(Lx*Lx + Ly*Ly);

            // Get strain between nodes 'a' and 'b'
            let strain = (L - L0)/L0;

            // Break connection if too much strain
            if (strain > max_strain) {
                remove_spring(a, b);
            }
            // Otherwise, Update Velocity
            else {

                // Get node 'a' velocity
                let Vx = vel[a][0];
                let Vy = vel[a][1];

                // Get Spring and Damping Forces
                let springF  = Math.max(0, spring*strain);
                let dampingF = -damping*(Lx*Vx+Ly*Vy)/L;

                // Find Force
                let Fx = (Lx/L)*(springF + dampingF);
                let Fy = (Ly/L)*(springF + dampingF);

                // Update Velocity
                vel[a][0] += (Fx/node_mass)*timestep;
                vel[a][1] += (Fy/node_mass + gravity)*timestep;
            }
        }
    }

    // Update Node Position
    for (let n = 0; n < mesh.length; n++) {

        pos[n][0] += vel[n][0]*timestep;
        pos[n][1] += vel[n][1]*timestep;
    }
}

/* - - - Draw Function - - - */

function draw() {

    // Clear canvas, begin making a line drawing
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.beginPath();
    ctx.strokeStyle = "rgba(221,149,232,0.98)";
    ctx.shadowColor = "rgba(221, 149, 232, 0.8)";
    ctx.shadowBlur = 10;

    // Loop thru each node's connections
    for (let a = 0; a < pos.length; a++) {
        for (let i = 0; i < mesh[a].length; i++) {

            // Add line from node 'a' to node 'b'
            let b = mesh[a][i][0];

            ctx.moveTo(pos[a][0], pos[a][1]);
            ctx.lineTo(pos[b][0], pos[b][1]);
        }
    }

    // Draw the lines and also a square to show mouse position
    ctx.stroke();
    ctx.fillRect(mouse_x-10, mouse_y-10,0,0);
}

/* - - - Mouse / Interactive Functions - - - */

function remove_spring(a, b) {

    for (let [A,B] of [[a,b],[b,a]]){
        for (let i = 0; i < mesh[A].length; i++) {

            if (mesh[A][i][0] == B) mesh[A].splice(i,1);
        }
    }
}

function remove_springs_near_mouse() {

    let N  = [];

    for (let n = 0; n < mesh.length; n++) {
        if (Math.abs(mouse_x - pos[n][0]) < 10) {
            if (Math.abs(mouse_y - pos[n][1]) < 10) N.push(n);
        }
    }

    for (let a of N) {
        for (let b of mesh[a]) {
            if (a != b) remove_spring(a,b[0]);
        }
    }
}


/*

- Notes -

Each node has a 'number'

// Example mesh with 2 nodes

(node 0) - - - - - - (node 1)

node 0 is at x,y =  0, 0
node 1 is at x,y = 42, 0

pos = [
   [0,  0],     // node 0: x =  0, y = 0
   [42, 0],     // node 1: x = 42, y = 1
]

vel = [
   [0, 0],      // node 0: vx = 0, vy = 0
   [0, 0],      // node 1: vx = 0, vy = 0
]

mesh = [
   [ [1, 42] ],   // node 0: connected to node 1 with rest length of 42
   [ [0, 42] ],   // node 1: connected to node 0 with rest length of 42
]

*/
