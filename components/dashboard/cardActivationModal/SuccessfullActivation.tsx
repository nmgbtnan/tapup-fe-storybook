import { Button } from "@/components/ui/button";
import { useModalState } from "@/hooks/modalState";
import { useRouter } from "next/navigation";

export default function SuccessfullActivation() {
  const { closeActivationCardModal } = useModalState();
  const router = useRouter();

  const handleButtonClick = () => {
    closeActivationCardModal();
    router.push("/dashboard/profile/builder");
  };

  return (
    <div className="flex flex-col justify-center rounded-lg bg-white px-8 py-32 shadow-xl">
      <h2 className="text-2xl font-bold mb-2 text-center">
        Account Activation Complete!
      </h2>
      <p className="text-center mb-4">Hi there! Welcome to Our App</p>

      <Button
        className="bg-custom-green font-semibold text-white hover:bg-custom-green/90"
        onClick={handleButtonClick}>
        Take me to my account
      </Button>
    </div>
  );
}
