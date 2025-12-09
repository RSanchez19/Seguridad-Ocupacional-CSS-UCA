import './Footer.css'

const contacts = [
  {
    label: 'Teléfonos',
    value: '2210-6600 Ext. 427 y 2210-6680',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.1 3.5 6.3 5.3c-.4.4-.6 1-.6 1.6 0 6 4.9 10.8 10.8 10.8.6 0 1.2-.2 1.6-.6l1.8-1.8c.4-.4.4-1 0-1.4l-2.2-2.2c-.4-.4-1-.4-1.4 0l-1 1c-.3.3-.7.4-1.1.3-1.6-.6-3-1.9-3.6-3.6-.1-.4 0-.8.3-1.1l1-1c.4-.4.4-1 0-1.4L9.5 3.5c-.4-.4-1-.4-1.4 0Z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    value: 'facebook.com/cssuca',
    href: 'https://www.facebook.com/cssuca/',
    icon: (
      <img
        src="https://cdn.simpleicons.org/facebook/1877F2"
        alt="Facebook"
        width="18"
        height="18"
        loading="lazy"
      />
    ),
  },
  {
    label: 'X',
    value: 'x.com/CSSUCA',
    href: 'https://x.com/CSSUCA',
    icon: (
      <img
        src="https://cdn.simpleicons.org/x/111111"
        alt="X"
        width="18"
        height="18"
        loading="lazy"
      />
    ),
  },
  {
    label: 'Instagram',
    value: 'instagram.com/cssuca',
    href: 'https://www.instagram.com/cssuca/',
    icon: (
      <img
        src="https://cdn.simpleicons.org/instagram/E4405F"
        alt="Instagram"
        width="18"
        height="18"
        loading="lazy"
      />
    ),
  },
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h3>Centro de servicio social · UCA</h3>
          <ul className="contact-list">
            {contacts.map((contact) => (
              <li key={contact.label} className="contact-item">
                <span className="contact-icon" aria-hidden="true">
                  {contact.icon}
                </span>
                <span className="contact-text">
                  <strong>{contact.label}:</strong>{' '}
                  {contact.href ? (
                    <a
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      {contact.value}
                    </a>
                  ) : (
                    contact.value
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
