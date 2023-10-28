"use server";

import React from "react";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) =>{
    // console.log("Running on server");
    // console.log(formData.get("senderEmail"));
    // console.log(formData.get("message"));

        const senderEmail = formData.get('senderEmail');
        const message = formData.get('message')

        // console.log(senderEmail);


          // simple server-side validation
       if (!validateString(senderEmail, 500)) {
         return {
            error: "Invalid sender email",
         };
      }
       if (!validateString(message, 5000)) {
         return {
            error: "Invalid message",
         };
      }
      let data;
      try {
            data = await resend.emails.send({    // it will send either the data or the error object
        from: 'Contact Form <onboarding@resend.dev>',
        to: 'princeak22486@gmail.com',
        subject: 'Message from contact form',
        reply_to: senderEmail,
        // text: message,
      //   react: <ContactFormEmail message={message} senderEmail={senderEmail}/> can write in this way in tsx
           react: React.createElement(ContactFormEmail, {
            message: message,
            senderEmail: senderEmail,
           })
    });
   } catch (error: unknown) {
     return {
        error: getErrorMessage(error)
     }
   }
   return {
      data,
    };
};


