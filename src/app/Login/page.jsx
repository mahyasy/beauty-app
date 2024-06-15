import Image from "next/image";
import SignIn from '../../Components/SignIn'



export default function register(){
    return(
        <section className="mt-10 flex justify-center md:justify-around items-stretch ">
        <SignIn/>    
      
            <aside className="hidden md:flex ">
            <section className="flex flex-row-reverse justify-around md:flex-col md:justify-center ">
        <figure className="relative mb-4 left-2">
          <Image
            className="rounded-t-full drop-shadow-5xl h-auto  md:w-[150px] "
            src="/seven.jpg"
            width="105"
            priority={false}
            height="0"
            alt="shabgis"
          />
        </figure>
        <aside className="md:relative left-2 top-0 ">
          <h1 className="text-brown text-3xl font-cur relative left-4 font-extrabold tracking-[.20em] text-center mb-2 md:text-[30px]  ">
            SHABGIS
          </h1>
          <h1 className="text-pink  font-bold mb-2">سالن زیبایی در لواسان</h1>
          <p className="text-brown">زیبایی را از ما بخواهید</p>
        </aside>
      </section>
            </aside>
          
          
            </section>
    )
}