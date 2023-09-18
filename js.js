let keys  = document.querySelector('.keys')
let view = document.querySelector('.view h3')

keys.addEventListener('click',function(e){
    const action = e.target.dataset.action
    view.textContent = action
    



})