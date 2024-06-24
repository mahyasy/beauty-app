import Link from "next/link";


export default function Form({title,children,text,href,icon}){
   return(
    <>
   <form className="flex flex-col items-center justify-between  border border-brown p-10 rounded-t-full md:w-[450px] xs:w-[300px] md:p-7 mb-10 ">
   <h1 className="text-brown text-xl font-extrabold tracking-[.20em] mb-4  ">
        SHABGIS
      </h1>
                <h1 className="text-brown text-right flex items-center font-extrabold text-xl ">{title}{icon}</h1>
                <div className="my-5 flex flex-col justify-center items-center ">
                  <section className="m-10">
                   {children}
                   </section>

                   <button className="bg-pink text-white rounded-full px-10 py-2">{title}</button>
                  <Link className="text-brown" href={href} >{text}</Link>
                </div>
            </form>
    </>
   )
}