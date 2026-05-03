import { useState } from "react";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import PageWrapper from "../components/ui/PageWrapper";
import OnboardingLayout from "../components/onboarding/OnboardingLayout";
import Step1 from "../components/onboarding/Step1";
import Step2 from "../components/onboarding/Step2";
import Step3 from "../components/onboarding/Step3";
import Step4 from "../components/onboarding/Step4";

const steps = [Step1, Step2, Step3, Step4];

const Onboarding = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isVerified = location.state?.verified === true;
  const [step, setStep] = useState(0);

  if (!isVerified) return <Navigate to="/signup" replace />;

  const StepComponent = steps[step];

  const next = () => {
    if (step === steps.length - 1) {
      navigate("/onboarding/success", { state: { verified: true } });
    } else {
      setStep((s) => s + 1);
    }
  };

  const back = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <PageWrapper>
      <OnboardingLayout step={step}>
        <StepComponent onNext={next} onBack={back} />
      </OnboardingLayout>
    </PageWrapper>
  );
};

export default Onboarding;
