
const form = document.getElementById("form");
const passlength=document.getElementById('length')
const handleSubmit = (e) => {
   e.preventDefault();
   location.reload;
   console.log(passlength.value)
 };

 form.addEventListener('submit',handleSubmit)