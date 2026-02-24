
let intervew = [];
let reject = [];
let current = 'all'

const total = document.getElementById('total')
const intervewCount = document.getElementById('interview-count')
const rejectCount = document.getElementById('rejected-conunt')
const jobs= document.getElementById('job')


const allFilterBtn = document.getElementById('all-filter-btn')
const intervewFilterBtn = document.getElementById('intervew-filter-btn')
const rejectFilterBtn = document.getElementById('rejected-filter-btn')

const allCountSection = document.getElementById('all-cards')
// console.log(allCountSection)

// count
function calculateCount(){
total.innerText = allCountSection.children.length;
intervewCount.innerText = intervew.length;
rejectCount.innerText = reject.length;
jobs.innerText = total.innerText

} 
calculateCount()

let container =document.querySelector('main')

let fiterScetion = document.getElementById('filer-cards')
//toggling buttons
function toggleStyle(id){
 allFilterBtn.classList.remove("bg-black", "text-white");
 intervewFilterBtn.classList.remove("bg-black", "text-white");
 rejectFilterBtn.classList.remove("bg-black", "text-white");


  allFilterBtn.classList.add("bg-gray-300", "text-black");
  intervewFilterBtn.classList.add("bg-gray-300", "text-black");
  rejectFilterBtn.classList.add("bg-gray-300", "text-black");


  let selacted = document.getElementById(id)
  current=id

  selacted.classList.remove('bg-gray-300',"text-black")
  selacted.classList.add( "bg-black","text-white")

  if(id === 'intervew-filter-btn' ){
    allCountSection.classList.add('hidden');
    fiterScetion.classList.remove('hidden')
    jobs.classList.add('hidden')
    

  }else if(id ==="rejected-filter-btn"){
    allCountSection.classList.add('hidden');
    fiterScetion.classList.remove('hidden')
    jobs.classList.remove('hidden')
    renderReject()
    
  }else{
    allCountSection.classList.remove('hidden');
    fiterScetion.classList.add('hidden')
    jobs.classList.remove('hidden')
    
  }

}



container.addEventListener('click',function(even){
  console.log(even.target.classList.contains('intervew-btn'))
  if(even.target.classList.contains('intervew-btn')){
    const parentNode = even.target.parentNode.parentNode;
    // console.log(parentNode)

    const company= parentNode.querySelector('.company').innerText
    const position = parentNode.querySelector('.position').innerText
    const salary = parentNode.querySelector('.salary').innerText
    const status = parentNode.querySelector(".status").innerText
    const descript =parentNode.querySelector(".description").innerText

    parentNode.querySelector('.status').innerText = 'Intervew'

    const jobInfo = {
      company,
      position,
      salary,
      status:"Inntervew",
      descript

    }
    console.log(jobInfo)

   let jobExist = intervew.find(item=> item.company === jobInfo.company)

    if(!jobExist){
      intervew.push(jobInfo)
    }
    reject = reject.filter(item=> item.company !== jobInfo.company)
    
    
    calculateCount()
     renderIntervew()
    
  }else if(even.target.classList.contains('reject-btn')){
     const parentNode = even.target.parentNode.parentNode;
    // console.log(parentNode)

    const company= parentNode.querySelector('.company').innerText
    const position = parentNode.querySelector('.position').innerText
    const salary = parentNode.querySelector('.salary').innerText
    const status = parentNode.querySelector(".status").innerText
    const descript =parentNode.querySelector(".description").innerText

    parentNode.querySelector('.status').innerText = 'Reject'

    const jobInfo = {
      company,
      position,
      salary,
      status:"Reject",
      descript

    }
    console.log(jobInfo)

   let jobExist = reject.find(item=> item.company === jobInfo.company)

    if(!jobExist){
      reject.push(jobInfo)
    }

   intervew = intervew.filter(item=> item.company !== jobInfo.company)
   if(current === 'intervew-filter-btn'){
      renderIntervew()
    }
    
    calculateCount()
    
  }


})


function renderIntervew(){
 fiterScetion.innerHTML = ''
 for(let inter of intervew){
  let div = document.createElement('div')
  div.className = "flex justify-between bg-white p-3 rounded-md"
  div.innerHTML=`
  <div  class="flex justify-between bg-white p-3 rounded-md">
        <!-- part 1 -->
         <!-- left side -->
        <div class="space-y-2">
            <div>
            <p class="company font-bold text-2xl">${inter.company}</p>
            <p class="position">${inter.position}</p>
         </div>
         <p class="salary">${inter.salary}</p>
         <!-- part 3 -->
          <div>
            <p class="status">${inter.status}</p>
            <p class="description">${inter.descript}</p>
          </div>
          <!-- part 4 -->
           <div>
            <button class=" intervew-btn bg-gray-300 px-5">intervew</button>
            <button class=" reject-btn bg-gray-300 px-5">Rejected</button>
           </div>
          </div>
         <!-- right side -->
         <div>
            <button><i class="fa-solid fa-trash-can"></i></button>
         </div>
     </div>
      
  
  `
  fiterScetion.appendChild(div)
 }

}

function renderReject(){
 fiterScetion.innerHTML = ''
 for(let r of reject){
  let div = document.createElement('div')
  div.className = "flex justify-between bg-white p-3 rounded-md"
  div.innerHTML=`
  <div  class="flex justify-between bg-white p-3 rounded-md">
        <!-- part 1 -->
         <!-- left side -->
        <div class="space-y-2">
            <div>
            <p class="company font-bold text-2xl">${r.company}</p>
            <p class="position">${r.position}</p>
         </div>
         <p class="salary">${r.salary}</p>
         <!-- part 3 -->
          <div>
            <p class="status">${r.status}</p>
            <p class="description">${r.descript}</p>
          </div>
          <!-- part 4 -->
           <div>
            <button class=" intervew-btn bg-gray-300 px-5">intervew</button>
            <button class=" reject-btn bg-gray-300 px-5">Rejected</button>
           </div>
          </div>
         <!-- right side -->
         <div>
            <button><i class="fa-solid fa-trash-can"></i></button>
         </div>
     </div>
      
  
  `
  fiterScetion.appendChild(div)
 }

}


