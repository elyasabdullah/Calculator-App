

// Get Elements
let root = document.querySelector(':root')

let headerHead = document.querySelector('header .head')
let themeColor = document.querySelector('.color-theme .color')
let btnThemeSwitcher = document.querySelectorAll('.color-theme .color > span');
let numThemeSwitcher = document.querySelectorAll('.color-theme .number > span');
let colorThemeBtn = document.querySelector('.color-theme .color > span.active')

let inputNum = document.querySelectorAll(`.input .column:nth-child(1) > div:not(:nth-child(4)),
                                        .input .column:nth-child(2) > div, 
                                        .input .column:nth-child(3) > div, 
                                        .input .column:nth-child(4) > div`)

let result = document.querySelector('.result');
let input = document.querySelector('.input');
let finalOutput = document.querySelector('.result span.final-output')
let inputOne = document.querySelector('.result span:nth-child(1)');
let inputTwo = document.querySelector('.result span:nth-child(2)');
let resultThree = document.querySelector('.result span:nth-child(3)');

let inputNumber = document.querySelectorAll
    (`.input .column:not(.five) > div:not(:last-child):not(.four >div:nth-child(3))`);
let inputOperation = document.querySelectorAll
(`.input .column:not(.one):not(.five) > div:last-child,
.input .column.four > div:nth-child(3)`);

let deleteBtn = document.querySelector('.input .column.one > div:nth-child(4)');
let resetBtn = document.querySelector('.input .column.five > div:nth-child(1)')
let setThefinalResult = document.querySelector('.input .column.five > div:nth-child(2)');

//===================================== Desgin All The Themes =========================================

