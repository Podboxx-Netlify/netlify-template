import React, {useState} from "react";

interface Data {
    apple_url?: string
    fb_url?: string
    google_url?: string
    header_url?: string
    linkedin_url?: string
    spotify_url?: string
    twitter_url?: string
    youtube_url?: string
    Itunes?: string
    Facebook?: string
    Google?: string
    Spotify?: string
    Twitter?: string
    Youtube?: string
    Linkedin?: string
}
const Socials:React.FC<{data: Data}> = ({data}) => {

    const [socials, setSocials] = useState<Data>({
        Itunes: data.apple_url,
        Facebook: data.fb_url,
        Google: data.google_url,
        Linkedin: data.linkedin_url,
        Spotify: data.spotify_url,
        Twitter: data.twitter_url,
        Youtube: data.youtube_url
    })
    // console.log(socials)
    //<a
    //                         href="https://github.com/oddstronaut/next-starter-tailwind"
    //                         target="_blank"
    //                         rel="noopener noreferrer"
    //                         className="font-bold hover:text-red-500"
    //                     >
    //                         Facebook
    //                     </a>
    const urls = () => {
        let socials = []
        // socials <<
        // return
    }

    return (
        <>
            {Object.keys(socials).map((value,key) =>
                <a  key={key}
                    href={socials[value]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold hover:text-red-500"
                >
                    {value}
                </a>
            )}
        </>
    )
}

export default Socials