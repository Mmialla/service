document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });

    // });


    // var firebaseConfig = {
    //     apiKey: "AIzaSyAIVB2By6IAKA5LHtcmE77wYp9m1MNS3QQ",
    //     authDomain: "contactform-ef917.firebaseapp.com",
    //     projectId: "contactform-ef917",
    //     storageBucket: "contactform-ef917.appspot.com",
    //     messagingSenderId: "393287338231",
    //     appId: "1:393287338231:web:88b24b2b337a64bd8eebf2"
    // };

    // //initialize firebase
    // firebaseApp.initializeApp(firebaseConfig);
    var firestore = firebase.firestore()


    //variableto access  db elements
    const db = firestore.collection("user(s)")

    //get submitform
    let submitButton = document.getElementById('submit');



    //create event listener to allow submission
    submitButton.addEventListener("click", (e) => {
        //prevent default form behaviour
        e.preventDefault();

        let submit = document.getElementById('submit').value;

        //get form values
        let firstname = document.getElementById("fname").value
        let lastname = document.getElementById("lname").value
        let email = document.getElementById("email").value
        let phonenumber = document.getElementById("pnumber").value
        let comment = document.getElementById("query").value

        db.doc().set({
                submit: submit,
                fname: firstname,
                lname: lastname,
                email: email,
                pnumber: phonenumber,
                query: comment
            }).then(() => {
                console.log('data saved')
            }).catch((error) => {
                console.log(error)
            })
            //alert 
        alert("form submitted successful");
    })


    //save formdata to firebase

})