btnThemeSwitcher.forEach((ele) => {
    ele.addEventListener('click', function() {
        if (ele.classList.contains('one')) {
            // Design Theme One
            document.body.style.backgroundColor = 'var(--blue-color)';
            result.style.cssText = 'background-color: var(--very-dark-blue-color); color:white;';
            input.style.backgroundColor = 'var(--dark-blue-color)';
            themeColor.style.backgroundColor = 'var(--dark-blue-color)';
            headerHead.style.color = 'white';
            root.style.setProperty('--white-color', 'white');
            setThefinalResult.style.cssText = 'background-color: var(--red-color); box-shadow: hsl(6deg 63% 50% / 56%) 0px 3.5px 0px 0px';
            setThefinalResult.addEventListener('mouseenter', ()=> {
                setThefinalResult.style.backgroundColor = 'hsl(6, 63%, 60%)';
            })
            setThefinalResult.addEventListener('mouseleave', ()=> {
                setThefinalResult.style.backgroundColor = 'hsl(6, 63%, 50%)';
            })
            resetBtn.style.cssText = 'background-color: hsl(222, 26%, 41%); color: hsl(0, 0%, 93%); box-shadow: rgb(77 94 132 / 55%) 0px 3.5px 0px 0px';
            resetBtn.addEventListener('mouseenter', _ => {
                resetBtn.style.backgroundColor = 'hsl(222, 26%, 51%)';
            })
            resetBtn.addEventListener('mouseleave', _ => {
                resetBtn.style.backgroundColor = 'hsl(222, 26%, 31%)';
            })
            deleteBtn.style.cssText = 'background-color: hsl(222, 26%, 41%); color:hsl(0, 0%, 93%); box-shadow: rgb(77 94 132 / 55%) 0px 3.5px 0px 0px';
            deleteBtn.addEventListener('mouseenter', _ => {
                deleteBtn.style.backgroundColor = 'hsl(222, 26%, 51%)';
            })
            deleteBtn.addEventListener('mouseleave', _ => {
                deleteBtn.style.backgroundColor = 'hsl(222, 26%, 31%)';
            })
            inputNum.forEach((ele) => {
                ele.addEventListener('mouseenter', ()=> {
                    inputNum.forEach((num) => {
                        num.style.backgroundColor = 'hsl(0, 5%, 81%)';
                    })
                    ele.style.backgroundColor = 'white';
                    ele.addEventListener('mouseleave', _ => {
                        ele.style.backgroundColor = 'hsl(0, 5%, 81%)';
                    })
                })
                ele.style.backgroundColor = 'hsl(0, 5%, 81%)';
                ele.style.color = '#000000a8';
                ele.style.boxShadow = '0px 5px 0px 0px gray';
            });
            btnThemeSwitcher.forEach((ele) => {
                ele.style.backgroundColor = 'transparent';
            })
            ele.style.backgroundColor = 'var(--red-color)';
        }
        else if (ele.classList.contains('two')) {
            // Design Theme Two
            document.body.style.backgroundColor = 'hsl(0, 0%, 81%)';
            result.style.cssText = 'background-color: hsl(0, 0%, 90%); color:black;';
            input.style.backgroundColor = 'rgb(166 148 152 / 38%)';
            themeColor.style.backgroundColor = 'rgb(166 157 159 / 84%)';
            headerHead.style.color = 'black';
            root.style.setProperty('--white-color', 'black');
            setThefinalResult.style.cssText = 'background-color: hsl(25, 98%, 33%); box-shadow: rgb(108 57 0) 0px 3.5px 0px 0px';
            setThefinalResult.addEventListener('mouseenter', ()=> {
                setThefinalResult.style.backgroundColor = 'hsl(25, 98%, 43%)';
            })
            setThefinalResult.addEventListener('mouseleave', ()=> {
                setThefinalResult.style.backgroundColor = 'hsl(25, 98%, 33%)';
            })
            resetBtn.style.cssText = 'background-color: hsl(176deg 100% 18% / 56%); color: hsl(0, 0%, 93%); box-shadow: rgb(1 110 103 / 99%) 0px 3.5px 0px 0px';
            deleteBtn.style.cssText = 'background-color: hsl(176deg 100% 18% / 56%); color:hsl(0, 0%, 93%)';
            inputNum.forEach((ele) => {
                ele.addEventListener('mouseenter', ()=> {
                    inputNum.forEach((num) => {
                        num.style.backgroundColor = 'hsl(0, 5%, 81%)';
                    })
                    ele.style.backgroundColor = '#ffffffc7';
                    ele.addEventListener('mouseleave', _ => {
                        ele.style.backgroundColor = 'hsl(0, 5%, 81%)';
                    })
                })
                ele.style.backgroundColor = 'hsl(0, 5%, 81%)';
                ele.style.color = 'black';
                ele.style.boxShadow = '0px 5px 0px 0px gray';
            });
            btnThemeSwitcher.forEach((ele) => {
                ele.style.backgroundColor = 'transparent';
            })
            ele.style.backgroundColor = 'hsl(25, 98%, 33%)';
        }else if (ele.classList.contains('three')) {
            // Desgin Theme Three
            document.body.style.backgroundColor = 'hsl(268, 75%, 9%)';
            result.style.cssText = 'background-color: rgb(36, 10, 67); color: hsl(52, 100%, 62%)';
            input.style.backgroundColor = 'hsl(268, 75%, 15%)';
            themeColor.style.backgroundColor = 'rgb(36, 10, 67)';
            headerHead.style.color = 'hsl(52, 100%, 62%)';
            root.style.setProperty('--white-color', 'hsl(52, 100%, 62%)');
            setThefinalResult.style.cssText = 'background-color: hsl(176, 100%, 44%); box-shadow: 0px 5px 0px 0px hsl(176, 100%, 70%)';
            setThefinalResult.addEventListener('mouseenter', ()=> {
                setThefinalResult.style.backgroundColor = 'hsl(176, 100%, 74%)';
            })
            setThefinalResult.addEventListener('mouseleave', ()=> {
                setThefinalResult.style.backgroundColor = 'hsl(176, 100%, 44%)';
            })
            resetBtn.style.cssText = 'background-color: hsl(290, 70%, 30%); color: hsl(0, 0%, 93%); box-shadow: hsl(290deg 70% 40%) 0px 5px 0px 0px';
            deleteBtn.style.cssText = 'background-color: hsl(290, 70%, 30%); color:hsl(0, 0%, 93%); box-shadow: hsl(290deg 70% 40%) 0px 5px 0px 0px';
            inputNum.forEach((ele) => {
                ele.addEventListener('mouseenter', ()=> {
                    inputNum.forEach((num) => {
                        num.style.backgroundColor = 'rgb(54 13 101)';
                    })
                    ele.style.backgroundColor = 'hsl(285, 51%, 52%)';
                    ele.addEventListener('mouseleave', _ => {
                        ele.style.backgroundColor = 'rgb(54 13 101)';
                    })
                })
                ele.style.backgroundColor = 'rgb(54 13 101)';
                ele.style.color = 'hsl(52, 100%, 62%)';
                ele.style.boxShadow = '0px 5px 0px 0px hsl(290deg 70% 40%)';
            });
            btnThemeSwitcher.forEach((ele) => {
                ele.style.backgroundColor = 'transparent';
            })
            ele.style.backgroundColor = 'hsl(176, 100%, 44%)';
        }
    })
});
// ==================================== Calculator Functions =============================
// define arrays to add the input's values to them
let inputArrOne = [];
let inputArrTwo = [];


