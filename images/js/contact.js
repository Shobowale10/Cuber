const form = {
    Reply: document.getElementById("mailreply"),
    button: document.getElementById("submit-container"),
    name: document.getElementById("from_name"),
    mail: document.getElementById("mail"),
    phone: document.getElementById("phone"),
    subject: document.getElementById("subject"),
    message: document.getElementById("message"),
    nameErr: document.getElementById("nameErr"),
    mailErr: document.getElementById("mailErr"),
    phoneErr: document.getElementById("phoneErr"),
    subjectErr: document.getElementById("subjectErr"),
    messageErr: document.getElementById("messageErr"),
    iframe: document.getElementById("send-contact-email")
}


var nameCorrect = 1; var email = 1; var website = 1; var commentInput = 1;
// VALIDATE DATA BEFORE SENDING
window.onload = function() {
    if(form.button) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

        form.button.addEventListener('click', () => {
            var contactForm = document.getElementById("contact-form");
            function handleForm(event) { event.preventDefault(); } 
            contactForm.addEventListener('submit', handleForm);

            if (window.innerWidth < 757) {
                document.getElementById("phone-detail").scrollIntoView();
            } else {
                document.getElementById("contact").scrollIntoView();
            }

            // VALIDATE NAME
                if (form.name.value === "") {
                    nameCorrect = 0;
                    nameErr.style.display = "block";
                    nameErr.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Please enter your Name!';
                } else {
                    nameCorrect = 1;
                    nameErr.style.display = "none";
                    nameErr.innerHTML = '';
                }

            // VALIDATE EMAIL
                if (form.mail.value !== "") {
                    if (form.mail.value.match(mailformat) == null) {
                        emailCorrect = 0;
                        mailErr.style.display = "block";
                        mailErr.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Please enter a valid email!';
                    } else {
                        emailCorrect = 1;
                        mailErr.style.display = "none";
                        mailErr.innerHTML = '';
                    }
                } else {
                    emailCorrect = 0;
                    mailErr.style.display = "block";
                    mailErr.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Please enter your email address!';
                }

            // VALIDATE PHONE NUMBER
                if (form.phone.value != "") {
                    if (form.phone.value.match(phoneno) == false) {
                        phoneCorrect = 0;
                        phoneErr.style.display = "block";
                        phoneErr.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Your phone number can can only be numbers!';
                    } else if (form.phone.value.length < 11) {
                        phoneCorrect = 0;
                        phoneErr.style.display = "block";
                        phoneErr.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Your phone number cannot be shorter than 11 digits!';
                    } else if (form.phone.value.length > 14) {
                        phoneCorrect = 0;
                        phoneErr.style.display = "block";
                        phoneErr.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Your phone number cannot be greater than 14 digits!';
                    } else {
                        phoneCorrect = 1;
                        phoneErr.style.display = "none";
                        phoneErr.innerHTML = '';
                    }
                } else {
                    phoneCorrect = 1;
                }

            // VALIDATE SUBJECT
                if (form.subject.value === "") {
                    subjectCorrect = 0;
                    subjectErr.style.display = "block";
                    subjectErr.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Please enter your subject for your mail!';
                } else {
                    subjectCorrect = 1;
                    subjectErr.style.display = "none";
                    subjectErr.innerHTML = '';
                }

                
            // VALIDATE COMMENTS
                if (form.message.value === "") {
                    messageInput = 0;
                    messageErr.style.display = "block";
                    messageErr.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Please enter a message!';
                } else {
                    messageInput = 1;
                    messageErr.style.display = "none";
                    messageErr.innerHTML = '';
                }


                // SEND MAIL IF DATA VALIDATION IS SUCCESSFUL
                if (nameCorrect === 1 & emailCorrect === 1 & phoneCorrect === 1 & subjectCorrect === 1 & messageInput === 1) {
                    sendEmail();   

                } else {
                    form.Reply.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Please Check all Inputs';
                }
        })
    }


    function sendEmail() {
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            nameCorrect = 0; email = 0; website = 0; commentInput = 0;
            form.Reply.innerHTML = '...sending';
            window.location.replace("https://www.makavelitv.com/admin/phpmailer/contact.php?subject="
            + form.subject.value 
            + "&sender=" + form.mail.value 
            + "&name=" + form.name.value 
            + "&phone=" + form.phone.value 
            + "&reciever=shobowalelanre111@gmail.com&message=" + form.message.value 
            + ". My email is " + form.mail.value
            + "&redirect=https://shobowalelanre.com.ng/sent.html");

            form.nameErr.innerHTML = null;
            form.mailErr.innerHTML = null;
            form.phoneErr.innerHTML = null;
            form.subjectErr.innerHTML = null;
            form.messageErr.innerHTML = null;
            form.name.value = null;
            form.mail.value = null;
            form.phone.value = null;
            form.subject.value = null;
            form.message.value = null;
        }
    )};
}