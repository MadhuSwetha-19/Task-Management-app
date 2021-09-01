const taskContainer= document.querySelector(".task__container");
let globalTaskData = [];

const addNewCard = () => {
    // get task data
  const taskData = {
    id: `${Date.now()}`,
    title : document.getElementById("taskTitle").value,
    image : document.getElementById("imageURL").value,
    type : document.getElementById("taskType").value,
    description : document.getElementById("taskDescription").value,
  };

globalTaskData.push(taskData);

//update the localstorage
localStorage.setItem("taskyAC", JSON.stringify({ card: globalTaskData }));

//generate HTML code

const newCard = `<div id = ${taskData.id} class="col-md-6 col-lg-4 my-3">
<div class="card">
  <div class="card-header gap-2 d-flex justify-content-end">
    <button class="btn btn-outline-info">
      <i class="fas fa-pencil-alt"></i>
    </button>
    <button class="btn btn-outline-danger">
      <i class="far fa-trash-alt"></i>
    </button>
  </div>
  <div class="card-body">
    <img 
    src= ${taskData.image}
    alt="image"
    class="card-img"/>
    <h5 class="card-title mt-4"> ${taskData.title} </h5>
    <p class="card-text"> ${taskData.description} </p>
    <span class="badge bg-primary"> ${taskData.type} </span>
  </div>
  <div class="card-footer ">
    <button class="btn btn-outline-primary">Open Task</button>
  </div>
</div>
</div>`;

//inject it to DOM
taskContainer.insertAdjacentHTML("beforeend", newCard );

//Clear the form
 document.getElementById("taskTitle").value="";
 document.getElementById("imageURL").value="";
 document.getElementById("taskType").value="";
 document.getElementById("taskDescription").value="";

 return;
};

const loadExistingCards = () => {
  //check local storage
  const getData = localStorage.getItem("taskyAC");

  //parse JSON data, if exist
  if (!getData) return;

  const taskCards = JSON.parse(getData);

  globalTaskData = taskCards.card;

  globalTaskData.map((taskData)=>{

    //generate HTML code for those data
    const newCard = `<div id = ${taskData.id} class="col-md-6 col-lg-4 my-3">
<div class="card">
  <div class="card-header gap-2 d-flex justify-content-end">
    <button class="btn btn-outline-info">
      <i class="fas fa-pencil-alt"></i>
    </button>
    <button class="btn btn-outline-danger">
      <i class="far fa-trash-alt"></i>
    </button>
  </div>
  <div class="card-body">
    <img 
    src= ${taskData.image}
    alt="image"
    class="card-img"/>
    <h5 class="card-title mt-4"> ${taskData.title} </h5>
    <p class="card-text"> ${taskData.description} </p>
    <span class="badge bg-primary"> ${taskData.type} </span>
  </div>
  <div class="card-footer ">
    <button class="btn btn-outline-primary">Open Task</button>
  </div>
</div>
</div>`;


    //inject to the DOM    
    taskContainer.insertAdjacentHTML("beforeend", newCard );
  });  
 
  return;
};
//strigify
  //JS object -> JSON

  //parse
  //JSON ->JS object
