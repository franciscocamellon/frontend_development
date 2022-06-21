let questionThreeContainer = document.getElementById('q3');

class Student {
    constructor(number) {
        this.setNumber(number);
        this.setGrade();
        this.setStatus();
    }

    getNumber() {
        return this.studentNumber
    }

    setNumber(value) {
        this.studentNumber = value;
    }

    getGrade() {
        return this.studentGrade
    }

    setGrade() {
        this.studentGrade = this.calculateStudentGrade();
    }

    getStatus() {
        return this.studentGrade
    }

    setStatus() {
        this.studentStatus = this.calculateStudentStatus();
    }

    calculateStudentNumber() {
        var number = Symbol();
        number = this.getRandomIntInclusive(0, 20);
        return number;
    }

    calculateStudentGrade() {
        var grade = Symbol();
        grade = this.getRandomIntInclusive(0, 100);
        return grade
    }

    calculateStudentStatus() {
        if (this.studentGrade >= 50) {
            return "Passed"
        } else {
            return "Reproved"
        };
    }

    getRandomIntInclusive(min, max) {
        var randomNumber;
        
        min = Math.ceil(min);
        max = Math.floor(max);
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        
        return randomNumber;
    }
}

function createHtmlElement(tag, parent, properties) {
   
    let htmlElement = document.createElement(tag);
    if (properties) {
        Object.entries(properties).forEach(([key, value]) => {
            htmlElement.setAttribute(key, value)
        });
    }
    
    parent.appendChild(htmlElement);
    return htmlElement
};

let reportButton = createHtmlElement('input', questionThreeContainer, { 'type': 'button', 'value': 'Relatório', 'onclick': 'buildReport()' });

function createQ3Answer(number, factorial) {

    let q3AnswerDiv = createHtmlElement('div', questionThreeContainer, {})
    q3AnswerDiv.classList.add("table")
    q3AnswerDiv.innerText = `O fatorial de ${number} é ${factorial}.`

}

let reportTable = createHtmlElement('table', questionThreeContainer, {});
let titleRow = createHtmlElement("tr", reportTable, {});
reportTable.appendChild(titleRow)

title = ["Aluno", "Nota", "Status"]

for (let index = 0; index < title.length; index++) {
    let tableTitle = createHtmlElement("th", titleRow, {});
    tableTitle.innerText = title[index];
}

function arrayOf(size, element) {
    var studentsList = [];
    for (let index = 1; index < size; index++) {
        let student = new element(index);
        studentsList.push(student);
    }
    return studentsList
}

function buildStatistcs(listOfStudents) {
    var passed = []; 
    var reproved = [];

    listOfStudents.forEach(student => {

        if (student.studentStatus === "Passed") {
            passed.push(student);
        } else {
            reproved.push(student);
        };
    });

    return calculateStatistcs(passed, reproved);
}

function calculateStatistcs(firstList, secondList) {
    let firstSize = firstList.length;
    let secondSize = secondList.length;
    let passedPercentage = ( firstSize * 100 ) / 20;
    let reprovedPercentage = ( secondSize * 100 ) / 20;

    return {"Passed": passedPercentage, "Reproved": reprovedPercentage};
}

function buildReport() {
   
    var list = arrayOf(21, Student);
    let statistics = buildStatistcs(list);

    list.forEach(student => {

        let studentRow = createHtmlElement("tr", reportTable, {});
        reportTable.appendChild(studentRow)

        let number = createHtmlElement('td', reportTable, {});
        studentRow.appendChild(number);
        number.innerText = student.studentNumber;
        let grade = createHtmlElement('td', reportTable, {});
        studentRow.appendChild(grade);
        grade.innerText = student.studentGrade;
        let status = createHtmlElement('td', reportTable, {});
        studentRow.appendChild(status);
        status.innerText = student.studentStatus;
        
    });
    
    let statisticsRow = createHtmlElement("tr", reportTable, {});
    reportTable.appendChild(statisticsRow)

    let passed = createHtmlElement('td', reportTable, {});
    statisticsRow.appendChild(passed);
    passed.innerText = `Aprovados ${statistics["Passed"]}%`;

    let reproved = createHtmlElement('td', reportTable, {});
    statisticsRow.appendChild(reproved);
    reproved.innerText = `Reprovados ${statistics["Reproved"]}%`;

};