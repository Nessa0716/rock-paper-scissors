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
      score(false, false)
    } else if(u == "rock" && b == "paper") {
      index('You Lose!', u, b, 'is-danger')
      score(false, true)
    } else if(u == "rock" && b == "scissors") {
      index('You Win!', u, b, 'is-primary')
      score(true, false)
    } else if(u == "paper" && b == "paper") {
      index('Tie!', u, b, 'is-warning')
      score(false, false)
    } else if(u == "paper" && b == "scissors") {
      index('You Lose!', u, b, 'is-danger')
      score(false, true)
    } else if(u == "paper" && b == "rock") {
      index('You Win!', u, b, 'is-primary')
      score(true, false)
    } else if(u == "scissors" && b == "scissors") {
      index('Tie!', u, b, 'is-warning')
      score(false, false)
    } else if(u == "scissors" && b == "rock") {
      index('You Lose!', u, b, 'is-danger')
      score(false, true)
    } else if(u == "scissors" && b == "paper") {
      index('You Win!', u, b, 'is-primary')
      score(true, false)
    }
  }
  