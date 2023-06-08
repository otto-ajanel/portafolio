const projects = [
    {
        url:
            'imgs/otto-light.png',

        title: 'Pos 3',
        description: ', Factura asissfakjlskdfjlaksd '
    },
    {
        url:
            'imgs/otto-light.png',

        title: 'Pos ',
        description: 'System for POS, Factura asissfakjlskdfjlaksd '
    }
]

var header = document.getElementById("list-item")
var items = header.getElementsByClassName("item")
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
        let current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace("active", " ")
        this.className += " active"
    })
}
function componentCard(details) {
    return `

    <img src="${details.url}"/>
    <div class="description-card">
    <h4>${details.title}</h4>
    <p>${details.description}</p>
    </div>
    
    `
}
const container = document.getElementById("content-project")
projects.map(project => {

    const createCard = componentCard(project)
    const childElement = document.createElement("div")
    childElement.innerHTML = createCard
    childElement.classList.add('card')
    container.appendChild(childElement)
})


const context = document.getElementById('tech')
new Chart(context, {
    type: 'bar',
    data: {
        labels: ['CSS', 'HTML', 'VUE', 'REACT', 'JS-VANILLA', 'PHOTOSHOP'],
        datasets: [{
            label: 'Front-End',
            data: [75, 85, 90, 60, 65, 80, 100],
            borderWidth: 1,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})
const back = document.getElementById('backend')
new Chart(back, {
    type: 'bar',
    data: {
        labels: ['PHP', 'LARAVEL', 'NODEJS', 'EXPRESS', 'SQL(slqServer,Oracle, MySql)'],
        datasets: [{
            label: 'Back-End',
            data: [75, 80, 60, 65, 85, 100],
            borderWidth: 1,
            backgroundColor: [
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(255, 159, 64)',
                'rgb(255, 99, 132)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})
const tool = document.getElementById('tool')
new Chart(tool, {
    type: 'bar',
    data: {
        labels: ['GIT', 'POSTMAN', 'OFFICE-MICROSOFT', 'LINUX', 'WINDOWS'],
        datasets: [{
            label: 'Tools for Developer',
            data: [95, 90, 95, 60, 85, 100],
            borderWidth: 1,
            backgroundColor: [
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(255, 159, 64)',
                'rgb(255, 99, 132)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})