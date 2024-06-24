import Form from './FormLayout'
import { FcCheckmark } from "react-icons/fc";

export default function SignUp(){
    return(
        <Form title="ثبت نام"
        text='ورود به حساب کاربری'
        href='/Login'
        icon={<FcCheckmark/>}
        >
            <div className='my-5'>
                <input className='rounded-full p-2' placeholder='نام کاربری'/>
            </div>
            <div  className='my-5 '>
            <input className='rounded-full p-2' placeholder='کلمه عبور' />
            </div>
            <div>
            <input className='rounded-full p-2' placeholder=' شماره موبایل'/>
            </div>

        </Form>
    )

}