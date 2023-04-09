        let isPaused = false;
        let animationInterval;

        function togglePause(pause) {
            const ul = document.querySelector('.animate-scroll');
            if (pause) {
                ul.style.animationPlayState = 'paused';
            } else {
                ul.style.animationPlayState = 'running';
            }
        }

        let isPaused2 = false;
        let animationInterval2;

        function togglePause2(pause) {
            const ul = document.querySelector('.animate-scroll_2');
            if (pause) {
                ul.style.animationPlayState = 'paused';
            } else {
                ul.style.animationPlayState = 'running';
            }
        }

        let isPaused3 = false;
        let animationInterval3;

        function togglePause3(pause) {
            const ul = document.querySelector('.animate-scroll_3');
            if (pause) {
                ul.style.animationPlayState = 'paused';
            } else {
                ul.style.animationPlayState = 'running';
            }
        }