

export default function Contact() {
    return (
        <div className="container my-4">
            <h2>Contact Us</h2>
            <p>You can reach us at:</p>
            <ul>
                <li>Email: harshavardhankm196@gmail.com</li>
                <li>Phone: +91 9544189320</li>
            </ul>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className="social-media">
                <a href="https://www.instagram.com/h4__harsh__/" target="_blank" rel="noopener noreferrer">Instagram</a>&nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/harshavardhan-km" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </div>
    );
}
