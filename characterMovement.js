function characterMovement(){
    velocityX = 0;
    velocityY = 0;

    if (isBunnyJumping) {
        if (jumpedDistance >= BUNNY_JUMPING_MAX) {
            isBunnyJumping = false;
            isBunnyFalling = true;
            jumpedDistance = 0;
        }
        else {
            velocityY -= JUMP_VELOCITY;
            jumpedDistance++;
        }
    }
    else if (isBunnyFalling) {
        if ((bunny.position.y + bunny.height/2) < SCREEN_HEIGHT) {
            velocityY += GRAVITY;
        };
    }

    if (key_left) velocityX -= LATERAL_VELOCITY;
    else if (key_right) velocityX += LATERAL_VELOCITY;
    if (key_up) {
        if (bunny.position.y + bunny.height/2 === SCREEN_HEIGHT) { // is on floor?
            isBunnyJumping = true;
            isBunnyFalling = false;
        }
    };

    bunny.position.x += velocityX;
    bunny.position.y += velocityY;
    // CHECK FLOOR LANDING
    if (bunny.position.y + bunny.height/2 + velocityY > SCREEN_HEIGHT)
        bunny.position.y = SCREEN_HEIGHT - bunny.height/2;
}