import { useModalState } from '@/hooks/modalState';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function VerifyCodeModal() {
  const { closeVerifyCodeModal } = useModalState();
  return (
    <div className="flex justify-center">
      <div className="flex flex-col p-8  lg:p-32 md:w-1/2 lg:w-1/2 rounded-xl bg-white">
        <h1 className="font-roboto-condensed font-medium text-m md:text-4xl mb-4">
          Enter the 6-digit code
        </h1>

        <div>
          <p className="mb-6">
            Check {'<email>'} for a verification code. <br />
            <span
              className="text-custom-green cursor-pointer"
              onClick={closeVerifyCodeModal}
            >
              Change
            </span>
          </p>
          <div>
            <Input />
            <p className="text-custom-green mb-8 cursor-pointer">Resend code</p>

            <Button className="bg-custom-green text-white hover:bg-custom-green/90 w-full ">
              Submit
            </Button>
          </div>

          <p>
            If you don&apos;t see a code in your inbox, check your spam folder. If
            it&apos;s not there, the email address may not be confirmed, or it may
            not match an existing Tap Up account.
          </p>
        </div>
      </div>
    </div>
  );
}
