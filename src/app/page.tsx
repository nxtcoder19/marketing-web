import { FAQ } from "./molecules/faq";
import { FeatureOne } from "./orgs/feature-one";
import { HeroFour } from "./orgs/hero-four";
import { HeroOne } from "./orgs/hero-one";
import { HeroThree } from "./orgs/hero-three";
import { HeroTwo } from "./orgs/hero-two";
import { TestimonialSection } from "./orgs/testemonial-one";

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
        <TestimonialSection />
        <FAQ />
      </main>
    </div>
  );
}
