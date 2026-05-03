import { useLocation } from "react-router-dom";
import PageWrapper from "../../../App/Components/ui/PageWrapper";
import VerifyEmailCard from "../components/VerifyEmailCard";
import { motion } from "framer-motion";

const VerifyEmail = () => {
  const location = useLocation();
  const email = location.state?.email || "user@example.com";

  return (
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center p-[16px] bg-surface-container-lowest">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <VerifyEmailCard email={email} />
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default VerifyEmail;
