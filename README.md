# D3Physics

Link to Deployed Experience: https://cigreen.github.io/D3Physics/ 

Video References:
https://www.youtube.com/watch?v=CSSNP2DudNw&t=182s
https://www.youtube.com/watch?v=m6B8r_xuWZE 
https://www.youtube.com/watch?v=5W4kp46UWDA 

Code Example References:
https://labs.phaser.io/edit.html?src=src/physics/arcade/basic%20platform.js 
https://labs.phaser.io/view.html?src=src/physics/arcade/disable%20collider.js
https://labs.phaser.io/edit.html?src=src/physics/arcade/collider%20process%20callback.js

Gameplay/Experience Requirements: 

- **The game uses both continuous and discrete inputs from the player**: Satisfied (Discrete: Tap up arrow key to jump. Continuous: Hold down movement keys to move left/right. Holding down the jump button AFTER your first initial jump turns the rest of your jumps into long jumps as long as you continue holding down the jump button. Let go and your first jump will become a short jump once again.)

- **The player’s goal can only be achieved indirectly (by allowing the physics engine to move key objects into position/contact)**: Satisfied (Player must avoid soccer balls which move across the ground and bounce off the world bounds through jumping and movement influenced by gravity. Later levels see balls dropped from higher up, bouncing them around for the player to dodge).

- **3+ physics-based gameplay scenes**: Satisfied (LevelOne, LevelTwo, LevelThree).

- **Other scenes are used to separate and contextualize the gameplay scenes**: Satisfied (After each level there is a brief pause that prompts the player to click when they are ready to advance to the next level).

Asset Sources:
- Objects were made using Apple emojis converted to pngs using https://emoji.aranja.com/ 
- Ground resource was created using https://sketch.io/sketchpad/ 