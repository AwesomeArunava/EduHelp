    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
    import { getDatabase, ref, set, child, get, push, update } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
    import { getAuth,  createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, sendSignInLinkToEmail, isSignInWithEmailLink, sendEmailVerification, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyD9EHdz97GaYT-ppJ9WddOckUEgbjPZZns",
      authDomain: "eduhelp-bcf7d.firebaseapp.com",
      databaseURL: "https://eduhelp-bcf7d-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "eduhelp-bcf7d",
      storageBucket: "eduhelp-bcf7d.appspot.com",
      messagingSenderId: "399207158671",
      appId: "1:399207158671:web:5b3f03eb619b15a1c2f1fa"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

const edit = document.getElementById("edit");
var student_name= document.getElementById("student_name");
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
var sem_1 = document.getElementById("sem_1");
var session = document.getElementById("session");
var save = document.getElementById("save");
var paper_1 = document.getElementById("paper_1");
var paper_2 = document.getElementById("paper_2");
var paper_3 = document.getElementById("paper_3");
var paper_4 = document.getElementById("paper_4");
var paper_5 = document.getElementById("paper_5");

edit.addEventListener('click', ()=>{
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
        paper_1.style.cssText = "display:block; pointer-events:auto; border:1px solid black;";
        paper_2.style.cssText = "display:block; pointer-events:auto; border:1px solid black;";
        paper_3.style.cssText = "display:block; pointer-events:auto; border:1px solid black;";
        paper_4.style.cssText = "display:block; pointer-events:auto; border:1px solid black;";
        paper_5.style.cssText = "display:block; pointer-events:auto; border:1px solid black;";
    
});

//  save.addEventListener('click', () => {
   
//  })





// Student Data write and Read code



const user = localStorage.getItem('user');
// console.log(user);
const userId = localStorage.getItem('userId');
const email = localStorage.getItem('email');
document.getElementById("email").textContent = email;
console.log(email);
// const accountType = "student";

const dbRef = ref(getDatabase());
get(child(dbRef, `users/${userId}`)).then((snapshot) => {
  if (snapshot.exists()) {
    // console.log(snapshot.val());
    let studentData = snapshot.val().studentInfo;
    // console.log(studentData);
    // var student_name = studentData.student_name;
    // var student_name = "hello";
    console.log(studentData.student_name);
    localStorage.setItem('name', studentData.student_name);
    document.getElementById("student_name").textContent = studentData.student_name;
    document.getElementById("student_name1").textContent = studentData.student_name;
    document.getElementById("father_name").value = studentData.father_name;
    document.getElementById("address").value = studentData.address;
    document.getElementById("city").value = studentData.city; 
    document.getElementById("ps").value = studentData.ps; 
    document.getElementById("dist").value = studentData.dist; 
    document.getElementById("state").value = studentData.state; 
    document.getElementById("pin_code").value = studentData.pin_code; 
    document.getElementById("adhar").value = studentData.adhar;
    document.getElementById("contact_number").value = studentData.contact_number;
    document.getElementById("contact_number_1").value = studentData.contact_number; 
    document.getElementById("reg").value = studentData.reg;
    document.getElementById("academic_year").value = studentData.academic_year;
    document.getElementById("gender").value = studentData.gender;
    document.getElementById("dob").value = studentData.dob; 
    document.getElementById("religion").value = studentData.religion;
    document.getElementById("blood").value = studentData.blood; 
    document.getElementById("department").value = studentData.department;
    document.getElementById("collage").value = studentData.collage; 
    document.getElementById("collage_roll").value = studentData.collage_roll;
    document.getElementById("collage_roll_1").value = studentData.collage_roll; 
    document.getElementById("sem").value = studentData.sem;
    document.getElementById("sem_1").value = studentData.sem; 
    document.getElementById("session").value = studentData.session;
    document.getElementById("session_1").value = studentData.session; 
    document.getElementById("paper_1").value = studentData.paper_1; 
    document.getElementById("paper_2").value = studentData.paper_2;
    document.getElementById("paper_3").value = studentData.paper_3; 
    document.getElementById("paper_4").value = studentData.paper_4;
    document.getElementById("paper_5").value = studentData.paper_5;
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});


// update

save.addEventListener('click', ()=>{
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
            paper_1.style.cssText = "display:block; pointer-events:none; border:none;";
            paper_2.style.cssText = "display:block; pointer-events:none; border:none;";
            paper_3.style.cssText = "display:block; pointer-events:none; border:none;";
            paper_4.style.cssText = "display:block; pointer-events:none; border:none;";
            paper_5.style.cssText = "display:block; pointer-events:none; border:none;";

                //  student_name = document.getElementById("student_name").textContent;
                student_name = document.getElementById("student_name").textContent;
                console.log(student_name);
                 father_name = document.getElementById("father_name").value;
                 address = document.getElementById("address").value;
                 city = document.getElementById("city").value;
                 ps = document.getElementById("ps").value;
                 dist = document.getElementById("dist").value;
                 state = document.getElementById("state").value;
                 pin_code = document.getElementById("pin_code").value;
                 adhar = document.getElementById("adhar").value;
                 contact_number = document.getElementById("contact_number").value;
                 reg = document.getElementById("reg").value;
                 academic_year = document.getElementById("academic_year").value;
                 gender = document.getElementById("gender").value;
                 dob = document.getElementById("dob").value;
                 religion = document.getElementById("religion").value;
                 blood = document.getElementById("blood").value;
                 department = document.getElementById("department").value;
                 collage = document.getElementById("collage").value;
                 collage_roll = document.getElementById("collage_roll").value;
                 sem = document.getElementById("sem").value;
                 session = document.getElementById("session").value;
                 paper_1 = document.getElementById("paper_1").value;
                 paper_2 = document.getElementById("paper_2").value;
                 paper_3 = document.getElementById("paper_3").value;
                 paper_4 = document.getElementById("paper_4").value;
                 paper_5 = document.getElementById("paper_5").value;

        function writeUserData(userId, student_name, email, father_name, address, city, ps, dist, state, pin_code, adhar, contact_number, reg, academic_year, gender, dob, religion, blood, department, collage, collage_roll, sem, session, paper_1, paper_2, paper_3, paper_4, paper_5) {
                set(ref(database, "users/" + userId), {
                  student_name: student_name,
                  email: email,
                  userType: "student",
                  father_name: father_name,
                  address: address,
                  city: city,
                  ps: ps,
                  dist : dist,
                  state : state,
                  pin_code : pin_code,
                  adhar : adhar,
                  contact_number : contact_number,
                  reg : reg,
                  academic_year : academic_year,
                  gender : gender,
                  dob : dob,
                  religion : religion,
                  blood : blood,
                  department : department,
                  collage : collage,
                  collage_roll : collage_roll,
                  sem : sem,
                  session : session,
                  paper_1 : paper_1,
                  paper_2 : paper_2,
                  paper_3 : paper_3,
                  paper_4 : paper_4,
                  paper_5 : paper_5,
                });
              }
              // writeUserData(userId, student_name, email, father_name, address, city, ps, dist, state, pin_code, adhar, contact_number, reg, academic_year, gender, dob, religion, blood, department, collage, collage_roll, sem, session, paper_1, paper_2, paper_3, paper_4, paper_5);

              writeNewPost(userId, student_name, email, father_name, address, city, ps, dist, state, pin_code, adhar, contact_number, reg, academic_year, gender, dob, religion, blood, department, collage, collage_roll, sem, session, paper_1, paper_2, paper_3, paper_4, paper_5)
            


});

function writeNewPost(userId, student_name, email, father_name, address, city, ps, dist, state, pin_code, adhar, contact_number, reg, academic_year, gender, dob, religion, blood, department, collage, collage_roll, sem, session, paper_1, paper_2, paper_3, paper_4, paper_5) {
  const db = getDatabase();

  // A post entry.
  const postData = {
                  student_name: student_name,
                  email: email,
                  userType: "student",
                  father_name: father_name,
                  address: address,
                  city: city,
                  ps: ps,
                  dist : dist,
                  state : state,
                  pin_code : pin_code,
                  adhar : adhar,
                  contact_number : contact_number,
                  reg : reg,
                  academic_year : academic_year,
                  gender : gender,
                  dob : dob,
                  religion : religion,
                  blood : blood,
                  department : department,
                  collage : collage,
                  collage_roll : collage_roll,
                  sem : sem,
                  session : session,
                  paper_1 : paper_1,
                  paper_2 : paper_2,
                  paper_3 : paper_3,
                  paper_4 : paper_4,
                  paper_5 : paper_5,
  };

  // const newPostKey = push(child(ref(db), 'posts')).key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['users/' + userId + '/studentInfo'] = postData;
  // updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return update(ref(db), updates);
}
// console.log(student_name);
