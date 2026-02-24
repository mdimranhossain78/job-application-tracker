let intervew = [];
let reject = [];
let current = "all-filter-btn";

const total = document.getElementById("total");
const intervewCount = document.getElementById("interview-count");
const rejectCount = document.getElementById("rejected-conunt");

const jobs = document.getElementById("job");
const emty = document.getElementById("emty");
const countItnr = document.getElementById("countIntr");
const of = document.getElementById("of");

const allFilterBtn = document.getElementById("all-filter-btn");
const intervewFilterBtn = document.getElementById("intervew-filter-btn");
const rejectFilterBtn = document.getElementById("rejected-filter-btn");

const allCountSection = document.getElementById("all-cards");
const fiterScetion = document.getElementById("filer-cards");
const container = document.querySelector("main");

function calculateCount() {
  total.innerText = allCountSection.children.length;
  intervewCount.innerText = intervew.length;
  rejectCount.innerText = reject.length;

  jobs.innerText = total.innerText;

  // this number changes depending on current tab, set inside toggleStyle too
}

function showEmpty(show) {
  if (show) emty.classList.remove("hidden");
  else emty.classList.add("hidden");
}

function setActiveButton(id) {
  [allFilterBtn, intervewFilterBtn, rejectFilterBtn].forEach((btn) => {
    btn.classList.remove("bg-black", "text-white");
    btn.classList.add("bg-gray-300", "text-black");
  });

  const selected = document.getElementById(id);
  selected.classList.remove("bg-gray-300", "text-black");
  selected.classList.add("bg-black", "text-white");
}

function toggleStyle(id) {
  current = id;
  setActiveButton(id);

  if (id === "intervew-filter-btn") {
    allCountSection.classList.add("hidden");
    fiterScetion.classList.remove("hidden");

    of.classList.remove("hidden");
    countItnr.classList.remove("hidden");

    countItnr.innerText = intervew.length;
    jobs.innerText = total.innerText;

    renderIntervew();
    showEmpty(intervew.length === 0);
  } else if (id === "rejected-filter-btn") {
    allCountSection.classList.add("hidden");
    fiterScetion.classList.remove("hidden");

    of.classList.remove("hidden");
    countItnr.classList.remove("hidden");

    countItnr.innerText = reject.length;
    jobs.innerText = total.innerText;

    renderReject();
    showEmpty(reject.length === 0);
  } else {
    allCountSection.classList.remove("hidden");
    fiterScetion.classList.add("hidden");

    of.classList.add("hidden");
    countItnr.classList.add("hidden");

    showEmpty(false);
  }

  calculateCount();
}

function getJobFromCard(card) {
  const company = card.querySelector(".company")?.innerText.trim() || "";
  const position = card.querySelector(".position")?.innerText.trim() || "";
  const salary = card.querySelector(".salary")?.innerText.trim() || "";
  const descript = card.querySelector(".description")?.innerText.trim() || "";

  return { company, position, salary, descript };
}

function cardTemplate(job, statusText) {
  return `
    <div class="job-card flex justify-between bg-white p-3 rounded-md">
      <div class="space-y-2">
        <div>
          <p class="company font-bold text-2xl">${job.company}</p>
          <p class="position">${job.position}</p>
        </div>

        <p class="salary">${job.salary}</p>

        <div>
          <p class="status">${statusText}</p>
          <p class="description">${job.descript}</p>
        </div>

        <div>
          <button class="intervew-btn bg-gray-300 px-5">Interview</button>
          <button class="reject-btn bg-gray-300 px-5">Rejected</button>
        </div>
      </div>

      <div class="self-start">
        <button class="delete-btn" title="Delete">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  `;
}

function renderIntervew() {
  fiterScetion.innerHTML = "";
  for (const job of intervew) {
    const wrap = document.createElement("div");
    wrap.innerHTML = cardTemplate(job, "Interview");
    fiterScetion.appendChild(wrap.firstElementChild);
  }
}

function renderReject() {
  fiterScetion.innerHTML = "";
  for (const job of reject) {
    const wrap = document.createElement("div");
    wrap.innerHTML = cardTemplate(job, "Rejected");
    fiterScetion.appendChild(wrap.firstElementChild);
  }
}

container.addEventListener("click", function (event) {
  const interviewBtn = event.target.closest(".intervew-btn");
  const rejectBtn = event.target.closest(".reject-btn");
  const deleteBtn = event.target.closest(".delete-btn");

  // Interview
  if (interviewBtn) {
    const card = interviewBtn.closest(".job-card");
    if (!card) return;

    const job = getJobFromCard(card);

    const exists = intervew.find((x) => x.company === job.company);
    if (!exists) intervew.push({ ...job, status: "Interview" });

    reject = reject.filter((x) => x.company !== job.company);

    // update visible status if clicked from All list
    const statusEl = card.querySelector(".status");
    if (statusEl) statusEl.innerText = "Interview";

    if (current === "intervew-filter-btn") renderIntervew();
    if (current === "rejected-filter-btn") renderReject();

    // empty handling
    if (current === "intervew-filter-btn") showEmpty(intervew.length === 0);
    if (current === "rejected-filter-btn") showEmpty(reject.length === 0);

    calculateCount();
    countItnr.innerText = current === "intervew-filter-btn" ? intervew.length : reject.length;
    return;
  }

  // Rejected
  if (rejectBtn) {
    const card = rejectBtn.closest(".job-card");
    if (!card) return;

    const job = getJobFromCard(card);

    const exists = reject.find((x) => x.company === job.company);
    if (!exists) reject.push({ ...job, status: "Rejected" });

    intervew = intervew.filter((x) => x.company !== job.company);

    const statusEl = card.querySelector(".status");
    if (statusEl) statusEl.innerText = "Rejected";

    if (current === "intervew-filter-btn") renderIntervew();
    if (current === "rejected-filter-btn") renderReject();

    if (current === "intervew-filter-btn") showEmpty(intervew.length === 0);
    if (current === "rejected-filter-btn") showEmpty(reject.length === 0);

    calculateCount();
    countItnr.innerText = current === "intervew-filter-btn" ? intervew.length : reject.length;
    return;
  }

  // Delete
  if (deleteBtn) {
    const card = deleteBtn.closest(".job-card");
    if (!card) return;

    const company = card.querySelector(".company")?.innerText.trim();

    // remove from arrays
    intervew = intervew.filter((x) => x.company !== company);
    reject = reject.filter((x) => x.company !== company);

    // remove card from DOM if it's in all list
    card.remove();

    // re-render if currently on a filtered tab
    if (current === "intervew-filter-btn") renderIntervew();
    if (current === "rejected-filter-btn") renderReject();

    if (current === "intervew-filter-btn") showEmpty(intervew.length === 0);
    if (current === "rejected-filter-btn") showEmpty(reject.length === 0);

    calculateCount();
    countItnr.innerText = current === "intervew-filter-btn" ? intervew.length : reject.length;
    return;
  }
});

calculateCount();
toggleStyle("all-filter-btn");