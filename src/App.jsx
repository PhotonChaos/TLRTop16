import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";

export default function App() {

  return (
    <>
        <Header />
        <div className="w-1/2 h-full mx-auto bg-amber-400">
            <h1 className="text-5xl p-5">Tiny Leaders Metagame Breakdown</h1>
            <div className="flex">
                <Card title="Slimefoot and Squee" footerText="Meta Share: 100%" />
                <Card title="Slimefoot and Squee" footerText="Meta Share: 100%" />
                <Card title="Slimefoot and Squee" footerText="Meta Share: 100%" />
                <Card title="Slimefoot and Squee" footerText="Meta Share: 100%" />
                <Card title="Slimefoot and Squee" footerText="Meta Share: 100%" />
                <Card title="Slimefoot and Squee" footerText="Meta Share: 100%" />
                <Card title="Slimefoot and Squee" footerText="Meta Share: 100%" />
            </div>
        </div>
    </>
  )
}


