import WhyAdoptPets from "@/Component/Adopt Pets section";
import Gettec from "@/Component/Gettec";
import Hero from "@/Component/Hero";
import HeroPat from "@/Component/HeroPat";
import PetCareTips from "@/Component/Pet Care Tips Section";
import SuccessStories from "@/Component/Success Stories";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <HeroPat></HeroPat>
      <PetCareTips></PetCareTips>
      <SuccessStories></SuccessStories>
      <WhyAdoptPets></WhyAdoptPets>
      <Gettec></Gettec>
      
    </div>
  );
}
