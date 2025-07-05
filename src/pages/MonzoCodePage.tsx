import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MonzoCode from "./MonzoCode";

const MonzoCodePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <MonzoCode />
      </main>
      <Footer />
    </div>
  );
};

export default MonzoCodePage;