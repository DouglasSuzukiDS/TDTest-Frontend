import '../../app/globals.css'
import Head from "next/head"
import Image from "next/image"
import Hero from '../../../public/image/Hero.png'
import { InputField } from "@/components/InputField"
import { CheckField } from "@/components/CheckField"
import { KeyboardEvent, useState } from "react"
import { Icon } from '@/components/Icon'
import Link from 'next/link'
import { checkValue as check } from '@/libs/checkValue'
import { api } from '@/libs/api'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/router'

const Register = () => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('')

   const [showPassword, setShowPassword] = useState(false)
   const [showConfirmPassword, setShowConfirmPassword] = useState(false)

   const [readTerms, setReadTerms] = useState(false)
   const [saveEmailPassword, setsaveEmailPassword] = useState(false)

   const colorLayout = '#CC6138'

   const router = useRouter()

   const checkEmail = (email: string) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      if (regex.test(email)) {
         setEmail(email)
      }

      // ^ => Representa o início da string.
      // [^\s@]+ => Corresponde a um ou mais caracteres que não sejam espaços em branco ou @.
      // @ => Corresponde ao caractere @.
      // [^\s@]+ => Corresponde a um ou mais caracteres que não sejam espaços em branco ou @.
      // \. => Corresponde ao caractere ponto (.), que é necessário em um endereço de e-mail válido.
      // [^\s@]+ =>  Corresponde a um ou mais caracteres que não sejam espaços em branco ou @.
      // $ =>  Representa o final da string.
   }

   const handleCreateAccount = async() => {
      if (
         name !== '' &&
         check.checkEmail(email) &&
         password !== '' &&
         confirmPassword !== '' &&
         password === confirmPassword) {
         const successs = api.createAccount(name, email, password)

         await successs && alert('Usuário criado com sucesso')

         setName('')
         setEmail('')
         setPassword('')
         setConfirmPassword('')

         router.push('/login')
      } else {
         alert('Por favor, preencha os campos corretamente.')
      }
   }

   const handleKeyPress = (event: KeyboardEvent) => {
      if ((event.key).toLocaleLowerCase() === 'enter') {
         handleCreateAccount()
      }
   }

   return (
      <>
         <Head>
            <title>Cadastro</title>
         </Head>

         <main className="max-w-[1440px] h-screen flex justify-center">
            <div className="w-full h-full flex mobile:flex-col tablet:flex-row">
               {/* Image Area  */}
               <div className="w-1/2 h-1/2 mobile:w-full tablet:w-1/2 tablet:h-screen">
                  <Image
                     src={Hero}
                     alt="Image Hero"
                     className="h-full"
                  />
               </div>

               {/* Register Area */}
               <div className="w-full pb-5 h-full flex flex-col justify-center items-center tablet:w-1/2">
                  <div className='flex items-center w-full px-8'>
                     <Link href='/login' className='flex items-center gap-1'>
                        <Icon
                           icon='BackArrow'
                           color='#333'
                           width={24}
                           height={24}
                        />

                        <p
                           className='text-darkLayout'
                           style={{ fontSize: '18px' }}>
                           Voltar
                        </p>
                     </Link>
                  </div>

                  <h1
                     className="text-beige font-bold sm:text-7xl md:text-7xl mobile:text-font-42 ">
                     Cadastrar
                  </h1>

                  {/* Form Area  */}
                  <div className="w-full px-4 tablet:px-10">
                     {/* Name */}
                     <div>
                        <InputField
                           label="Nome"
                           placeholder="Insira seu nome"
                           checkValue
                           color={colorLayout}
                           value={name}
                           onChange={setName}
                           icon={{
                              icon: 'CircleUser',
                              color: '#333',
                              width: 26,
                              height: 26
                           }}
                           onKeyPress={(event: KeyboardEvent<HTMLInputElement>) => handleKeyPress(event)}
                        />
                     </div>

                     {/* Email */}
                     <div className="mt-5">
                        <InputField
                           label="Email"
                           placeholder="Insira seu email"
                           color={colorLayout}
                           // checkEmail={ email }
                           checkEmail
                           value={email}
                           onChange={setEmail}
                           icon={{
                              icon: 'Mail',
                              color: '#333',
                              width: 26,
                              height: 26
                           }}
                           onKeyPress={(event: KeyboardEvent<HTMLInputElement>) => handleKeyPress(event)}
                        />
                     </div>

                     {/* Password */}
                     <div className="mt-5">
                        <InputField
                           label='Senha'
                           placeholder="Insira sua senha"
                           type="password"
                           color={colorLayout}
                           value={password}
                           onChange={setPassword}
                           showPassword={showPassword}
                           onClick={() => setShowPassword(!showPassword)}
                           onKeyPress={(event: KeyboardEvent<HTMLInputElement>) => handleKeyPress(event)}
                        />
                     </div>

                     {/* Confirm Password */}
                     <div className="mt-5">
                        <InputField
                           label='Confirma a senha'
                           placeholder="Repita sua senha criada anteriormente"
                           type="password"
                           color={colorLayout}
                           value={confirmPassword}
                           onChange={setConfirmPassword}
                           showPassword={showConfirmPassword}
                           onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                           onKeyPress={(event: KeyboardEvent<HTMLInputElement>) => handleKeyPress(event)}
                        />
                     </div>

                     {/* Read Terms */}
                     <div className="mt-5 flex gap-2 cursor-pointer">
                        <CheckField
                           type="radio"
                           color={colorLayout}
                           check={readTerms}
                           onClick={() => setReadTerms(!readTerms)}
                           width={24}
                           height={24}
                        />

                        <p style={{ fontSize: '14px' }}>
                           Li e concordo com os <span className='text-beige'>Termos e Condições</span>
                        </p>
                     </div>

                     {/* Save Email & Password */}
                     <div className="mt-5 cursor-pointer">
                        <CheckField
                           type="radio"
                           color={colorLayout}
                           check={saveEmailPassword}
                           onClick={() => setsaveEmailPassword(!saveEmailPassword)}
                           width={24}
                           height={24}
                           text="Lembrar email e senha"
                           textColor={colorLayout}
                        />
                     </div>
                  </div>

                  {/* Button Area */}
                  <div className="flex flex-col mt-5">
                     <button
                        className="bg-beige text-white font-bold py-2 px-12 rounded cursor-pointer transition-all duration-700 hover:opacity-90"
                        style={{ fontSize: '30px' }}
                        onClick={handleCreateAccount}>
                        Cadastrar
                     </button>
                  </div>
               </div>

            </div>
         </main>
      </>
   )
}

export default Register