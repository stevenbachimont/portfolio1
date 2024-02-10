<!--formulaire de contact-->
new Vue({
    el: '#app',
    data: {
        nom: '',
        email: '',
        message: ''
    },
    methods: {
        submitForm() {
            const emailContent = `
                        Nom : ${this.nom}
                        Email : ${this.email}
                        Message : ${this.message}
                    `;

            const email = "contact.bachimont@gmail.com";
            const subject = "Nouveau de contact";

            const isChrome = /Chrome/.test(navigator.userAgent);

            if (isChrome) {
                const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`;
                window.open(gmailUrl);
            } else {
                const mailtoUri = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`;
                window.location.href = mailtoUri;
            }
        }
    }

});
