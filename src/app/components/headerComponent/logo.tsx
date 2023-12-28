'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

//Logo in public resources
const poodleLogo = '/poodle-dog-love-national-culture-paris-svgrepo-com.svg';
const toodleText = '/toodle.png';

export default function Logo() {

    const router = useRouter()

    const handleClickLogo = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const homePath = '/';

        router.push(homePath);
    }

    return (
        <a className={'flex flex-nowrap flex-row place-content-center items-center align-middle justify-items-center '} onClick={handleClickLogo} href='#'>
            <img src={poodleLogo} alt="Poodle Logo for Toodle!" className={' w-20 '}  draggable={false}/>
            <img src={toodleText} alt={"\"Toodle\""} className={' w-52 pt-3'}  draggable={false}/>
        </a>
    )
}
