var wrap = document.querySelector('.wrap');

function createChart() {
    for (let i = 2; i < 10; i++) {
        const box = document.createElement('div');
        box.setAttribute('class', 'box');
        wrap.appendChild(box);
        const chart = document.createElement('ul');
        chart.setAttribute('class', 'chart');
        box.appendChild(chart);
        const title = document.createElement('li');
        title.textContent = i;
        title.setAttribute('class', 'chart_title');
        chart.appendChild(title);
        for (let j = 1; j < 10; j++) {
            let answer = i * j;
            let list = document.createElement('li');
            list.textContent = `${i}x${j}=${answer}`;
            chart.appendChild(list);
        };
    };
}

createChart();