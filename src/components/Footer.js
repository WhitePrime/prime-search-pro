import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__mete">
        <p>PrimeSearchPro is made by WhitePrime</p>
      </div>
      <div className="footer__contact">
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/"
            >
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
