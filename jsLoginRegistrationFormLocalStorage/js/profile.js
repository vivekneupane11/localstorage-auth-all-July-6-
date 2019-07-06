let userList = document.getElementById("users-list");
let userwelcome = document.getElementById("userwelcome");
let totalUser = localStorage.length;
document.getElementById('email').innerHTML = "Email  : " + sessionStorage.getItem("Email");
document.getElementById('name').innerHTML = "Name : " + sessionStorage.getItem("Name");
document.getElementById('contact').innerHTML = "Contact : " + sessionStorage.getItem("Contact");
document.getElementById('gender').innerHTML = "Profession : " + sessionStorage.getItem("Profession");

console.log(sessionStorage.getItem("role"));
let usersidecontent = document.getElementById("usersidecontent");
let adminsidecontent = document.getElementById("adminsidecontent");
if (sessionStorage.getItem("Role") == "admin") {
    usersidecontent.style.display = "none";
} else if (sessionStorage.getItem("Role") == "user") {
    adminsidecontent.style.display = "none";
} else {
    document.write("Who are you??");
}
// +sessionStorage.getItem("Name")
document.getElementById('logout').addEventListener('click', function() {
    sessionStorage.clear();
    window.location.href = "../index.html";
});
getallUsers();

function getallUsers() {
    let count;
    for (count = 0; count < totalUser; count++) {
        let users = JSON.parse(localStorage.getItem('student' + count));

        userList.innerHTML += `<tr>
            <td>` + users.id + `</td>
            <td>` + users.name + `</td>
            <td>` + users.email + `</td>
            <td>` + users.contact + `</td>
            <td>` + users.job + `</td>
            <td><span class="status text-success">&bull;</span> ` + users.role + `</td>
            <td>
                <a href="#" class="settings" title="Edit" data-toggle="tooltip">  <i  onclick="editUser(` + users.id + `);"  class="material-icons">&#xE8B8;</i></a>
                <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i onclick="deleteUser(` + users.id + `);" class="material-icons">&#xE5C9;</i></a>
            </td>
        </tr>`;
    }
}

function deleteUser(id) {
    var confirmDelete = confirm("Are you sure to delete this?");
    if (confirmDelete) {
        localStorage.removeItem('student' + id);
        alert("User Removed");
        location.href = "./profile.html";
    }
}

function editUser(userId, e) {
    console.log(e);
    let totalUsers = [];
    let totalnoofuser = localStorage.length;
    let counts = 0;
    for (counts = 0; counts < totalnoofuser; counts++) {
        totalUsers[counts] = JSON.parse(localStorage.getItem('student' + counts));

    }
    totalUsers.forEach((data) => {
        if (userId == data.id) {
            userList.innerHTML = `<tr>
            <td>` + data.id + ` </td>
            <td><input id="editinput" type="text" value="` + data.name + `"> </td>
            <td><input id="editinputemail"  type="text" value="` + data.email + `">  </td>
            <td><input id="editinputcontact" type="text" value="` + data.contact + `"> </td>
            <td><input id="editinputjob" type="text" value="` + data.job + `"> </td>
            <td><input id="editinputrole" type="text" value="` + data.role + `"> </td>
            <td>
                <a href="#" onclick="editSave(` + data.id + `);" class="delete" title="Save" data-toggle="tooltip"><i class="far fa-edit"></i></a>
            </td>
        </tr>`;

        }


    });
    console.log(event.target.parentNode);
}

function editSave(id) {
    let totalsUsers = [];
    let totalsnoofuser = localStorage.length;
    let countss = 0;
    for (countss = 0; countss < totalsnoofuser; countss++) {
        totalsUsers[countss] = JSON.parse(localStorage.getItem('student' + countss));

    }
    totalsUsers.forEach((data) => {
        if (id == data.id) {
            let student = {
                id: id,
                name: document.getElementById("editinput").value,
                email: document.getElementById("editinputemail").value,
                contact: document.getElementById("editinputcontact").value,
                job: document.getElementById("editinputjob").value,
                role: document.getElementById("editinputrole").value,
                password: data.password
            }
            localStorage.setItem('student' + id, JSON.stringify(student));

            alert("EDited sucessfully");
            location.href = "./profile.html";
        }



    });

    window.location.reload(true);
}


//Author: Vivek Neupane