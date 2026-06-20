import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Column 1 — Store Description */}
          <div className={styles.col}>
            <div className={styles.brand}>
              BLOOR CANNABIS DISPENSARY
            </div>
            <p className={styles.desc}>
              Your Local Cannabis Dispensary At 993 Bloor St W, Toronto. Visit
              Bloor Cannabis Dispensary For Premium Flower, Edibles, Vapes &amp; More.
              Open: Mon-Thu: 11:00 AM - 11:00 PM, Fri-Sat: 11:00 AM - 03:00 AM, Sun: 11:00 AM - 11:00 PM.
            </p>
            <div className={styles.buttons}>
            </div>
          </div>

          {/* Column 2 — Contact Info */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contact Info</h3>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Address:</span>
              <span>993 Bloor St W</span>
              <span>Toronto, ON M6H 1M1</span>
              <span>Canada</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Phone:</span>
              <span><a href="tel:+14372239353" style={{color: "inherit"}}>(437) 223-9353</a></span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Hours:</span>
              <span className={styles.highlight}>Mon-Thu: 11:00 AM - 11:00 PM, Fri-Sat: 11:00 AM - 03:00 AM, Sun: 11:00 AM - 11:00 PM</span>
            </div>
          </div>

          {/* Column 3 — Quick Links */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <nav className={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/exotic">Exotic Flower</Link>
              <Link href="/premium">Premium Flower</Link>
              <Link href="/aaa">AAA+ Flower</Link>
              <Link href="/aa">AA Flower</Link>
              <Link href="/budget">Budget Flower</Link>
              <Link href="/items/edibles">Edibles</Link>
              <Link href="/items/cigarettes">Cigarettes</Link>
              <Link href="/items/vapes">Vape Pens</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/delivery">Delivery (Coming Soon)</Link>
              <Link href="/games">Games Arcade</Link>
              <Link href="/info/york-weed-dispensary">Toronto Dispensary</Link>
              <Link href="/info/cheap-weed-york">Cheap Weed Toronto</Link>
              <Link href="/info/native-cigarettes-york">Native Cigarettes</Link>
              <Link href="/info/weed-store-near-mississauga">Weed Store Near Mississauga</Link>
              <Link href="/weed-dispensary-toronto/">Bloor Cannabis Dispensary Weed Dispensary in Toronto</Link>
              <Link href="/contact">Contact Us</Link>
              <a
                href="https://bloorcannabisdispensary.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Maps
              </a>
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} Bloor Cannabis Dispensary. Must be 19+ to
            enter. Please consume responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}
