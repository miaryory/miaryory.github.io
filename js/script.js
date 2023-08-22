async function openModal(projectId){

    document.querySelector("#projects .modal").style.display="block";
    document.querySelector("#projects .modal .modal-container .project-info").innerHTML="";

    let request = await fetch("./api/api-get-project-by-id.php?projectId="+projectId);

    if(!request.ok){
        console.log("Oops");
        return;
    }

    let sProject = await request.json();

    // let project=`
    //     <div>
    //         <h1 class="project-title-desktop">${sProject.title}</h1>
    //         <p class="project-description">${sProject.description}</p>
    //         <a href="${sProject.link}" target="_blank" class="project-link"> <span style='color: black; font-weight: bold'>Link: </span> ${sProject.link} </a>
    //         <p class="project-tools"> Tools: <span style='font-weight: normal'> ${sProject.tools}</span></p>
    //     </div>

    //     <div>
    //         <img onclick="openPage('${sProject.link}')" class="project-media" src=${sProject.mediaUrl} alt="Cover picture">
    //     </div>
    // `;

    document.querySelector("#projects .modal .modal-container .project-info").insertAdjacentHTML('afterbegin', sProject);
    
}

function openProject1(){

    document.querySelector("#projects .modal").style.display="block";
    document.querySelector("#projects .modal .modal-container .project-info").innerHTML="";

    let project=`
        <p>Hello</p>
    `;

    document.querySelector("#projects .modal .modal-container .project-info").insertAdjacentHTML('afterbegin', project);

}

function closeModal(){

    document.querySelector("#projects .modal").style.display="none";

}

function openPage(url){
    window.open(url, '_blank');
}