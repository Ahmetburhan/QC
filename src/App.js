import "./styles.css";
import QuickConnectBanner from "./components/QuickConnect/QuickConnectBanner/QuickConnectBanner"

export default function App() {
  return (
    <div className="App">
      <h1>Quick Connect Work Flow</h1>
      <hr />
      <div className="rdPos">
        <QuickConnectBanner />
      </div>
    </div>
    
  );
}
