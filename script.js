// ID select
var r = document.getElementById('rock'),

    p = document.getElementById('paper'),

    s = document.getElementById('scissors'),
    u = document.getElementById('u'),

    b = document.getElementById('bot');


    var rps = ["rock", "paper", "scissors"]
    var emoji = { rock: '✊️', paper: '🖐️', scissors: '✌️' }
    
    

p.addEventListener('click', function() {
    const random = rps[Math.floor(Math.random() * rps.length)]
  
  
    check('paper', random)
  })

  

s.addEventListener('click', function() {
    const random = rps[Math.floor(Math.random() * rps.length)]
  
  
    check('scissors', random)
  })


  function check(u, b) {
    if(u == "rock" && b == "rock") {
      index('Tie!', u, b, 'is-warning')
