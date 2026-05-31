let companies = [];

function addCompany(){

    let companyName =
        document.getElementById("company").value;

    let packageValue =
        document.getElementById("package").value;

    let status =
        document.getElementById("status").value;

    let company = {
        name: companyName,
        package: packageValue,
        status: status
    };

    companies.push(company);

    displayCompanies();
}

function displayCompanies(){

    let list =
        document.getElementById("companyList");

    list.innerHTML = "";

    companies.forEach((company)=>{

        list.innerHTML += `
        <div class="company-card">
            <h3>${company.name}</h3>
            <p>Package: ${company.package} LPA</p>
            <p>Status: ${company.status}</p>
        </div>
        `;
    });
}
