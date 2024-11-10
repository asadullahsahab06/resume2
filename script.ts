document.getElementById("resumeForm")?.addEventListener('submit',function(event){
    event.preventDefault();


    const nameElement = document.getElementById('name') as HTMLInputElement;

    const lastnameElement = document.getElementById('last name') as HTMLInputElement;

    const emailElement = document.getElementById('email') as HTMLInputElement;
    
    const contactnumberElement = document.getElementById('contact number') as HTMLInputElement;

    const educationElement = document.getElementById('education') as HTMLInputElement;

    const experienceElement = document.getElementById('experience') as HTMLInputElement;

    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    if (nameElement && emailElement && contactnumberElement && educationElement && experienceElement&& skillsElement )

        const name = nameElement.value;
        const email = emailElement.value;
        const contact = contactnumberElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;


        const resumeOutput = '
        <h2>Resume</h2>
        <p><strong>Name:</strong> $ {name} </p>
        <p><strong>Email:</strong> $ {email} </p>
        <p><strong>contact:</strong> $ {contact} </p> 
        
        
        <h3> education</h3>  '



    
})