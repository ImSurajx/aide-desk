import { useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import PageWrapper from "../components/ui/PageWrapper";
import OnboardingLayout from "../components/onboarding/OnboardingLayout";
import Step1 from "../components/onboarding/Step1";

// More steps will be added here as we build them
const steps = [Step1];

const Onboarding = () => {
  const location = useLocation();
  const isVerified = location.state?.verified === true;
  const [step, setStep] = useState(0);

  if (!isVerified) return <Navigate to="/signup" replace />;

  const StepComponent = steps[step];

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
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
