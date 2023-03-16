import Availability from "@/components/Availability";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import Statistics from "@/components/Statistics";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="relative flex flex-col justify-between m-auto py-12 h-screen w-10/12 md:w-[60%] lg:w-[50%] xl:w-[32%] 2xl:w-[28%] transition-all">
      <section className="flex flex-col items-start gap-8">
        <Logo />
        <Statistics />
        <Header />
        <Availability show={true} message="Available for work" />
        <Work />
      </section>
      <Footer />
    </main>
  );
}
