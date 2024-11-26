import emailjs from 'emailjs-com'

interface User{
    name:string,
    phone:string,
    location:string
}

export const sendEmail = ({name,phone,location}:User) =>{
    const templateParams = {name,phone,location}
    emailjs.send('service_lg06p49','template_iivy0gn',templateParams,'c6QrGsXjLyI84j54_')
} 