import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PageWrapper from "../../../App/Components/ui/PageWrapper";
import OnboardingLayout from "../components/OnboardingLayout";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import { nextStep, prevStep } from "../state/onboarding.slice";

const steps = [Step1, Step2, Step3, Step4];

const Onboarding = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const step = useSelector((s) => s.onboarding.step);

  const StepComponent = steps[step];

  const next = () => {
    if (step === steps.length - 1) {
      navigate("/onboarding/success");
    } else {
      dispatch(nextStep());
    }
  };

  const back = () => dispatch(prevStep());

  return (
    <PageWrapper>
      <OnboardingLayout step={step}>
        <StepComponent onNext={next} onBack={back} />
      </OnboardingLayout>
    </PageWrapper>
  );
};

export default Onboarding;
