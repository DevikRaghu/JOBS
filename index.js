const jobs = [
  {
      id: 1,
      class: "jobs",
      jobTitle: "Video Editor",
      jobLocation: "India",
      jobCompany: "DIGI MEDIA Limited",
      jobType: "Full Time",
      jobOverview: " Video editor is responsible for creating high-quality video content by selecting and manipulating recorded footage, sound effects, music, and graphics.",
      jobRequirements: "Proficient in industry-standard video editing software (e.g., Adobe Premiere Pro, Final Cut Pro) and Bachelor's degree in film production or a related field",
      workInvolved: "Edit and assemble raw footage into a polished final product, Review and select the best footage for each scene and Mix and master audio tracks to ensure clarity and quality",
      imageURL: "video.jpg"
  },
  {
      id: 2,
      class: "jobs",
      jobTitle: "Web Developer",
      jobLocation: "China",
      jobCompany: "Web3 Tech.co",
      jobType: "Full Time",
      jobOverview: "The primary responsibility of a web developer is to design, develop and maintain websites and web applications using programming languages such as HTML, CSS, and JavaScript. ",
      jobRequirements: "Proficient in web development languages such as HTML, CSS, JavaScript, and PHP and Minimum of 3 years of experience in web development",
      workInvolved: "Create and maintain website documentation, including technical specifications and user manuals and Collaborate with the design team to ensure the website meets the client's specifications and design standards",
      imageURL: "web.jpg"
  },
  {
      id: 3,
      class: "jobs",
      jobTitle: "Game Developer",
      jobLocation: "America",
      jobCompany: "Ubisoft.co",
      jobType: "Full Time",
      jobOverview: "the main responsibility of game developer is to create and design video games for various platforms, including mobile, console, PC, PlayStation and Nintendo",
      jobRequirements: "Proficient in game development languages such as C++, C#, or Java and Experience with game development engines such as Unity or Unreal Engine",
      workInvolved: "Create and maintain game documentation, including technical specifications and user manuals and Stay up-to-date with the latest game development technologies and trends",
      imageURL: "game.jpg"
  },
  {
      id: 4,
      class: "jobs",
      jobTitle: "App Developer",
      jobLocation: "America",
      jobCompany: "Android.in",
      jobType: "Full Time",
      jobOverview: "The main responsibility of an app developer is to design, develop, and maintain mobile applications for various platforms, including iOS and Android",
      jobRequirements: "Proficient in app development languages such as Java, Swift, or Kotlin and Bachelor's degree in computer science or a related field",
      workInvolved: "Collaborate with the design team to ensure the app meets the client's specifications and design standards and Test and debug app features to ensure smooth functionality",
      imageURL: "app.png"
  },
  {
      id: 5,
      class: "jobs",
      jobTitle: "Data Scientist",
      jobLocation: "Canada",
      jobCompany: "Google",
      jobType: "Full Time",
      jobOverview: "The main responsibility of a data scientist As a data scientist is to collect, analyze, and interpret complex data using statistical and machine learning techniques",
      jobRequirements: "Proficient in programming languages such as Python, R, or SQL and Minimum of 3 years of experience in data science",
      workInvolved: "Collaborate with the business team to identify opportunities for data-driven decision making and Develop predictive models to identify trends, patterns, and relationships in data",
      imageURL: "data.jpg"
  },
  {
      id: 6,
      class: "jobs",
      jobTitle: "Consultant",
      jobLocation: "Japan",
      jobCompany: "Hyundai",
      jobType: "Full Time",
      jobOverview: "As a consultant, You will work closely with clients and your main responsibility is to provide expert advice and solutions to clients in a specific industry or area of expertise",
      jobRequirements: "Strong analytical and problem-solving skills and Bachelor's degree in business, management, or a related field",
      workInvolved: "Develop and deliver presentations and reports to clients to communicate findings and recommendations and Provide expert advice and guidance on a wide range of business topics, such as marketing, operations, finance, and human resources",
      imageURL: "consultant.jpg"
  },
  {
      id: 7,
      class: "jobs",
      jobTitle: "Consultant",
      jobLocation: "Netherlands",
      jobCompany: "Jasper.co",
      jobType: "Part Time",
      jobOverview: "As a consultant, You will work closely with clients and your main responsibility is to provide expert advice and solutions to clients in a specific industry or area of expertise",
      jobRequirements: "Strong analytical and problem-solving skills and Bachelor's degree in business, management, or a related field",
      workInvolved: "Develop and deliver presentations and reports to clients to communicate findings and recommendations and Provide expert advice and guidance on a wide range of business topics, such as marketing, operations, finance, and human resources",
      imageURL: "consultant.jpg"
  },
  {
      id: 8,
      class: "jobs",
      jobTitle: "Web Developer",
      jobLocation: "India",
      jobCompany: "Apple.inc",
      jobType: "Part Time",
      jobOverview: "The primary responsibility of a web developer is to design, develop and maintain websites and web applications using programming languages such as HTML, CSS, and JavaScript. ",
      jobRequirements: "Proficient in web development languages such as HTML, CSS, JavaScript, and PHP and Minimum of 3 years of experience in web development",
      workInvolved: "Create and maintain website documentation, including technical specifications and user manuals and Collaborate with the design team to ensure the website meets the client's specifications and design standards",
      imageURL: "web.jpg"
  },
  {
      id: 9,
      class: "jobs",
      jobTitle: "Game Developer",
      jobLocation: "Canada",
      jobCompany: "Rockstar.co",
      jobType: "Full Time",
      jobOverview: "the main responsibility of game developer is to create and design video games for various platforms, including mobile, console, PC, PlayStation and Nintendo",
      jobRequirements: "Proficient in game development languages such as C++, C#, or Java and Experience with game development engines such as Unity or Unreal Engine",
      workInvolved: "Create and maintain game documentation, including technical specifications and user manuals and Stay up-to-date with the latest game development technologies and trends",
      imageURL: "game.jpg"
  }
  

];