deleteBtn.addEventListener('click', function() {
    if(inputOne.textContent != '' && inputTwo.textContent == '' && resultThree.textContent == '') {
        let deleteArrOne = inputOne.textContent.split('');
        deleteArrOne.length -= 1;
        inputArrOne.length = 0;
        inputOne.textContent = deleteArrOne.join('');
    }
    else if(inputTwo.textContent != '' && resultThree.textContent == '') {
        inputTwo.textContent = '';
    }
    else if(inputTwo.textContent != '' && resultThree.textContent != '') {
        let deleteArrThree = resultThree.textContent.split('');
        deleteArrThree.length -= 1;
        inputArrTwo.length = 0;
        resultThree.textContent = deleteArrThree.join('');
    }
    else if (finalOutput.textContent != '') {
        let deleteArrFinal = finalOutput.textContent.split('');
        deleteArrFinal.length -= 1;
        finalOutput.textContent = deleteArrFinal.join('')
    }
})

// Get Inputs
inputNumber.forEach(input => {
    input.addEventListener('click',() => {
        if(finalOutput.textContent != "") {
            finalOutput.textContent = '';
        }
        // ///////////////////////////////
        if(inputTwo.textContent === '') {
            inputArrOne.push(input.textContent);
            inputOne.textContent = inputArrOne.join('');
            resetButton();
        }else if (inputTwo.textContent != '') {
            inputArrTwo.push(input.textContent);
            resultThree.textContent = inputArrTwo.join('');
            resetButton();
        }
    })
});

let operation;
// Reset the output container
inputOperation.forEach((oper) => {
    oper.addEventListener('click', function(e) {
        if(finalOutput.textContent != "") {
            inputOne.textContent = finalOutput.textContent;
            finalOutput.textContent = '';
        }
        operation = e.currentTarget;
        if(inputOne.textContent != '') {
            inputTwo.textContent = oper.textContent;
        }
    }) 
});

setThefinalResult.addEventListener('click', function() {
    if(resultThree.textContent != '') {
        if(operation.textContent === '+' ) {
            finalOutput.textContent = +inputOne.textContent + +resultThree.textContent;
            reset();
        }
        else if (operation.textContent === '-' ) {
            finalOutput.textContent = +inputOne.textContent - +resultThree.textContent;
            reset()
        }
        else if (operation.textContent === '/' ) {
            finalOutput.textContent = +inputOne.textContent / +resultThree.textContent;
            reset()
        }
        else if (operation.textContent === '×' ) {
            finalOutput.textContent = +inputOne.textContent * +resultThree.textContent;
            reset()
        }
        resetButton();
    }
})

//////////////////////////////////////////////////////////////
function reset() {
    inputArrOne = [];
    inputArrTwo = [];
    inputOne.textContent = '';
    resultThree.textContent = '';
    inputTwo.textContent = '';
}

////////////////////////////////////////////////////////////
function resetButton() {
    resetBtn.addEventListener('click', function() {
        finalOutput.textContent = '';
        inputArrOne = [];
        inputArrTwo = [];
        inputOne.textContent = '';
        inputTwo.textContent = '';
        resultThree.textContent = '';
    });
}




