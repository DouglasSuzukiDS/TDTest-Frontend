type Props = {
   label: string
   color?: string
   background?: string
   onClick: () => void
}

export const Button = ({ label, color = 'text-white', background='bg-beige', onClick }: Props) => {
   return(
      <button
         className={ `${ !background ? '' : background } ${ !color ? '' : color } text-font-22 font-bold py-2 px-12 rounded cursor-pointer transition-all duration-700 hover:opacity-90 tablet:text-font-30` }
         onClick={ onClick }
         style={{
            backgroundColor: `${ background && background }`, 
            color: `${ color && color  }`
         }}>
         { label }
      </button>
   )
}