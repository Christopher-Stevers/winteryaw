  //from Sucheta https://medium.com/@shrivastavasucheta/sending-an-email-using-emailjs-gmail-service-to-be-used-in-javascript-d6eb92ed0c7c
  $(document).ready(function () {
        $("#contact-form").submit(function (e) {
            const form = document.querySelector('form[id="contact-form"] ');
            const username = form.elements["user_name"].value;
            const userMail = form.elements["user_email"].value;
            const subject = form.elements["subject"].value;
            const message = form.elements["message"].value;
            e.preventDefault();
            var data = {
                service_id: "service_oqnbbzb",
                template_id: "template_2ogzbrc",
                user_id: "user_2alctVHDRyRs2gc1ntQhw",
                template_params: {
                    from_name: username,
                    from_email: userMail,
                    to_name: "Chris",

                    subject: subject,
                    message: message
                }
            };
            $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
                type: "POST",
                data: JSON.stringify(data),
                contentType: "application/json"
            }).done(function () {
                alert("Your mail is sent!");
            }).fail(function (error) {
                alert("Oops… " + JSON.stringify(error));
            })
        })
    })
    
    window.addEventListener(`click`,function(e){
     
        if(document.getElementById("menu").style.visibility ==="visible"&&  !document.getElementById("menu").contains(e.target)&&!document.getElementById("icon").contains(e.target))     
          {document.getElementById("menu").style.visibility = "hidden";      
         document.getElementById("icon").style.visibility = "visible";}
    });
  document.getElementById("exit-list").addEventListener('click', function(){
    document.getElementById("icon").style.visibility = "visible";
    document.getElementById("menu").style.visibility = "hidden";

  });
  document.getElementById("icon").addEventListener('click',   function(){
   document.getElementById("menu").style.visibility = "visible";
   document.getElementById("icon").style.visibility = "hidden";});