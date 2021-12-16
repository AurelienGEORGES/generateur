function addParticipant(event) {

    event.preventDefault();

    const nameInputElt = document.getElementById("nameInput");

    const participantName = nameInputElt.value.trim();

    if (participantName === '') {
        alert('le nom est obligatoire');
        return;
    }

    const participantElt = `
<li class="participant">${participantName}</li>
`;

    const participantListElt = document.getElementById("participantList");

    participantListElt.innerHTML = participantListElt.innerHTML + participantElt;

    nameInputElt.value = '';

}

const addNameFormElt = document.getElementById("addNameForm");

addNameFormElt.addEventListener("submit", addParticipant);

//@param {array} participants
//@param {int} numberGroups

function generategroups(participants, numberGroups) {

    const sorted = participants
        .map((participant) => ({ name: participant, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map((participant) => participant.name)

    console.log(sorted);

    const groupsArr = [];
    for (let i = 0; i < numberGroups; i++) {
        groupsArr.push([]);
    }

    var groupsArrIndex = 0;
    while (sorted.length > 0) {
        groupsArr[groupsArrIndex].push(sorted.pop());
        groupsArrIndex++;
        if (groupsArrIndex >= groupsArr.length) {
            groupsArrIndex = 0;
        }
    }

    console.log(groupsArr);

    const groupListElt = document.getElementById("groupList");

    for (let groupIndex = 0; groupIndex < groupsArr.length; groupIndex++) {


        let groupElt = `
        <div class="card bg-light mb-3" style="max-width: 20rem;">
        <div class="card-header">Groupe ${groupIndex + 1}</div>
        <div class="card-body">
          <ul>`
            ;

        for (let participantIndex = 0; participantIndex < groupsArr[groupIndex].length; participantIndex++) {
            groupElt += `<li>${groupsArr[groupIndex][participantIndex]}</li>`;
        }

        groupElt += `
            </ul>
          </div>
      </div>`;
        groupListElt.innerHTML += groupElt;

    }
}


const generateForm = document.getElementById('generateGroup');
generateForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const numberGroups = parseInt(document.getElementById('groupNumber').value);
        const participants =[];
        const participantsElt = document.querySelectorAll(".participant");
        participantsElt.forEach(element => participants.push(element.textContent));
        
        if( Number.isNaN(numberGroups)) {
            alert("entrez un nombre");
            return;
        }
        
        if( numberGroups<1) {
            alert("entrez un nombre positif");
            return;
        }
        
        if( numberGroups> participants.length) {
            alert("le nombre de groupes doit etre inferieur au nombres de prenom");
            return;
        }

        if(participants.length === 0) {
            alert("rentrez un prenom");
            return;
        }

        console.log(participants);
        generategroups(participants, numberGroups); 
})