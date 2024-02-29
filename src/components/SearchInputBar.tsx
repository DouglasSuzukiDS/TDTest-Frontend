import { IconProps } from "@/types/IconProps"
import { Icon } from "./Icon"

type Props = {
   iconInput: IconProps
   placeholder: string
   value: string
   onChange: (newValue: string) => void
}

export const SearchInputBar = ({ iconInput, placeholder, value, onChange }: Props) => {
   return(
      <div className="flex justify-center items-center flex-1 gap-4 pr-3 shadow-sm tablet:justify-end tablet:gap-8 tablet:pr-6">
         <div className="bg-white max-w-[420px] w-full rounded-[23px] gap-2 p-2 flex justify-center items-center "
            style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, .25)' }}>
            <Icon
               icon={ iconInput.icon }
               color={ iconInput.color }
               width={ iconInput.width }
               height={ iconInput.height }
            />
   
            <input 
               type="search" 
               placeholder={ placeholder }
               value={ value }
               onChange={ newValue => onChange(newValue.target.value) }
               className="bg-transparent text-darkLayout text-font-18 placeholder:text-font-14 w-full outline-none"
               
            />
         </div>
         
         <Icon
            icon="Notification"
            color="#333"
            width={ 24 }
            height={ 24 }
         />
      </div>
   )
}