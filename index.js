// another practice



function submitForm() {
   let submission2Title = document.getElementById("submission2-title")
   let submission2 = document.getElementById("submission2");
   let name = document.getElementById("name")
   let company = document.getElementById("company")
   let job = document.getElementById("job")
   let submission = document.getElementById("submission")
   submission.innerText = 'Thank you for your submission ' + name.value + ' of ' + company.value + '.'
   submission2Title.innerText = 'The following is a receipt of your order:'
   submission2.innerText = job.value
   
   console.log(name.value, company.value, job.value)
   name.value = '';
   company.value = '';
   job.value = ''
}

let position = 0;

function previous() {
   if (position > -1600) {
      let picpic = document.getElementsByClassName("picpic");
      position -= 400
      for (var i = 0; i < picpic.length; i++) {
         picpic[i].style.transform = "translateX(" + position + "px)"
         
      }
      console.log(position, 'previous')
      
   }
}

function next() {
   if (position < 0) {
      let picpic = document.getElementsByClassName("picpic");
      position += 400
      for (var i = 0; i < picpic.length; i++) {
         picpic[i].style.transform = "translateX(" + position + "px)"
      }
      console.log(position, 'next')
   }
}

