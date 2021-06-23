import React, {useEffect, useState} from "react";

interface Data {
    data?: string

}

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
        <>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
                  rel="stylesheet"/>
            {theme === 'dark' ?
                <button className="material-icons-outlined md-36" onClick={() => handleThemeChange('light')}>
                    <a className='material-icons-outlined md-36 text-white'>light_mode</a>

                </button> : <button onClick={() => handleThemeChange('dark')}>
                    <a className='material-icons-outlined text-black'>dark_mode</a>
                </button>
            }
            {/*<span className="material-icons md-36">face</span>*/}
        </>
    )
}