var data = {
  "english":
  {
    "welcome" : "Welcome to my portfolio ! Type <code>help</code> to see available commands. Press <em>Enter</em> to validate each command. Use <em>Tab</em> for auto-completion.",

    "information" : "This portfolio is built using <code>HTML</code>, <code>CSS</code>, and <code>JavaScript</code> without any external frameworks. It includes various interactive elements, hidden animations. Enjoy exploring!",

    "btnpopup" : "Continue",

    "help" : `<ul style="font-family: monospace; white-space: pre-line; line-height: .8;">
    <li><code>about-me</code>: Display information about me</li>
    <li><code>clear</code>: Clean the terminal</li>
    <li><code>experiences</code>: Displays the list of my experiences</li>
    <li><code>get cv</code>: Download my CV</li>
    <li><code>get linkedin</code>: Link to my Linkedin</li>
    <li><code>get github</code>: Link to my Github</li>
    <li><code>help</code>: Displays the list of commands</li>
    <li><code>passions</code>: Displays the list of my hobbies</li>
    <li><code>my-projects</code>: Displays the list of my personal projects</li>
    <li><code>themes</code>: Change the terminal theme</li>
    <li><em>You can use the TAB key to complete a command line</em></li>
    <li><em>You can find the old commands with the up and down arrows</em></li>
</ul>`,

    "aboutme" : `<pre>
    {
        "Name"         : "Ayush Garg",
        "Role"         : "Software Developer Engineer",
        "Experience"   : "Juspay - 3+ years",
        "City"         : "Bengaluru, India",
        "Language"     : "Java, Python, Rust, Haskell, C/C++, JavaScript",
        "Framework"    : "Django, Servant, Actix-web",
        "Tools"        : "AWS, Redis, Kafka, Elasticsearch, GitHub, Jenkins, Grafana",
        "Databases"    : "PostgreSQL, MySQL",
        "SoftSkills"   : "Problem-solving, System Design, Team Collaboration"
    }
    </pre>`,

    "experience" : `<tr>
    <th>Date</th>
    <th>Company</th>
    <th>Position</th>
    <th class="description">Description</th>
    </tr>
    <tr>
        <td class="center">July 2022 - Present</td>
        <td>Juspay Technologies</td>
        <td>Software Developer Engineer</td>
        <td>Designed and implemented features such as URL Shortener, Split Settlement, Split Payment, TPV (Third-Party Verification), Webhook, and Refund Auto retries, simplifying fund settlement for 20+ merchants, including Indigo and IRCTC. Resulted in a 15-18% increase in merchant adoption.</td>
    </tr>
    <tr>
        <td class="center"></td>
        <td></td>
        <td></td>
        <td>Developed authentication flows, including Click-To-Pay, Cloud Token Framework, and Secure Card on File, to improve security and payment experiences. Onboarded merchants such as Lenskart and BigBasket, driving a 3-4% increase in transaction volume.</td>
    </tr>
    <tr>
        <td class="center"></td>
        <td></td>
        <td></td>
        <td>Engineered a scalable orchestration framework to mitigate external API downtime, improving service continuity by reducing downtime impact by 28-30%.</td>
    </tr>
    <tr>
        <td class="center"></td>
        <td></td>
        <td></td>
        <td>Addressed challenges like floating-point inaccuracies, race conditions, and concurrent API request handling, enhancing stability and reducing errors by 10%.</td>
    </tr>
    <tr>
        <td class="center">Oct 2021 - Jun 2022</td>
        <td>Juspay Technologies</td>
        <td>Software Engineer Intern</td>
        <td>Refactored core flows (Refund, Transaction Sync), leading to a 45% improvement in code efficiency, while also improving code readability, maintainability, and reducing task completion time for team members.</td>
    </tr>
    <tr>
        <td class="center"></td>
        <td></td>
        <td></td>
        <td>Redesigned logging frameworks for internal alerts, A/B testing notifications, and performance metrics; improved system observability, leading to faster resolution of issues impacting production environments with minimal downtime reported monthly.</td>
    </tr>
    <tr>
        <td class="center"></td>
        <td></td>
        <td></td>
        <td>Engaged directly with performance monitoring tools after deployment, allowing for rapid diagnosis and corrective actions on live systems; achieved an average reduction in unplanned outages, totaling approximately eight incidents per quarter.</td>
    </tr>
    <tr>
        <td class="center">Nov 2020 - May 2021</td>
        <td>Celebal Technologies</td>
        <td>Software Engineer Intern</td>
        <td>Improved automation tasks like file uploading, cloud migration, and format conversion, reducing manual work by 20%.</td>
    </tr>
    <tr>
        <td class="center"></td>
        <td></td>
        <td></td>
        <td>Led the development and maintenance of an Intern Management system using Django REST Framework and Azure App Service, enabling automated email updates for mentors on intern progress.</td>
    </tr>`,

  "cv" : `The resume upload will begin.`,

  "redirectLinkedin" : `You will be redirected to Linkedin.`,

  "redirectGithub" : `You will be redirected to Github.`,

  "hobby" : `<pre>
  {
      "Sport"       : "Table Tennis, Badminton",
      "Programming" : "Competitive Programming",
      "Other"       : "Exploring, Tech writing, Learning new Technologies"
  }
  </pre>`,

  "project" : `<table class="result">
  <tr>
    <th>index</th>
    <th>Name</th>
    <th>Tech</th>
    <th class="description">Description</th>
    <th>As a team?</th>
    <th>Github</th>
  </tr>
  <tr>
    <td class="center">1</td>
    <td class="center">Log Pipeline</td>
    <td class="center">Python Kafka Kibana Docker Git</td>
    <td>Cat Effective log collection, storage, and real-time analysis with alert generation.</td>
    <td class="center">No</td>
    <td class="center"><a href="https://github.com/ayushgarg2702/LogPipeLine" target="blank">Link</a></td>
  </tr>

  <tr>
    <td class="center">1</td>
    <td class="center">Social Ecommerce</td>
    <td class="center">React Git CSS JS</td>
    <td>Enabling users to buy, sell, and search products seamlessly.</td>
    <td class="center">Yes</td>
    <td class="center"><a href="https://github.com/mechiragjain/social-ecommerce" target="blank">Link</a></td>
  </tr>
  </table><br>
  <p class="result"><em>You can see the site attached to the project using the command</em> <code>my-projects[index].website</code><em>, index being the number associated with the project.</em></p>`,

  "glassmorphismOff" : `<p class="notfound result glassmorphismOffresult">You have just deactivated the glassmorphism design to activate it use the <code>glassmophism</code> command.`,

  "glassmorphismOn" : `<p class="notfound result glassmorphismOnresult">You have just activated the glassmorphism design to deactivate it use the <code>glassmophism</code> command.`,

  "notfound" : `<span class="notfoundlanguage"><br><br>Type the command <code>help</code> to display the list of available commands.</p></span>`,

  "notfoundmenu" : `<span class="notfoundmenu"><br><br>Type the command <code>themes</code> to display the list of available themes.</p><br>
  <p class="result">/!\\ to return to the main menu please use the command <code>exit</code></p></span>`,

  "website" : `<p class="result websiteresult">You will be redirected to the project website.</p>`,

  "ls1" : `
    <div><code>.</code></div>
    <div><code>..</code></div>
    <div>about-me</div>
    <div>clear</div>
    <div>experiences</div>
    <div>get CV</div>
    <div>get linkedin</div>
    <div>get github</div>
    <div>help</div>
    <div>passions</div>
    <div>my-projects</div>
    <div>my-projects[1].website</div>
    <div>my-projects[2].website</div>
    <div><code>themes</code></div>
  `,

  "ls2" : `
    <div>about-me</div>
    <div>clear</div>
    <div>experiences</div>
    <div>get CV</div>
    <div>get linkedin</div>
    <div>get github</div>
    <div>help</div>
    <div>passions</div>
    <div>my-projects</div>
    <div>my-projects[1].website</div>
    <div>my-projects[2].website</div>
    <div><code>themes</code></div>
  `,

  "listsecretresult" : `
      <li><code>move</code>: Activate background animation</li>
      <li><code>remove</code>: Disables background animation</li>
      <li><code>glassmorphism</code>: Enable/disable the glassmorphism animation on the theme</li>
      <li><code>secrets</code>: Enable secret themes</li>
      <li>/!\\ These commands are not part of the easter egg to find. Good luck, you're almost there!</li>`,

  "congratulation" : `Congratulations you have found the <code>.secret</code> folder.`,

  "bodymail" : `mailto:reygner0224@gmail.com?subject=Your portfolio is amazing, are you open to opportunities?&body=Ayush Garg > Hello to you who found my easter egg, I am open to opportunities professionals so do not hesitate to contact me by sending me this email with your proposal. I will contact you to arrange a phone interview. Thank you for your time !`

  },
}

