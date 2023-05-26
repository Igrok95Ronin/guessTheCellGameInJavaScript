window.addEventListener('DOMContentLoaded', function () {

const 
    section = document.querySelector('section') as HTMLElement,
    counts = document.querySelector('.counts') as HTMLElement,
    times = document.querySelector('.times') as HTMLElement;
let counter : number = 1;

//Создаем таблицу
    function createTable(section : HTMLElement) {
        let resultRandom : number[] = getRandomInt(1,100)
        // console.log(resultRandom);

        const table = document.createElement('table') as HTMLTableElement;
        section.appendChild(table)
    
        for (let i : number = 1; i <= 10; i++) {
            const tr = document.createElement('tr') as HTMLTableRowElement;
            table.appendChild(tr)
            for(let j : number = 1; j <= 10; j++) {
                const td = document.createElement('td') as HTMLTableCellElement;
                tr.appendChild(td)
                td.textContent = `${counter}`
                counter++

                compareValues(td, resultRandom)
            }
        }
    }
    createTable(section)


/* Получение случайного целого числа между min и max: */
    function getRandomInt(min : number, max : number) : number[] {
        let arrNumbers : number[] = []
        while (arrNumbers.length < 10) {
        let randomNum : number = Math.floor(Math.random() * (max - min + 1)) + min;
                if (!arrNumbers.includes(randomNum)) {
                    arrNumbers.push(randomNum)
            }
        }
        return arrNumbers
    }

    let count : number = 10,
        time : number = 60;
        times.textContent = `${time}`

//Если вышло время вы проиграли
    function timeIsOver(time : number,times: HTMLElement) {
        let id = setInterval(() => {
            time--
            if(time < 0) {
                clearInterval(id)
                alert("Вы не успели")
                location.reload()
            }
            times.textContent = `${time}`
        }, 1000)
    }

//Игра начинается при клике на любое место
    window.addEventListener('click', () => {
        timeIsOver(time, times)
    })

//Если нашли все ячейки Выгрыш
    counts.textContent = `${count}`
    function quantity() {
        count--
        counts.textContent = `${count}`
        if(count == 0) {
            setTimeout(()=>{
                alert("Выгрыш! Игра окончена")
                location.reload();
            }, 1000)
        }
    }

// Дбавляет обработчик события клика к элементу ячейки таблиц
    function compareValues(td : HTMLTableCellElement, resultRandom : number[]) {
        td.addEventListener('click', function() {
            let thisTdValue : number = +this.textContent
            resultRandom.forEach(elem => {
                if (thisTdValue === elem) {
                    td.classList.add('active')
                    quantity()
                }
            })
        })
    }

})