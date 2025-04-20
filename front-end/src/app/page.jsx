import Image from "next/image";
import Description from "@/components/home/description";
import Carthome from "@/components/home/cart";

export default function Home() {
  return (
    <main className={'px-6'}>
      <section className="container mx-auto">
          <div className={'flex flex-col items-center justify-center'}>
              <Description/>
              <Carthome/>
          </div>
      </section>
    </main>
  );
}
