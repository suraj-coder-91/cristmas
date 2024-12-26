// Function to create a random snowflake at a random position
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    // Randomize snowflake size
    const size = Math.random() * 10 + 5; // Size between 5px and 15px
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;

    // Randomize position (x-axis) and animation duration (fall speed)
    const xPos = Math.random() * window.innerWidth;
    snowflake.style.left = `${xPos}px`;

    // Random speed and delay for each snowflake's fall animation
    const fallDuration = Math.random() * 5 + 5; // Falling duration between 5s and 10s
    const fallDelay = Math.random() * 5; // Random delay before starting

    snowflake.style.animationDuration = `${fallDuration}s`;
    snowflake.style.animationDelay = `${fallDelay}s`;

    document.getElementById('snowflakes').appendChild(snowflake);

    // Remove snowflakes once they fall off-screen to optimize performance
    // setTimeout(() => {
    //     snowflake.remove();
    // },(fallDuration + fall);
