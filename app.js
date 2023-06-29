

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
let finalOutput = document.querySelector('.result span.final-output');
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
let inputLength = 0;
//===================================== Desgin All The Themes =========================================

btnThemeSwitcher.forEach((ele) => {
    ele.addEventListener('click', function() {
        
        if (ele.classList.contains('one')) {
            // Design Theme One
            root.style.setProperty("--body-background-color", 'hsl(222, 26%, 31%)')
            // result.style.cssText = 'background-color: var(--very-dark-blue-color); color:white;';
            result.style.backgroundColor = 'var(--very-dark-blue-color)';
            result.style.color = 'white';
            root.style.setProperty("--switcher-color", 'hsl(223, 31%, 20%)')
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
            root.style.setProperty("--body-background-color", 'hsl(0, 0%, 81%)')
            // result.style.cssText = 'background-color: hsl(0, 0%, 90%); color:black;';
            result.style.backgroundColor = 'hsl(0, 0%, 90%)';
            result.style.color = 'black';
            root.style.setProperty("--switcher-color", 'rgb(166 148 152 / 38%)')
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
            resetBtn.addEventListener('mouseenter', _ => {
                resetBtn.style.backgroundColor = 'hsl(176deg 100% 18% / 76%)';
            })
            resetBtn.addEventListener('mouseleave', _ => {
                resetBtn.style.backgroundColor = 'hsl(176deg 100% 18% / 56%)';
            })
            deleteBtn.style.cssText = 'background-color: hsl(176deg 100% 18% / 56%); color:hsl(0, 0%, 93%)';
            deleteBtn.addEventListener('mouseenter', _ => {
                deleteBtn.style.backgroundColor = 'hsl(176deg 100% 18% / 76%)';
            })
            deleteBtn.addEventListener('mouseleave', _ => {
                deleteBtn.style.backgroundColor = 'hsl(176deg 100% 18% / 56%)';
            })
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
            root.style.setProperty("--body-background-color", 'hsl(268, 75%, 9%)')
            // result.style.cssText = 'background-color: rgb(36, 10, 67); color: hsl(52, 100%, 62%)';
            result.style.backgroundColor = 'rgb(36, 10, 67)';
            result.style.color = 'hsl(52, 100%, 62%)';
            root.style.setProperty("--switcher-color", 'hsl(268, 75%, 15%)')
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
            resetBtn.addEventListener('mouseenter', _ => {
                resetBtn.style.backgroundColor = 'hsl(290, 70%, 40%)';
            })
            resetBtn.addEventListener('mouseleave', _ => {
                resetBtn.style.backgroundColor = 'hsl(290, 70%, 30%)';
            })
            deleteBtn.style.cssText = 'background-color: hsl(290, 70%, 30%); color:hsl(0, 0%, 93%); box-shadow: hsl(290deg 70% 40%) 0px 5px 0px 0px';
            deleteBtn.addEventListener('mouseenter', _ => {
                deleteBtn.style.backgroundColor = 'hsl(290, 70%, 40%)';
            })
            deleteBtn.addEventListener('mouseleave', _ => {
                deleteBtn.style.backgroundColor = 'hsl(290, 70%, 30%)';
            })
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
    --inputLength; 
})

// Get Inputs
inputNumber.forEach(input => {
    input.addEventListener('click',(e) => {
        if(inputLength == 45) {
            e.preventDefault();
            return;
        }else {
            if(finalOutput.textContent != "") {
                finalOutput.textContent = '';
            }
            // ///////////////////////////////
            if(inputTwo.textContent === '') {
                ++inputLength;
                inputArrOne.push(input.textContent);
                inputOne.textContent = inputArrOne.join('');
                resetButton();
            }else if (inputTwo.textContent != '') {
                inputArrTwo.push(input.textContent);
                resultThree.textContent = inputArrTwo.join('');
                ++inputLength;
                resetButton();
            }
            if(inputLength >= 0 && inputLength < 17) {
                result.style.fontSize = '2.5rem';
            }else if(inputLength >= 17 && inputLength < 24) {
                result.style.fontSize = '1.8rem';
            }else if (inputLength >= 24 && inputLength < 32) {
                result.style.fontSize = '1.4rem';
            }else if(inputLength >= 32 && inputLength < 45) {
                result.style.fontSize = '1rem';
            }else if(inputLength >= 45) {
                e.preventDefault();
                inputLength = 45;
                // return;
            }
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
            ++inputLength;
        }
        
    }) 
});


setThefinalResult.addEventListener('click', function() {
    if(resultThree.textContent != '') {
        if(operation.textContent === '+' ) {
            finalOutput.textContent = +inputOne.textContent + +resultThree.textContent;
            inputLength = finalOutput.textContent.split('').length;
            reset();
        }
        else if (operation.textContent === '-' ) {
            finalOutput.textContent = +inputOne.textContent - +resultThree.textContent;
            inputLength = finalOutput.textContent.split('').length;
            reset()
        }
        else if (operation.textContent === '/' ) {
            finalOutput.textContent = +inputOne.textContent / +resultThree.textContent;
            inputLength = finalOutput.textContent.split('').length;
            reset()
        }
        else if (operation.textContent === '×' ) {
            finalOutput.textContent = +inputOne.textContent * +resultThree.textContent;
            inputLength = finalOutput.textContent.split('').length;
            reset()
        }
        if(inputLength >= 0 && inputLength < 17) {
            result.style.fontSize = '2.5rem';
        }else if(inputLength >= 17 && inputLength < 24) {
            result.style.fontSize = '1.8rem';
        }else if (inputLength >= 24 && inputLength < 32) {
            result.style.fontSize = '1.4rem';
        }else if(inputLength >= 32 && inputLength < 45) {
            result.style.fontSize = '1rem';
        }else if(inputLength >= 45) {
            e.preventDefault();
            inputLength = 45;
            // return;
        }
        // resetButton();
    }
})

//////////////////////////////////////////////////////////////
function reset() {
    inputArrOne = [];
    inputArrTwo = [];
    // inputLength = 0
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
// Reset Button ///////////////////////////////////////////////////
resetBtn.addEventListener('click', function() {
    finalOutput.textContent = '';
    inputArrOne = [];
    inputArrTwo = [];
    inputLength = 0;
    inputOne.textContent = '';
    inputTwo.textContent = '';
    resultThree.textContent = '';
});

let countNumber = 0;
let try_btn = document.querySelector('.try-box button');
try_btn.addEventListener('click', (e) => {
    
    if(countNumber >= 5) {
        e.preventDefault();
        return;
    }
    countNumber++;
    console.log(countNumber);
})
