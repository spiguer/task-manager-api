const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nunoecb@gmail.com',
        subject: 'Welcome to tha app',
        text: `Welcome to the app, ${name}. Let me know se os Pss.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nunoecb@gmail.com',
        subject: 'Cancelation Email',
        text: `Pão sem sal, ${name}.`
    })
}

module.exports = {
    sendWelcomeEmail: sendWelcomeEmail,
    sendCancelationEmail: sendCancelationEmail
}