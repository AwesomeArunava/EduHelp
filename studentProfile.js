


const edit = document.getElementById("edit");
var father_name = document.getElementById("father_name");
var address = document.getElementById("address");
var city = document.getElementById("city");
var ps = document.getElementById("ps");
var dist = document.getElementById("dist");
var state = document.getElementById("state");
var pin_code = document.getElementById("pin_code");
var adhar = document.getElementById("adhar");
var contact_number = document.getElementById("contact_number");
var reg = document.getElementById("reg");
var academic_year = document.getElementById("academic_year");
var gender = document.getElementById("gender");
var dob = document.getElementById("dob");
var religion = document.getElementById("religion");
var blood = document.getElementById("blood");
var department = document.getElementById("department");
var collage = document.getElementById("collage");
var collage_roll = document.getElementById("collage_roll");
var sem = document.getElementById("sem");
var session = document.getElementById("session");
var save = document.getElementById("save");


function show(){
        father_name.style.cssText = "display:block; pointer-events: auto; border:1px solid black;";
        address.style.cssText = "display:block; pointer-events: auto; border:1px solid black;";
        city.style.cssText = "display:block; pointer-events: auto; border:1px solid black;";
        ps.style.cssText = "display:block; pointer-events:auto; border:1px solid black;";
        dist.style.cssText = "display:block; pointer-events:auto; border:1px solid black;";
        state.style.cssText = "display:block; pointer-events:auto; border:1px solid black;";
        pin_code.style.cssText = "display:block; pointer-events:auto; border:1px solid black;";
        adhar.style.cssText = "display:block; pointer-events:auto; border:1px solid black;";
        contact_number.style.cssText = "display:block; pointer-events:auto; border:1px solid black;";
        reg.style.cssText = "display:block; pointer-events:auto; border:1px solid black;";
        academic_year.style.cssText = "display:block; pointer-events:auto; border:1px solid black;";
        gender.style.cssText = "display:block; pointer-events:auto; border:1px solid black;";
        dob.style.cssText = "display:block; pointer-events:auto; border:1px solid black;";
        religion.style.cssText = "display:block; pointer-events:auto; border:1px solid black;";
        blood.style.cssText = "display:block; pointer-events:auto; border:1px solid black;";
        department.style.cssText = "display:block; pointer-events:auto; border:1px solid black;";
        collage.style.cssText = "display:block; pointer-events:auto; border:1px solid black;";
        collage_roll.style.cssText = "display:block; pointer-events:auto; border:1px solid black;";
        sem.style.cssText = "display:block; pointer-events:auto; border:1px solid black;";
        session.style.cssText = "display:block; pointer-events:auto; border:1px solid black;";
    
    
}

 save.addEventListener('click', () => {
    father_name.style.cssText = "display:block; pointer-events: none; border:none;";
    address.style.cssText = "display:block; pointer-events: none; border:none;";
        city.style.cssText = "display:block; pointer-events: none; border:none;";
        ps.style.cssText = "display:block; pointer-events:none; border:none;";
        dist.style.cssText = "display:block; pointer-events:none; border:none;";
        state.style.cssText = "display:block; pointer-events:none; border:none;";
        pin_code.style.cssText = "display:block; pointer-events:none; border:none;";
        adhar.style.cssText = "display:block; pointer-events:none; border:none;";
        contact_number.style.cssText = "display:block; pointer-events:none; border:none;";
        reg.style.cssText = "display:block; pointer-events:none; border:none;";
        academic_year.style.cssText = "display:block; pointer-events:none; border:none;";
        gender.style.cssText = "display:block; pointer-events:none; border:none;";
        dob.style.cssText = "display:block; pointer-events:none; border:none;";
        religion.style.cssText = "display:block; pointer-events:none; border:none;";
        blood.style.cssText = "display:block; pointer-events:none; border:none;";
        department.style.cssText = "display:block; pointer-events:none; border:none;";
        collage.style.cssText = "display:block; pointer-events:none; border:none;";
        collage_roll.style.cssText = "display:block; pointer-events:none; border:none;";
        sem.style.cssText = "display:block; pointer-events:none; border:none;";
        session.style.cssText = "display:block; pointer-events:none; border:none;";
 })

document.getElementById("father_name").value = "Manindra Ch. Debnath";



// Data fatch from Firebase



// const dbRef = ref(getDatabase());
// get(child(dbRef, `users/https://console.firebase.google.com/u/1/project/eduhelp-bcf7d/database/eduhelp-bcf7d-default-rtdb/data/~2Fusers~2F4C4uOhhIvWePHdYgqiIUb7HTiF43`))
//   .then((snapshot) => {
//     if (snapshot.exists()) {
//       const data = snapshot.val();
//       console.log(data);
//       document.getElementById("student_name").innerHTML = data.student_name;
//     //   document.getElementById("profileEmail").innerHTML = data.email;
//       console.log(snapshot.val());
//     } else {
//       console.log("No data available");
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });


