import './contact.css'
import { ContactIcons } from '../components/contact-icons/contact-icons'

export function Contact () {
  return (
    <section className='contact' id='contact'>
      <div className='contact__background' />
      <div className='contact__container'>
        <h2>Contact Me</h2>
        <p>Please get in touch if you think our work could be mutually beneficial!</p>
        <p>stoledano97@gmail.com</p>
        <ContactIcons />
      </div>
    </section>
  )
}