let welcome = document.getElementById("welcome");
let popupcontent = document.getElementsByClassName("popupinfo")[0];
let english = document.getElementById("english");
let language;

window.addEventListener("load", setLanguage());

function setLanguage(){
  if(localStorage.getItem("language") === null){
    localStorage.setItem('language', "english");
  } 
  language = localStorage.getItem("language");
  welcome.innerHTML = data[language].welcome;
  popupcontent.innerHTML = data[language].information;
  btnPopup.innerHTML = data[language].btnpopup;
  document.querySelectorAll(".helpresult").forEach(element => {
    element.innerHTML = data[language].help
  });
  document.querySelectorAll(".aboutmeresult").forEach(element => {
    element.innerHTML = data[language].aboutme
  });
  document.querySelectorAll(".experienceresult").forEach(element =>{
    element.innerHTML = data[language].experience
  });
  document.querySelectorAll(".cvresult").forEach(element =>{
    element.innerHTML = data[language].cv
  });
  document.querySelectorAll(".redirectresultLinkedin").forEach(element =>{
    element.innerHTML = data[language].redirectLinkedin
  });
  document.querySelectorAll(".redirectresultGithub").forEach(element =>{
    element.innerHTML = data[language].redirectGithub
  });
  document.querySelectorAll(".hobbyresult").forEach(element =>{
    element.innerHTML = data[language].hobby
  });
  document.querySelectorAll(".resultproject").forEach(element =>{
    element.innerHTML = data[language].project
  });
  document.querySelectorAll(".glassmorphismOffresult").forEach(element =>{
    element.innerHTML = data[language].glassmorphismOff
  });
  document.querySelectorAll(".glassmorphismOnresult").forEach(element =>{
    element.innerHTML = data[language].glassmorphismOn
  });
  document.querySelectorAll(".notfoundlanguage").forEach(element =>{
    element.innerHTML = data[language].notfound
  });
  document.querySelectorAll(".notfoundmenu").forEach(element =>{
    element.innerHTML = data[language].notfoundmenu
  });
  document.querySelectorAll(".websiteresult").forEach(element =>{
    element.innerHTML = data[language].website
  });
  document.querySelectorAll(".lsresult1").forEach(element =>{
    element.innerHTML = data[language].ls1
  });
  document.querySelectorAll(".lsresult2").forEach(element =>{
    element.innerHTML = data[language].ls2
  });
  document.querySelectorAll(".listsecretresult").forEach(element =>{
    element.innerHTML = data[language].listsecretresult
  });
  document.querySelectorAll(".congratulation").forEach(element =>{
    element.innerHTML = data[language].congratulation
  });

  
}

english.addEventListener("click", function(){
  language = "english";
  localStorage.setItem('language', language);
  setLanguage();
});
