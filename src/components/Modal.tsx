import { ReactNode } from "react"

type Props = {
   children: ReactNode
}

export const Modal = ({ children }: Props) => {
   return(
      <main className="w-full h-screen z-10 bg-black opacity-95 flex justify-center items-center absolute">
         <div className="bg-white max-w-[520px] m-5 p-5 border rounded-[40px] border-gray tablet:p-12 tablet:m-0">
            { children }
         </div>
      </main>
   )
}