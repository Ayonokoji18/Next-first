import Navbar from "./components/Navbar.js";
import "./styles/global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "10px", background: "#eee" }}>
          <h1>🌍 Globar Navbar</h1>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer style={{ padding: "10px", background: "#eee" }}>
          <p> 📫 Global footer</p>
        </footer>
      </body>
    </html>
  );
}
