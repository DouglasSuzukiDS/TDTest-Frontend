import { IconName } from "@/types/IconName"
import BackArrow from '@/icons/BackArrow.svg'
import Check from '@/icons/Check.svg'
import Circle from '@/icons/Circle.svg'
import CircleCheck from '@/icons/CircleCheck.svg'
import CircleUser from '@/icons/CircleUser.svg'
import Document from '@/icons/Document.svg'
import DupleChat from '@/icons/DupleChat.svg'
import EyeOn from '@/icons/EyeOn.svg'
import EyeOff from '@/icons/EyeOff.svg'
import Layout from '@/icons/Layout.svg'
import List from '@/icons/List.svg'
import Logout from '@/icons/Logout.svg'
import Mail from '@/icons/Mail.svg'
import NewFile from '@/icons/NewFile.svg'
import Notification from '@/icons/Notification.svg'
import Search from '@/icons/Search.svg'
import Square from '@/icons/Square.svg'
import SquareCheck from '@/icons/SquareCheck.svg'

type Props = {
   icon: IconName
   color: string
   width: number
   height: number
}

export const Icon = ({ icon, color, width, height }: Props) => {

   return(
      <div className='flex justify-center items-center' style={{ width, height }}>
         { icon === 'Check' && <Check color={ color } /> }

         { icon === 'BackArrow' && <BackArrow color={ color } /> }

         { icon === 'Circle' && <Circle color={ color } /> }

         { icon === 'CircleCheck' && <CircleCheck color={ color } /> }

         { icon === 'CircleUser' && <CircleUser color={ color } /> }

         { icon === 'Document' && <Document color={ color } /> }

         { icon === 'DupleChat' && <DupleChat color={ color } /> }

         { icon === 'EyeOn' && <EyeOn color={ color } /> }

         { icon === 'EyeOff' && <EyeOff color={ color } /> }

         { icon === 'Layout' && <Layout color={ color } /> }

         { icon === 'List' && <List color={ color } /> }

         { icon === 'Logout' && <Logout color={ color } /> }

         { icon === 'Mail' && <Mail color={ color } /> }

         { icon === 'NewFile' && <NewFile color={ color } /> }

         { icon === 'Notification' && <Notification color={ color } /> }

         { icon === 'Search' && <Search color={ color } /> }

         { icon === 'Square' && <Square color={ color } /> }

         { icon === 'SquareCheck' && <SquareCheck color={ color } /> }
      </div>
   )
}