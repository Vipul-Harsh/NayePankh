
import express from 'express'
import contact from "../model/contactschema.js"
import nodemailer from 'nodemailer';
const router= express.Router();
router.get('/',(req,res)=>{
    res.send(`Hello world from the server router.js `);
})

router.post("/send",async (req,res)=>{
    try {
        const { name, email, message } = req.body;
    
      
        const newContact = new contact({
          name,
          email,
          message,
        });
    
        await newContact.save();
        
        
       
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'harshvipul.1704@gmail.com',
            pass: '', 
          },
        });
    
        const mailOptions = {
          from: 'harshvipul.1704@gmail.com', 
          to: email,
          subject: 'Thank you for contacting us',
          text: `Dear ${name},\n\nThank you for contacting us. We have received your message\n\nBest regards,\nMasterChef`,
        };
    
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error('Error sending email:', error);
          } else {
            console.log('Email sent:', info.response);
          }
        });
    
        res.status(200).json({ message: 'Data saved and email sent successfully' });
      } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
})

export default router;













