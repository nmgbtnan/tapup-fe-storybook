import { useModalState } from '@/hooks/modalState';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ForgotPasswordModal() {
  const { closeForgotPasswordModal, openVerifyCodeModal } = useModalState();

  return (
    <div className="flex flex-col justify-center p-8 md:p-16 z-[3000] rounded-xl  mt-24  bg-white">
      <h1 className="font-roboto-condensed font-medium text-4xl mb-4">
        Forgot Password
      </h1>
      <div>
        <label>Email</label>
        <Input />
        <div className="grid grid-cols-2 justify-between mt-4">
          <Button
            className="bg-custom-green text-white hover:bg-custom-green/90"
            onClick={openVerifyCodeModal}
          >
            Next
          </Button>
          <Button
            className="bg-white text-black hover:bg-white  ml-6"
            onClick={closeForgotPasswordModal}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}
