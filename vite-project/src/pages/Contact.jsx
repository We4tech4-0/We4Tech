function Contact() {
    return (
      <div>
        <h1>Contact Us</h1>
        <p>
          Have any questions, feedback, or want to collaborate with us? Feel free to reach out!
        </p>
  
        <h2>Contact Information</h2>
        <p>Email: contact@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Tech Street, Innovation City, USA</p>
  
        <h2>Follow Us</h2>
        <ul>
          <li>
            <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/company/example" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/example" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        </ul>
  
        <h2>Get in Touch</h2>
        <p>
          You can also send us a message directly using the contact form below. We
          will get back to you as soon as possible.
        </p>
  
        <form action="https://formspree.io/f/example" method="POST">
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    );
  }
  
  export default Contact;
  