import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import QrEditor from "@/components/QRCode/QREditor";

function Home() {
  return (
    <div>
      
        <Hero />
        <section>
            <QrEditor></QrEditor>
        </section>
    </div>
  );
}
export default Home;