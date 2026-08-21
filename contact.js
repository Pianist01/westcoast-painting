 emailjs.init({
      publicKey: "yqZixuN23JZWME2M1"
    });

// EMAIL JS SCRIPT

  // GRAB FORM

const form = document.getElementById('contact-form');

function submitForm() {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    emailjs.sendForm('service_utp3liq', 'template_65p3vk9', form).then(() => {
      console.log('Success, message sent');
    }, (error) => {
      console.log('Error, message not sent');
    });
  });
}

submitForm();