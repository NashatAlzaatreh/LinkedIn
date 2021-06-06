
function welcoming ()
{
alert('Welcome to your professional community')

var specialty = prompt("what is your specialty, specialty school? ")
alert('Great, you can find a lot of interest here in ' + specialty + ' field')
}


function getjob ()
{
var job = prompt('Are you looking for a job?')

if(job == 'yes'){
 alert('sign up and find a good jobs')
}
else if (job == 'no'){
 alert('sign up and do not find a good jobs  ')
}
else{
 alert('sign up and find a good jobs')
}

var exp = prompt('How many years of experience do you have?')

while(exp > 7){
  exp = prompt('How many years of experience do you have? we support less than 7 years experience.')
 }

  alert('sign up and find a good jobs')
}


function interview()
{

  var pic = prompt('How many job interview do you wants to get ?( 1 or 2 )')

while(pic > 2 )
{
  pic = prompt('How many job interview do you wants to get ?(1 or 2)')
 }


if (pic == 1 ) 
  { document.write('<h3> Job interview 1 </h3> <img src="https://engineering.stanford.edu/sites/default/files/styles/full_width_banner_tall/public/interview-a1.jpg" alt="Job interview1" width="250" height="250">')
    
  }
  else {  document.write('<h3> Job interview 1 </h3> <img src="https://engineering.stanford.edu/sites/default/files/styles/full_width_banner_tall/public/interview-a1.jpg" alt="Job interview1" width="250" height="250">')
    
     
    document.write('<h3> Job interview 2 </h3> <img src="https://www.peninsulapersonnel.com.au/wp-content/uploads/2020/09/Best-HR-Interview-1.png" alt="Job interview1" width="250" height="250">')
    
      }

} 



welcoming ();
getjob ();
interview();


  







