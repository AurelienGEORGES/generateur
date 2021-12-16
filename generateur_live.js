function addParticipant(event) {

event.preventDefault();

const nameInputElt = document.getElementById("nameInput");

const participantName = nameInputElt.value.trim();

if (participantName === '') {
    alert('le nom est obligatoire');
    return;
} 

const participantElt = `
<li>${participantName}</li>
`;

const participantListElt = document.getElementById("participantList");

participantListElt.innerHTML = participantListElt.innerHTML + participantElt;

nameInputElt.value = '';
    
}

const addNameFormElt = document.getElementById("addNameForm");

addNameFormElt.addEventListener("submit", addParticipant);
