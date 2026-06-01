let companies =
JSON.parse(
localStorage.getItem("companies")
) || [];

displayCompanies();

function addCompany(){
let currentFilter = "All";

let companyName =
document.getElementById("company").value;

let packageValue =
document.getElementById("package").value;

let status =
document.getElementById("status").value;

if(
companyName.trim()==="" ||
packageValue.trim()===""
){
alert("Please fill all fields");
return;
}

companies.push({
name:companyName,
package:Number(packageValue),
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

let confirmDelete =
confirm(
"Are you sure you want to delete?"
);

if(confirmDelete){

companies.splice(index,1);

saveData();
displayCompanies();

}
}

function editCompany(index){

let newName =
prompt(
"Enter Company Name",
companies[index].name
);

let newPackage =
prompt(
"Enter Package",
companies[index].package
);

if(newName){

companies[index].name =
newName;

companies[index].package =
Number(newPackage);

saveData();
displayCompanies();

}
}

function sortCompanies(){

companies.sort(
(a,b)=>
b.package-a.package
);

saveData();
displayCompanies();
}

function displayCompanies(){

let list =
document.getElementById(
"companyList"
);

let search =
document.getElementById(
"search"
)?.value.toLowerCase() || "";

list.innerHTML="";

let applied=0;
let interview=0;
let selected=0;
let rejected=0;

companies.forEach(
(company,index)=>{

if(
!company.name
.toLowerCase()
.includes(search)
){
return;
}

if(company.status==="Applied")
applied++;

if(company.status==="Interview")
interview++;

if(company.status==="Selected")
selected++;

if(company.status==="Rejected")
rejected++;

list.innerHTML += `
<div class="company-card">

<h2>${company.name}</h2>

<p>
💰 Package:
${company.package} LPA
</p>

<p>
<span class="badge ${company.status.toLowerCase()}">
${company.status}
</span>
</p>

<button
class="edit-btn"
onclick="editCompany(${index})">
Edit
</button>

<button
class="delete-btn"
onclick="deleteCompany(${index})">
Delete
</button>

</div>
`;

});

document.getElementById(
"appliedCount"
).innerText = applied;

document.getElementById(
"interviewCount"
).innerText = interview;

document.getElementById(
"selectedCount"
).innerText = selected;

document.getElementById(
"rejectedCount"
).innerText = rejected;

let total =
companies.length;

let success =
total > 0
? ((selected/total)*100).toFixed(1)
: 0;

document.getElementById(
"successRate"
).innerText =
success + "%";
}

document
.getElementById("search")
.addEventListener(
"input",
displayCompanies
);
