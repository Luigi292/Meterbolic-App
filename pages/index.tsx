import Chatbot from '../components/Chatbot';
import styles from '../styles/Home.module.css';



export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to Meterbolic</h1>
        <p className={styles.description}>
          Transforming the future of metabolic health with intelligent solutions. Meterbolic leverages cutting-edge AI and analytics to provide personalized insights into your metabolism.
        </p>
      </header>
      
      <section className={styles.chatbotSection}>
        <h2>Need Help? Chat with our AI!</h2>
        <Chatbot />
      </section>

      <section className={styles.chatbotSection}>
        <h2>Need Help? Chat with our AI!</h2>
        <Chatbot />
      </section>
      <section className={styles.chatbotSection}>
        <h2>Need Help? Chat with our AI!</h2>
        <Chatbot />
      </section>
      <section className={styles.chatbotSection}>
        <h2>Need Help? Chat with our AI!</h2>
        <Chatbot />
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerText}>Powered by Meterbolic &copy; {new Date().getFullYear()}</p>
        <p className={styles.footerText}>
          <a href="https://meterbolic.com" className={styles.footerLink}>Visit Our Website</a>
        </p>
      </footer>
    </main>
  );
}
