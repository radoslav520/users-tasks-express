const sgMail = require('@sendgrid/mail');

const APIKey = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(APIKey);


sendWelcomeEmail = (email,name) =>{

    sgMail.send({
        to: email,
        from: 'radicradoslav520@gmail.com',
        subject: 'Sending with Twilio SendGrid is Fun',
        text: `Welcome in app ${name},bla bla blaa`,
        
    })

}

sendCanceledEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from: 'radicradoslav520@gmail.com',
        subject: 'Sending with Twilio SendGrid is Fun',
        text: `Goodbye ${name},bla bla blaa`,
        
    })
}

module.exports= {

    sendWelcomeEmail,
    sendCanceledEmail
};