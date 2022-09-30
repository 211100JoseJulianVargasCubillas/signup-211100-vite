import React from "react";
import WordingSection from "./components/WordingSection";
import FormSection from "./components/FormSection";

const App = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-image bg-red-default px-6 py-20 md:py-0 flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-11">
      <WordingSection />
      <FormSection />
    </div>
  );
};

export default App;
