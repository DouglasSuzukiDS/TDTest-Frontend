import { IconProps } from "@/types/IconProps"
import { Icon } from "./Icon"
import { checkValue as check } from '@/libs/checkValue'
import { KeyboardEvent } from "react"

type Props = {
   label: string
   color: string
   type?: string
   showPassword?: boolean
   placeholder: string
   checkValue?: boolean
   checkEmail?: boolean
   value: string
   onChange: (newValue: string) => void
   onClick?: () => void
   icon?: IconProps
   onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void
}

export const InputField = ({ label, color, type, showPassword, onClick, placeholder, checkValue, checkEmail, value, onChange, icon, onKeyPress }: Props) => {

   const checkEmailOk = (email: string) => {
      let ok = false
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      if(regex.test(email)) {
         return true
      } else {
         return false
      }

      // ^ => Representa o início da string.
      // [^\s@]+ => Corresponde a um ou mais caracteres que não sejam espaços em branco ou @.
      // @ => Corresponde ao caractere @.
      // [^\s@]+ => Corresponde a um ou mais caracteres que não sejam espaços em branco ou @.
      // \. => Corresponde ao caractere ponto (.), que é necessário em um endereço de e-mail válido.
      // [^\s@]+ =>  Corresponde a um ou mais caracteres que não sejam espaços em branco ou @.
      // $ =>  Representa o final da string.
   }

   const checkEmailValue = () => {
      let okEmail = false

      if(checkEmail) {
         // checkEmail(value)
      }
   }

   return(
      <div 
         className="flex flex-col"
         style={{ borderBottom: `1px solid ${ color }` }}>
         <label className="font-bold" style={{ color, fontSize: '22px' }}>{ label }</label>

         <div className="flex">
            <input
               className="flex-1 bg-transparent outline-none text-darkLayout text-[18px] placeholder:text-base placeholder:text-darkLayout"
               type={ type === 'password' && !showPassword ? 'password' : 'text' }
               placeholder={ placeholder }
               value={ value }
               onChange={ newValue => onChange(newValue.target.value) }
               onKeyPress={ onKeyPress }
            />
            
            {/* Garante que tenha um icone caso nao tenha o checkValue e nem checkEmail */}
            { icon && type !== 'password' && !checkValue && !checkEmail &&
               <Icon 
                  icon={ icon.icon }
                  color={ icon.color  }
                  width={ icon.width }
                  height={ icon.height }
               />
            }
            
            {/* Garante que tenha um icone mas ira verificar o valor */}
            { icon && value.length < 3 && type !== 'password' && checkValue &&
               <Icon 
                  icon={ icon.icon }
                  color={ icon.color  }
                  width={ icon.width }
                  height={ icon.height }
               />
            }

            {/* Troca de icone caso o value tenha mais de 3 caracteres */}
            { value.length >= 3 && type !== 'password' && checkValue &&
               <Icon 
                  icon='Check'
                  color='#00A02D'
                  width={ 24 }
                  height={ 24 }
               />
            }

            {/* Garante que tenha um icone mas ira verificar o email */}
            {  icon && checkEmail && !check.checkEmail(value) && type !== 'password' && 
               <Icon 
                  icon={ icon.icon }
                  color={ icon.color  }
                  width={ icon.width }
                  height={ icon.height }
               />
            }

            {/* Troca de icone caso o email seja realmente um email válido */}
            { checkEmail && check.checkEmail(value) && type !== 'password' && 
               <Icon 
                  icon='Check'
                  color='#00A02D'
                  width={ 24 }
                  height={ 24 }
               />
            }

            

            { type === 'password' &&
               <span onClick={ onClick } className="cursor-pointer">
                  <Icon 
                     icon={ showPassword ? 'EyeOff' : 'EyeOn' }
                     color='#333'
                     width={ 26 }
                     height={ 26 }
                  />
               </span> 
            }


            {/* { !checkValue && icon &&
               <Icon 
                  icon={ icon.icon }
                  color={ icon.color  }
                  width={ icon.width }
                  height={ icon.height }
               />
            } */}
            
            
         </div>
      </div>
   )
}