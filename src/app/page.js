import Accordion from "@/components/Accordion";
import BootstrapClient from "./ultils/BootstrapClient";

const Home = () => {
  return (
    <main>
      <div className="text-center mt-4 col-md-10 mx-auto">
        <h1 className="text-danger">Hello Bootstrap</h1>
        <Accordion />
        <BootstrapClient />
      </div>
    </main>
  );
};

export default Home;
