'use client'

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { api } from "@/libs/api";
import Texugo from '../../../public/image/Texugo.png'
import HorizontalBarChart from '../../../public/image/HorizontalBarChart.png'
import HorizontalBarChart02 from '../../../public/image/HorizontalBarChart02.png'
import LineChart from '../../../public/image/LineChart.png'
import MultiSeriesPie from '../../../public/image/MultiSeriesPie.png'
import Image from "next/image";
import { SearchInputBar } from "@/components/SearchInputBar";
import { IconName } from "@/types/IconName";
import { Icon } from "@/components/Icon";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";


export default function Home() {
  type localStorageData = { 
    name: string
    email: string
    password: string
    logged: boolean
  }

  const [localStorageData, setLocalStogageData] = useState<localStorageData>()

  const getLocalStorageData = async() => {
    const lsData = localStorage.getItem('user')

    if(lsData && ( (lsData !== undefined) || (lsData !== null) )) {
      await setLocalStogageData(JSON.parse(lsData))
    }
  }

  // Responsive Controll
  const [open, setOpen] = useState(false)

  useEffect(() => {
    !api.checkLogged() && redirect('/login')

    getLocalStorageData()
  }, [])

  // Search Bar state
  const [searchInput, setSearchInput] = useState('')

  // List Item
  const items: IconName[] = ['NewFile', 'Document', 'DupleChat']

  // Logout

  const handleLogout = async() => {
    api.logout()
  }

  return (
    <>
      <Head>
        <title>Dashboard | { localStorageData?.name }</title>
      </Head>

      <main className="max-w-[1440px] h-full flex justify-center">
        <div className="w-full h-full flex">
          
          {/* Left Side */}
          <div className={`${ open ? 'w-[350px] justify-between ' : 'w-[50px]' } flex flex-col transition-all duration-700`}>

            {/* Nav Area */}
            <nav className="">

              {/* User Info from localStorage */}
              <div className={ `${ open ? 'h-[200px]' : 'h-auto' } bg-lightLayout pt-1 ` }>
                {/* Toggle Icon */}
                <div className={ `${ open ? 'w-full pr-12 items-end justify-end' : 'h-[70px] justify-center items-center' } flex flex-1 cursor-pointer tablet:pt-10` }
                  onClick={ () => setOpen(!open) }>
                  <Icon 
                    icon="List"
                    color="#CC6138"
                    width={ 24 }
                    height={ 24 }
                  />
                </div>

                {/* User Data */}
                <div className={`${ open ? 'block' : 'hidden' } text-darkLayout text-center mt-1`}>
                  <p className="font-bold text-font-22">
                    { localStorageData?.name }
                  </p>

                  <p className="text-font-14">
                    { localStorageData?.email }
                  </p>
                </div>
              </div>

              {/* Nav Items */}
              <div className="flex flex-col justify-between">

                {/* Image & Nav Items */}
                <div className={ `${ open ? 'mt-[-59px]' : '' } flex justify-center items-center flex-col ` }>
                  {/* Image */}
                  <div className={` ${ open ? 'block' : 'hidden' } w-[118px] h-[118px] border-[12px] border-white rounded-full flex justify-center items-center p-2`}>
                    <Image 
                      src={ Texugo } 
                      alt="Foto de usuário"
                      width={ 100 }
                      height={ 100 }
                    />
                  </div>

                  {/* Navigation Items */}
                  <ul className={ ` ${ open ? 'mt-12' : 'mt-20' } w-full` }>
                    {/* padding: 16px 44px; */}
                    <li title="Dashboard" className={ `${ open ? 'li' : 'li-hover flex justify-center items-center p-4' } transition-all duration-700` }>
                      <span>
                        <Icon 
                          icon={ "Layout" }
                          color='inherit'
                          width={ 24 }
                          height={ 24 }
                        />
                      </span>

                      <span className={ `${ open ? 'block': 'hidden' }` }>Dashboard</span>
                    </li>

                    {/* Line Division */}
                    <div className={ `${ open ? 'mx-11' : 'mx-0' } border border-[#D1D1D1] ` }></div>

                    { items.map((item, index) => (
                      <li key={ index } title='LoremIpsum' className={ `${ open ? 'li' : 'li-hover flex justify-center items-center p-4' } transition-all duration-700` }>
                        <span>
                          <Icon 
                            icon={ item }
                            color='inherit'
                            width={ 24 }
                            height={ 24 }
                          />
                        </span>

                        <span className={ `${ open ? 'block': 'hidden' }` }>LoremIpsum</span>
                      </li>
                    )) }

                    {/* Line Division */}
                    <div className={ `${ open ? 'mx-11' : 'mx-0' } border border-[#D1D1D1]` }></div>

                    <li title="LoremIpsum" className={ `${ open ? 'li' : 'li-hover flex justify-center items-center p-4' } transition-all duration-700` }>
                      <span>
                        <Icon 
                          icon={ "CircleUser" }
                          color='inherit'
                          width={ 24 }
                          height={ 24 }
                        />
                      </span>

                      <span className={ `${ open ? 'block': 'hidden' }` }>LoremIpsum</span>
                    </li>
                  </ul>
                </div>

              </div>

            </nav>

            {/* Loggout Button */}
            <div className={ `${ open ? 'pb-12 pr-12 justify-end items-end h-auto mt-[-24px]' : 'justify-center items-center mt-20' } flex w-full`}>
                  
                  <Link href={ '/login' } title="Sair" 
                    className="cursor-pointer transition-all duration-700 hover:opacity-75"
                    onClick={ handleLogout }>
                    <Icon 
                      icon={ "Logout" }
                      color='#333'
                      width={ 24 }
                      height={ 24 }
                    />
                  </Link>
            </div>
          </div>

          {/* Right Side - Dashboard Area */}
          <div className="bg-lightLayout w-full h-full flex-1 p-8 tablet:px-16 tablet:pt-12">
            <div className="">
              <SearchInputBar 
                iconInput={{
                  icon: 'Search',
                  color: "#333",
                  width: 24,
                  height: 24 
                }}
                placeholder="Pesquisar"
                value={ searchInput }
                onChange={ setSearchInput }
              />
            </div>

            <h1 className="text-font-42 text-darkLayout font-bold">
              Dashboard
            </h1>

            {/* Imagem area */}
            <div className="flex-1 h-full p-0 tablet:pb-0">
              {/* Little Images */}
              <div className="w-full h-1/4 flex flex-col justify-between items-center tablet:flex-row">
                <Image 
                  src={ LineChart } 
                  alt="LineChat Image"
                  className="w-full tablet:w-1/3 h-full"
                  objectFit="cover"
                />

                <Image 
                  src={ MultiSeriesPie } 
                  alt="MultiSeriesPie Image"
                  className="w-full tablet:w-1/3 h-full"
                  objectFit="cover"
                  // layout="fill"
                />

                <Image 
                  src={ HorizontalBarChart } 
                  alt="Horizontal Bar Chart"
                  className="w-full tablet:w-1/3 h-full"
                />
              </div>

              <div className="flex-1">
                <Image 
                  src={ HorizontalBarChart02 } 
                  alt="Horizontal Bar Chart 02"
                  className="object-cover"
                />
              </div>

            </div>

          </div>
        </div>
      </main>
    </>
  )
}
