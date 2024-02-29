import { Icon } from "./Icon"

type Props = {
   type: 'radio' | 'checkbox'
   color: string
   width: number
   height: number
   check: boolean
   onClick?: () => void

   name?: string
   id?: string
   text?: string
   textColor?: string
}

export const CheckField = ({ type, name, id, color, text, textColor, width, height, check, onClick }: Props) => {
   return(
      <div className="flex justify-center flex-col">
         { type === 'radio' &&
            <div 
               className="flex gap-2"
               onClick={ onClick } >
               <div style={{ width, height }}>
                  <Icon
                     icon={ check ? 'CircleCheck' : 'Circle' }
                     color={ color }
                     height={ 24 }
                     width={ 24 }
                  />
               </div>

               { text &&  <p style={{ color: textColor, fontSize: '14px' }}>{ text }</p> }
               
            </div> 
         }

         { type === 'checkbox' && 
            <div 
               className="flex gap-2"
               onClick={ onClick }>
               <div onClick={ onClick } style={{ width, height }}>
                  <Icon
                     icon={ check ? 'SquareCheck' : 'Square' }
                     color={ color }
                     height={ 24 }
                     width={ 24 }
                  />
               </div>

               { text &&  <p>{ text }</p> }
            </div> 

         }
      </div>
   )
}