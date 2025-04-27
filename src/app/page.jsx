import Hero from "@/components/layout/Hero";
import QrEditor from "@/components/QRCode/QREditor";
import Feature from "@/components/layout/Feature";
import Pricing from "@/components/layout/Pricing";
import {Link, Rocket, Palette, CalendarSync} from "lucide-react"
import FAQ from "@/components/layout/FAQ";
function Home() {
  return (
    <>
      
        <Hero />
        <section className="section-padding flex flex-col items-stretch justify-center md:flex-row flex-wrap gap-4 md:gap-10 md:px-5 px-10 sm:px-10">
          <Feature title={"Smart Redirects by Time of Day"} description={"Set multiple destination URLs and control when each one activates. Whether it's morning offers or late-night campaigns — your short link adapts to your strategy, automatically."}>
          <div className="w-9 h-9 max-w-3xl flex items-center justify-center rounded-full bg-[rgba(137,82,224,0.2)]"><Link color="#7434db" /></div>
          </Feature>
          <Feature title={"Time-Based Targeting"} description={"Turn one link into a dynamic experience. Schedule different landing pages based on the time of day to boost engagement and conversion across regions and time zones."}>
          <div className="w-9 h-9 max-w-3xl flex items-center justify-center rounded-full bg-[rgba(137,82,224,0.2)]"><CalendarSync color="#7434db" /></div>
          </Feature>
          <Feature title={"Custom QR Code Designer"} description={"Create beautiful, branded QR codes with our easy-to-use editor. Adjust colors, embed logos, add gradients, and stand out — no design skills required."}>
          <div className="w-9 h-9 max-w-3xl flex items-center justify-center rounded-full bg-[rgba(137,82,224,0.2)]"><Palette color="#7434db" /></div>
          </Feature>
          <Feature title={"Powerful QR + Short URL Integration"} description={"Combine the reach of short URLs with the flexibility of custom QR codes. Track clicks, change destinations, and keep full control over your link campaigns."}>
          <div className="w-9 h-9 max-w-3xl flex items-center justify-center rounded-full bg-[rgba(137,82,224,0.2)]"><Rocket color="#7434db" /></div>
          </Feature>
        </section>
        <section id="editor" className="section-padding">
            <QrEditor></QrEditor>
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="faqs" className="section-padding">
          <FAQ />
        </section>

    </>
  );
}
export default Home;