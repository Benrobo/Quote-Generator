let url = 'quote.json';
let footer = document.querySelector('.blockquote-footer');
let cont = document.querySelector('.blockquote');
let startBtn = document.querySelector('.strtbtn');
let aud = document.querySelector('.aud')
startBtn.addEventListener('click', function(e){
  e.preventDefault();
  aud.play();
  console.log(aud);
  fetchData()
})

function fetchData(){
  fetch(url)
  .then(res =>{
    return res.json()
  }).then(data =>{
    setInterval(func, 8000);
      function func(){
        for(var i=0; i< data.length; i++){
          let a = Math.floor(Math.random() * data.length)
          cont.innerHTML = data[a].text
          footer.innerHTML = data[a].author
        }
      }
    
  })
}

