
tahun =  new Date().getFullYear();
document.getElementById("foottext").innerHTML = `© Copyright ${tahun}. All right reserved, SIMO.`

var form = document.getElementById("simo-form");
var btn_submit = document.getElementById("simo-form-button");

      async function handleSubmit(event) {
        event.preventDefault();
        var status = document.getElementById("simo-form-status");
        var data = new FormData(event.target);
        btn_submit.innerHTML = "Process"
        fetch(event.target.action, {
          method: form.method,
          body: data,
          headers: {
              'Accept': 'application/json'
          }
        }
        ).then(response => {
          if (response.ok) {
              Swal.fire('Berhasil mengirim email')

            status.innerHTML = "Thanks for your submission!";
            form.reset()
            btn_submit.innerHTML = "Send"

          } else {
            response.json().then(data => {
              if (Object.hasOwn(data, 'errors')) {
                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                btn_submit.innerHTML = "Send Again."
              } else {
                status.innerHTML = "Oops! There was a problem submitting your form"
                btn_submit.innerHTML = "Send Again."

              }
            })
          }
        }).catch(error => {
          status.innerHTML = "Oops! There was a problem submitting your form"
        });
      }
      form.addEventListener("submit", handleSubmit)
      

      // Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}