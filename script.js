let score = 0;
        let count = 0;
        let gameOver = false;
        const n = Math.floor(Math.random() * 9) + 1;
        // const n = 9;
        function changeColor(block, blockNumber) {
            if (gameOver || block.style.backgroundColor === "green" || block.style.backgroundColor === "red") return;

            if (blockNumber !== n) {
                block.style.backgroundColor = "green";
                block.innerHTML = "💎"
                count++;
                // score += 10;
                // updateScore();

                if (count === 8) {
                    document.getElementById("demo").innerHTML = "You won the game!";
                    document.getElementById("demo").style.color = "green";
                    gameOver = true;
                    disableAllBlocks();
                }
            } else {
                block.style.backgroundColor = "red";
                document.getElementById("demo").innerHTML = "You lose the game!";
                document.getElementById("demo").style.color = "red";
                block.innerHTML = "💣"
                document.getElementById("contain").style.backgroundColor = "red";
                gameOver = true;
                disableAllBlocks();
            }
        }

        // function updateScore() {
        //     document.getElementById("score").textContent = score; // Update the score display
        // }

        function disableAllBlocks() {
            const blocks = document.querySelectorAll(".grid-item");
            blocks.forEach(block => block.classList.add("disabled")); // Disable further clicks
        }