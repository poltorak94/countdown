(function () {

    const targetDate = new Date(2020, 6, 27, 0, 0, 0, 0);
    const startDate = new Date(2020, 0, 1, 0, 0, 0, 0);

    const maxDays = Math.floor((targetDate - startDate) / (24 * 3600 * 1000));

    const days = document.querySelector('#countdown-days>div');
    const daysBG = document.querySelector('#countdown-days>p');
    const hours = document.querySelector('#countdown-hours>div');
    const hoursBG = document.querySelector('#countdown-hours>p');
    const minutes = document.querySelector('#countdown-minutes>div');
    const minutesBG = document.querySelector('#countdown-minutes>p');
    const seconds = document.querySelector('#countdown-seconds>div');
    const secondsBG = document.querySelector('#countdown-seconds>p');

    function countdown() {
        let delta = Math.round((targetDate - new Date()) / 1000);

        const d = Math.floor(delta / (24 * 3600));

        delta -= d * 24 * 3600;
        const h = Math.floor(delta / 3600);

        delta -= h * 3600;
        const m = Math.floor(delta / 60);

        s = delta - m * 60

        days.textContent = d;
        hours.textContent = h < 10 ? '0' + h : h;
        minutes.textContent = m < 10 ? '0' + m : m;
        seconds.textContent = s < 10 ? '0' + s : s;

        daysBG.style.bottom = `${-d * 100 / maxDays}%`;
        hoursBG.style.bottom = `${-h * 100 / 24}%`;
        minutesBG.style.bottom = `${-m * 100 / 60}%`;
        secondsBG.style.bottom = `${-s * 100 / 60}%`;


        let daysExpressions = ['день', 'дня', 'дней'];
        let hoursExpressions = ['час', 'часа', 'часов'];
        let minutesExpressions = ['минута', 'минуты', 'минут'];
        let secondsExpressions = ['секунда', 'секунды', 'секунд'];

        let secondsResult;
        let minutesResult;
        let hoursResult;
        let daysResult;
        let countS = s % 100;
        let countM = m % 100;
        let countH = h % 100;
        let countD = d % 100;
        if (countS >= 5 && countS <= 20) {
            secondsResult = secondsExpressions['2'];
        } else {
            countS = countS % 10;
            if (countS == 1) {
                secondsResult = secondsExpressions['0'];
            } else if (countS >= 2 && countS <= 4) {
                secondsResult = secondsExpressions['1'];
            } else {
                secondsResult = secondsExpressions['2'];
            }
        }

        if (countM >= 5 && countM <= 20) {
            minutesResult = minutesExpressions['2'];
        } else {
            countM = countM % 10;
            if (countM == 1) {
                minutesResult = minutesExpressions['0'];
            } else if (countM >= 2 && countM <= 4) {
                minutesResult = minutesExpressions['1'];
            } else {
                minutesResult = minutesExpressions['2'];
            }
        }

        if (countH >= 5 && countH <= 20) {
            hoursResult = hoursExpressions['2'];
        } else {
            countH = countH % 10;
            if (countH == 1) {
                hoursResult = hoursExpressions['0'];
            } else if (countH >= 2 && countH <= 4) {
                hoursResult = hoursExpressions['1'];
            } else {
                hoursResult = hoursExpressions['2'];
            }
        }

        if (countD >= 5 && countD <= 20) {
            daysResult = daysExpressions['2'];
        } else {
            countD = countD % 10;
            if (countD == 1) {
                daysResult = daysExpressions['0'];
            } else if (countD >= 2 && countD <= 4) {
                daysResult = daysExpressions['1'];
            } else {
                daysResult = daysExpressions['2'];
            }
        }


        document.getElementsByClassName('seconds')[0].innerText = secondsResult;
        document.getElementsByClassName('minutes')[0].innerText = minutesResult;
        document.getElementsByClassName('hours')[0].innerText = hoursResult;
        document.getElementsByClassName('days')[0].innerText = daysResult;

        setTimeout(countdown, 500)
    }
    countdown();

})();


