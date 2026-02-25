// what the user is currently typing (as text)
let typedNumberText = ''

// the number we store for calculations
let storedNumber = null 

//the operator currently selected (+ - * /)
let currentOperator = null

//used only for displaying the history line
let historyParts = []

//------------------------------
// HELPER FUNCTIONS
//------------------------------

function setStatus (message) {
    document.getElementById('status').textContent = message;
}

function showSymbol(op) {
    if (op === '*') return '×';
    if (op === '/') return '÷';
    if (op === '-') return '&#x2212;';
    return op;
}

function updateScreen () {
  const display = document.getElementById('displayLine')
  const history = document.getElementById('historyLine')
  const status = document.getElementById('statusLine')

  display.textContent = typedNumberText
}



function pressNumber (digit) {
  setStatus('')
  if (typedNumberText === '0') {
    typedNumberText = digit
  } else {
    typedNumberText = typedNumberText + digit
  }
  updateScreen()
}

setStatus('')

function pressOperator (op) {
    if (typedNumberText === '' && storedNumber === null) {
        setStatus('Type a number first')
    }

    if (storedNumber === null) {
        storedNumber = Number(typedNumberText)
       currentOperator = op 
       historyParts = [storedNumber, currentOperator]
       typedNumberText = ''
       updateScreen();
       
    }

}
