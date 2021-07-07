  //from Sucheta https://medium.com/@shrivastavasucheta/sending-an-email-using-emailjs-gmail-service-to-be-used-in-javascript-d6eb92ed0c7c
 /* $(document).ready(function () {
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
    })*/document.getElementById("send").addEventListener("click", function(event){
  event.preventDefault()
});
    const sendEmail=()=>{
        let templateParams={
            user_name: document.getElementById("user_name").value,
            user_email: document.getElementById("user_email").value,
            message:  document.getElementById("message").value,
            subject: document.getElementById("subject").value
        }
      console.log(templateParams);
        emailjs.send('service_oqnbbzb', 'template_yeufvle', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       document.getElementById("user_name").value=""
       document.getElementById("message").value=""
       document.getElementById("subject").value=""
      document.getElementById("user_email").value=""
        window.alert("Your message has been sent")
    }, function(error) {
        window.alert("Your message has not been sent, please contact christopher.stevers1@gmail.com")
       console.log('FAILED...', error);
    });

    }
   
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


   const paraGraph=(x)=>{
console.log(x)
let returned;
    switch(x){
        case "calc":
            returned = `
            <h3>Feed Cost Calculator</h3>
            <p>Every other quarter, my family had to go through the tedious task of finding the cost of production on our hogs.
            This is my solution to this problem. It allows the user to input some simple data which can be
             found in farm records, and then calculates the cost of feed used from that data. A simple problem needs a simple solution, so I've used HTML CSS and JS to create this little tool. <div class="modal-link"><a href="https://christopher-stevers.github.io/Feed-Calc/">
             Live site</a><a href="https://github.com/Christopher-Stevers/Feed-Calc/tree/master">Code</a></div></p>`

    break;
   case "stonks":
            returned=`
            
            <h3>Stock Tracker</h3>
            <p>When I saw the twelvedata api in use in <a href="https://github.com/flyingfisch/FischBotDiscord-csharp">a discord bot</a> I was intrigued. 
            At the time I was studying D3.js, so I built this SPA.
             It allows the user to view a barchart visualization of the history of a stock of their choice over the past 30 weeks. 
             It's bootstrapped with create-react-app, and the visualization is in D3.js
             <div class="modal-link">
             <a href="https://fervent-bassi-16f84e.netlify.app/">
             Live site</a><a href="https://github.com/Christopher-Stevers/stock-tracker">Code</a></div></p>`
    
    break;
    case "whirl": 
         returned=`
         <h3>Whirl Creek Farm Demo</h3><p>My parent's farm was lacking in online presence, which could be a valuable asset for their organic direct sales. To solve this problem I created a modern website which allows the user to browse products, contact us, and send their orders to my email. 
         As this site is a demo, orders from it will not be filled, and the contact information is not accurate. To build this single page app, I used React, and managed global state with React's Context api.<div class="modal-link"><a href="https://whirlcreekfarm.ga/">
         Live site</a><a href="https://github.com/Christopher-Stevers/actual-react-whirl">Code</a></div></p>`
    break;
    case "kanbeano":
        returned=`<h3>Kanbeano</h3><p>Kanbeano is my take on the kanban board. I was heard about the concept from another dev 
        and was looking for a fullstack project so I built this. Kanbeano features a clean ui where you can build private lists, save and edit them.
         The lists are stored in a Mongo database and accessed through a RESTful api built in node. The entire project is built on the Next.js framework
          for React which I used for its backend functionality. However its other features, like built-in SCSS processing, are a plus as well. Finally, I used the next-auth and
          react-beautiful-dnd libraries to add auth and drag-and-drop to the app.<div class="modal-link"><a href="https://new-kanbeano.vercel.app/">
          Live site</a><a href="https://github.com/Christopher-Stevers/NewKanbeano">Code</a></div></p>` 
          break;}
return returned

   }
   const overlayFunc=(e)=>{
       if(document.querySelector(".fixed")){
        const modal= document.querySelector(".fixed");
         modal.remove();
   }
       const myText=paraGraph(e.target.id);
       const newElem=document.createElement("div");
       newElem.id=e.target.id+"overlay";
       newElem.className="fixed"
       newElem.innerHTML=`<div class="wrapper"><button class=${e.target.id}>x</button>${myText}</div>`
       console.log(document.querySelector("body"));
       if(newElem){
     document.getElementById("portfolio-page").appendChild(newElem);
     const removeModal=()=>{
        console.log(e.target.className);
        let elemId=e.target.className+"overlay"
        let elem=document.getElementById(elemId);
        console.log(elem)
      if(document.querySelector(".fixed")) document.querySelector(".fixed").remove();

     }
    document.querySelector("."+e.target.id).addEventListener("click", removeModal);
    document.querySelector(".fixed", removeModal).addEventListener("click", removeModal);
}

       
       
       
       }
   const hovers=document.querySelectorAll(".hover-div");
   hovers.forEach(elem=>elem.addEventListener("click", overlayFunc));