const timeCountdown = document.querySelector('.time-countdown');
    
function renderTimeCountDown (day, hrs, min, sec){
    let setTime = setInterval(() => {
        let html = `
            <span class="days" id="days">${day}</span>
            <span class="hours" id="hours">${hrs}</span>
            <span class="minutes" id="minutes">${min}</span>
            <span class="seconds" id="seconds">${sec}</span>
        `;
        sec++;
        timeCountdown.innerHTML = html;
        if (day === 0 && hrs === 0&& min === 0) {
            let html = `
                <button class="btn-watch-match"><span>Watch now</span></button>
            `;
            timeCountdown.innerHTML = html;
            clearInterval(setTime);
            return 'Stats match';
        }else if (sec === 60){
            min++;
            sec = 0;
            if (min === 60) {
                hrs++;
                min = 00;
                if (hrs === 24) {
                    hrs = 00;
                    day--;
                }
            }
        }
    }, 1000);
}

renderTimeCountDown(1, 23, 59, 55);