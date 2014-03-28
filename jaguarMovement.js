function jaguarMovement(){
    if (jaguar.position.x < -200 || jaguar.position.x > SCREEN_WIDTH + 200) {
        // CREATE NEW JAGUAR
        jaguarGoesToLeft = jaguarGoesToLeft ? false : true;
    };

    if (!jaguarGoesToLeft) jaguar.scale.x = -0.75; //TODO: Fix backward collision (the cause is the negative scale, but why?)
    else jaguar.scale.x = 0.75;

    jaguar.scale.y = 0.75;
    
    jaguarGoesToLeft ? jaguar.position.x -= 5 : jaguar.position.x += 5;
}