const len = jobs.length;







const jobList = jobs.map((job) => {

 
      
  
return `
  <div id="job${job.id}" class="jobs">
    <div class="high">
      <img src="${job.imageURL}" alt="video">
      <h2>${job.jobTitle}</h2>
    </div>
    <h3>Location - ${job.jobLocation}</h3>
    <h4>${job.jobType}</h4>
    <p>${job.jobOverview}</p>
    <hr>
    <div class="low">
      <h3>${job.jobCompany}</h3>
      
      <a href="#" class="open-modal-link" data-modal="modal-${job.id}">View More</a>
     
     
     
    </div>
  </div>
`;

 

});


document.querySelector('#job-container').innerHTML = jobList.join('');


for (let i = 7; i <= len; i++) {
  const jobDiv = document.getElementById(`job${i}`);
  
  if (jobDiv && i > 6) {
    jobDiv.style.display = 'none';
    
  }
}







const viewAllBtn = document.getElementById('view-more-btn');
const jobssss = document.querySelectorAll('.jobs');

viewAllBtn.addEventListener('click', () => {
jobssss.forEach((job) => {
  job.style.display = 'block';
});
});






















// Creating modals to view full job posting



const modalList = jobs.map((job) => {
  return `
  <div class="modal-container" id="modal-${job.id}">
  <div class="modal">
    <div class="modal-header">
      <h1>${job.jobTitle}</h1>
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-content">
      <h3>Location - ${job.jobLocation}</h3>              
      <h4>${job.jobType}</h4>
      <p>Job Overview :- ${job.jobOverview} </p>
      <hr>
      <p>Requirements :- ${job.jobRequirements}</p>
      <hr>
      <p>Work involved :- ${job.workInvolved}</p>
      <hr>
      <div class="low1">
      <h3>${job.jobCompany}</h3>
      <a href="#" class="apply">Apply Here</a>
  </div>


    </div>
  </div>
</div>
  `;
});


document.querySelector('.view-more-modals').innerHTML = modalList.join('');















const modalContainer0 = document.querySelector('.modal-container1');
const openModalLink0 = document.querySelector('.add');
const closeModalBtn0 = document.querySelector('.close-modal1');

openModalLink0.addEventListener('click', (event) => {
      event.preventDefault();
      modalContainer0.style.display = 'block';
    });
            
  closeModalBtn0.addEventListener('click', () => {
    modalContainer0.style.display = 'none';
  });












const openModalLinks = document.querySelectorAll('.open-modal-link');
const closeModalBtns = document.querySelectorAll('.close-modal');

openModalLinks.forEach((link) => {
link.addEventListener('click', (event) => {
  event.preventDefault();
  const modalId = link.getAttribute('data-modal');
  const modalContainer = document.getElementById(modalId);
  modalContainer.style.display = 'block';
  
  const closeModalBtn = modalContainer.querySelector('.close-modal');
  closeModalBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none';
  });
});
});







