    
        let initial = 0;
        const optimization = document.getElementsByClassName('Counting')[0];

        const plusBtn = document.getElementsByClassName('plusBtn')[0];

        const minusBtn = document.getElementsByClassName('minusBtn')[0];


        plusBtn.addEventListener('click', () => {
            if (initial < 20) {
                initial++;
                optimization.innerText = initial;
            }
        });

        minusBtn.addEventListener('click', () => {
            if (initial > 0) {
                initial--;
                optimization.innerText = initial;
            }
        });

    

       