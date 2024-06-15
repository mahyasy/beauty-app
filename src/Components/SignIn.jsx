import Form from "./Form";
import { FcKey } from "react-icons/fc";

export default function SignIn() {
  return (

      <Form title="ورود" text="ایجادحساب کاربری" href="/register" icon={<FcKey/>}>
        <div className="my-5">
          <input className="rounded-full p-2" placeholder="نام کاربری" />
        </div>
        <div className="mt-3 mb-0">
          <input className="rounded-full p-2" placeholder="کلمه عبور" />
        </div>
      </Form>
  
  );
}
