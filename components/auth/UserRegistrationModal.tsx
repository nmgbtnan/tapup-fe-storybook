import { useModalState } from '@/hooks/modalState';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function UserRegistration() {
  const { closeRegisterUserModal } = useModalState();
  return (
    <div className="relative">
      <button
        className="absolute top-0 right-0 mt-4 mr-4"
        onClick={closeRegisterUserModal}
      >
        X
      </button>
      <div className="flex flex-col justify-center p-8 md:p-16 z-[3000] rounded-xl mt-24 bg-white gap-4">
        <h1 className="font-roboto-condensed font-medium text-4xl mb-4">
          Register with Tap Up
        </h1>

        <div>
          <label>Username</label>
          <Input />
        </div>

        <div>
          <label>Email</label> {/* Changed label to "Email" for consistency */}
          <Input />
        </div>

        <div>
          <label>Password</label>
          <Input />
        </div>

        <div>
          <label>Confirm Password</label>
          <Input />
          <label>
            <input type="checkbox" />I have read and acknowledge Tap Up&apos;s{' '}
            <span className="text-custom-green">Privacy Policy</span>
          </label>
        </div>

        <Button className="bg-custom-green text-white hover:bg-custom-green/90 mt-4">
          Register
        </Button>
      </div>
    </div>
  );
}
