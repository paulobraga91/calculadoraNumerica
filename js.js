let keys  = document.querySelector('.keys')
let view = document.querySelector('.view h3')
const calculator = document.querySelector('.app')

keys.addEventListener('click',function(e){
    const key = e.target
    const action = e.target.dataset.action
    const keyContent = key.textContent
    const display = view.textContent
    const previousKeyType = calculator.dataset.previousKeyType
    
    Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))
   
    if(!action){
        if(display === '0' || previousKeyType === 'operator'){
            view.textContent = keyContent
        }else{
            view.textContent = display + keyContent
        }
    }

    if(action === 'somar' || action === 'sub' || action === 'div' || action === 'mult'){
        key.classList.add('is-depressed')
        calculator.dataset.previousKeyType = 'operator'
        calculator.dataset.firstValue = display
        calculator.dataset.operator = action
    } 

    if(action === 'clear'){
        view.textContent = '0'
    }

    if(action === 'decimal'){
        if(display.includes('.')){return}else{
       view.textContent = display + '.'}
    }

    if(action === 'calculator'){
        const secondValue = display
        const operator = calculator.dataset.operator
        const firstValue = calculator.dataset.firstValue
        view.textContent = calculate(firstValue,operator,secondValue)
    }

})


function calculate(fv,op,sv){
    let result = ''
    
    if (op === 'somar'){
        result = parseFloat(fv) + parseFloat(sv)
    } else if(op === 'sub'){
        result = parseFloat(fv) - parseFloat(sv)
    } else if( op === 'div'){
        result = parseFloat(fv) / parseFloat(sv)
    } else if( op === 'mult'){
        result = parseFloat(fv) * parseFloat(sv)
    }

    return result
}
