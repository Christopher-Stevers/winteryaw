

    function displayList() {
        document.getElementById("menu").style.visibility = "visible";
        document.getElementById("icon").style.visibility = "hidden";
    };
    function hideList() {
        document.getElementById("icon").style.visibility = "visible";
        document.getElementById("menu").style.visibility = "hidden";
    };
    $(document).ready(function () {
        $("#contact-form").submit(function (e) {
        const form = document.querySelector('form[id="contact-form"] ');
        const username = form.elements["user_name"].value;
        const userMail = form.elements["user_email"].value;
        const subject = form.elements["subject"].value;
        const message = "email — " + userMail + "<br>" + "Summary:"+ form.elements["message"].value;
        e.preventDefault();
        var data = {
        service_id: "service_oqnbbzb",
        template_id: "template_2ogzbrc",
        user_id: "user_2alctVHDRyRs2gc1ntQhw",
        template_params: {
        from_name: username,
        to_name: "Sucheta",
        subject: subject,
        message_html: message
        }
        };
        $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
        type: "POST",
        data: JSON.stringify(data),
        contentType: "application/json"
        }).done(function() {
        alert("Your mail is sent!");
        }).fail(function(error) {
        alert("Oops… " + JSON.stringify(error));
        })
        })
        })
