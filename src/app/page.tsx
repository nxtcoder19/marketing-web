import { FAQ } from "./molecules/faq";
import { FeatureOne } from "./orgs/feature-one";
import { HeroFour } from "./orgs/hero-four";
import { HeroOne } from "./orgs/hero-one";
import { HeroThree } from "./orgs/hero-three";
import { HeroTwo } from "./orgs/hero-two";
import { TesteMonitorOne } from "./orgs/testemonial-one";

export default function Home() {
  return (
    <div >
      <main className="container mx-auto py-4">
        <HeroOne />
        <HeroTwo />
        <HeroThree />
        <HeroFour />

        {/* Feature Ui */}
        <FeatureOne />
        <TesteMonitorOne />
        <FAQ />
      </main>
    </div>
  );
}
