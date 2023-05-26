"use strict";
window.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('section'), counts = document.querySelector('.counts'), times = document.querySelector('.times');
    let counter = 1;
    function createTable(section) {
        let resultRandom = getRandomInt(1, 100);
        const table = document.createElement('table');
        section.appendChild(table);
        for (let i = 1; i <= 10; i++) {
            const tr = document.createElement('tr');
            table.appendChild(tr);
            for (let j = 1; j <= 10; j++) {
                const td = document.createElement('td');
                tr.appendChild(td);
                td.textContent = `${counter}`;
                counter++;
                compareValues(td, resultRandom);
            }
        }
    }
    createTable(section);
    function getRandomInt(min, max) {
        let arrNumbers = [];
        while (arrNumbers.length < 10) {
            let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            if (!arrNumbers.includes(randomNum)) {
                arrNumbers.push(randomNum);
            }
        }
        return arrNumbers;
    }
    let count = 10, time = 60;
    times.textContent = `${time}`;
    function timeIsOver(time, times) {
        let id = setInterval(() => {
            time--;
            if (time < 0) {
                clearInterval(id);
                alert("Вы не успели");
                location.reload();
            }
            times.textContent = `${time}`;
        }, 1000);
    }
    window.addEventListener('click', () => {
        timeIsOver(time, times);
    });
    counts.textContent = `${count}`;
    function quantity() {
        count--;
        counts.textContent = `${count}`;
        if (count == 0) {
            setTimeout(() => {
                alert("Выгрыш! Игра окончена");
                location.reload();
            }, 1000);
        }
    }
    function compareValues(td, resultRandom) {
        td.addEventListener('click', function () {
            let thisTdValue = +this.textContent;
            resultRandom.forEach(elem => {
                if (thisTdValue === elem) {
                    td.classList.add('active');
                    quantity();
                }
            });
        });
    }
});
//# sourceMappingURL=app.js.map