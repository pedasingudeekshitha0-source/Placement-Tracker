let companies =
JSON.parse(localStorage.getItem("companies")) || [];

displayCompanies();

function addCompany(){

let companyName =
document.getElementById("company").value;

let packageValue =
document.getElementById("package").value;

let status =
document.getElementById("status").value;

if(companyName==="") return;

companies.push({
name:companyName,
package:packageValue,
status:status
});

saveData();
displayCompanies();

document.getElementById("company").value="";
document.getElementById("package").value="";
}

function saveData(){
localStorage.setItem(
"companies",
JSON.stringify(companies)
);
}

function deleteCompany(index){

companies.splice(index,1);

saveData();
displayCompanies();
}

function displayCompanies(){

let list =
document.getElementById("companyList");

let search =
document.getElementById("search")?.value
.toLowerCase() || "";

list.innerHTML="";

let applied=0;
let interview=0;
let selected=0;
let rejected=0;

companies.forEach((company,index)=>{

if(
!company.name.toLowerCase()
.includes(search)
){
return;
}

if(company.status==="Applied") applied++;
if(company.status==="Interview") interview++;
if(company.status==="Selected") selected++;
if(company.status==="Rejected") rejected++;

list.innerHTML += `
<div class="company-card">

<h3>${company.name}</h3>

<p>💰 ${company.package} LPA</p>

<p>
<span class="badge ${company.status.toLowerCase()}">
${company.status}
</span>
</p>

<button
class="delete-btn"
onclick="deleteCompany(${index})">
Delete
</button>

</div>
`;
});

document.getElementById("appliedCount").innerText=applied;
document.getElementById("interviewCount").innerText=interview;
document.getElementById("selectedCount").innerText=selected;
document.getElementById("rejectedCount").innerText=rejected;
}

document
.getElementById("search")
.addEventListener("input",
displayCompanies);
