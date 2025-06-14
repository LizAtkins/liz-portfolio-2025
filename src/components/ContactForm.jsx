import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      const response = await fetch('https://formspree.io/f/meokgyvd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value
        })
      });

      if (response.ok) {
        setStatus({ loading: false, error: null, success: true });
        e.target.reset();
        
        // Close the form after 2 seconds on success
        setTimeout(() => {
          onClose();
          setStatus({ loading: false, error: null, success: false });
        }, 2000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({
        loading: false,
        error: 'Failed to send message. Please try again.',
        success: false
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="contact-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-form-title"
        >
          <motion.div
            className="contact-modal"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={e => e.stopPropagation()}
            role="document"
          >
            <button 
              className="close-button" 
              onClick={onClose}
              aria-label="Close contact form"
            >×</button>
            <h2 id="contact-form-title">Contact Me</h2>
            {status.success ? (
              <div className="success-message" role="alert">
                <p>Message sent successfully! I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} aria-label="Contact form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={status.loading}
                    aria-required="true"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={status.loading}
                    aria-required="true"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    disabled={status.loading}
                    aria-required="true"
                  />
                </div>
                {status.error && (
                  <div className="error-message" role="alert">
                    {status.error}
                  </div>
                )}
                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={status.loading}
                  aria-busy={status.loading}
                >
                  {status.loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactForm; 