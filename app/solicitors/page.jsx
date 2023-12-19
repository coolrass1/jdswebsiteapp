import React from "react";
import Banner from "../components/Banner";
import Solicitor from "../components/solicitors/Solicitor";
import Solicitor2 from "../components/solicitors/Solicitor2";
import Solicitor3 from "../components/solicitors/Solicitor3";
import Solicitor4 from "../components/solicitors/Solicitor4";
import Solicitor5 from "../components/solicitors/Solicitor5";
import Solicitor6 from "../components/solicitors/Solicitor6";

const Solicitors = () => {
  return (
    <section>
      <Banner />
      <div className="flex flex-col gap-7 py-6">
        <Solicitor />
        <Solicitor2 />
        <Solicitor3 />
        <Solicitor4 />
        <Solicitor5 />
        <Solicitor6 />
      </div>
    </section>
  );
};

export default Solicitors;
