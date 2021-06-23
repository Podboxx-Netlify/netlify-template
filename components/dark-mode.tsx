import React, {useEffect, useState} from "react";
import Image from 'next/image'

export default function DarkMode() {
    const [theme, setTheme] = useState<string>()
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
                setTheme('dark')
            } else {
                document.documentElement.classList.remove('dark')
                setTheme('light')
            }
        }
    }, [])

    const handleThemeChange = (theme: string) => {
        localStorage.theme = theme
        setTheme(theme)
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    return (
        <div className="text-right mr-10 pb-2">
            {theme === 'dark' ?
                <button onClick={() => handleThemeChange('light')}>
                    <Image src={"/light_mode_icon.png"} alt="light mode" height={30} width={30}/>
                </button>
                : <button onClick={() => handleThemeChange('dark')}>
                    <Image src={"/dark_mode_icon.png"} alt="dark mode" height={30} width={30}/>
                </button>
            }
        </div>
    )
}