// another practice



function submitForm() {
   let name = document.getElementById("name")
   let company = document.getElementById("company")
   let job = document.getElementById("job")
   let submission = document.getElementById("submission")
   submission.innerText = 'Thank you for your submission. ' + name.value + company.value + job.value
   
   console.log(name.value, company.value, job.value)
   name.value = '';
   company.value = '';
   job.value = ''
}