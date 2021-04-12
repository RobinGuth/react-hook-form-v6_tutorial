import "./styles.css";
import StepperComponent from "./Stepper";

export default function App() {
  const steps = [
    ["First page", "first page"],
    ["Second page", "second page"],
    ["Third page", "third page"]
  ];
  return (
    <div className="App">
      <h1>react-hook-form v6 tutorial</h1>
      <StepperComponent steps={steps} />
    </div>
  );
}
