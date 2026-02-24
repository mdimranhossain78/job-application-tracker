
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

let fiterScetion = document.getElementById('filer-cards')

function toggleStyle(id){
 allFilterBtn.classList.remove("bg-black", "text-white");
 intervewFilterBtn.classList.remove("bg-black", "text-white");
 rejectFilterBtn.classList.remove("bg-black", "text-white");


  allFilterBtn.classList.add("bg-gray-300", "text-black");
  intervewFilterBtn.classList.add("bg-gray-300", "text-black");
  rejectFilterBtn.classList.add("bg-gray-300", "text-black");


  let selacted = document.getElementById(id)

  selacted.classList.remove('bg-gray-300',"text-black")
  selacted.classList.add( "bg-black","text-white")

  if(id === 'intervew-filter-btn' ){
    allCountSection.classList.add('hidden');
    fiterScetion.classList.remove('hidden')
    jobs.classList.add('hidden')
    current='intervew'

  }else if(id ==="rejected-filter-btn"){
    allCountSection.classList.add('hidden');
    fiterScetion.classList.remove('hidden')
    jobs.classList.remove('hidden')
    current='rejected'
  }else{
    allCountSection.classList.remove('hidden');
    fiterScetion.classList.add('hidden')
    jobs.classList.remove('hidden')
    current=''
  }

}