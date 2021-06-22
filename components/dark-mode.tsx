import React from "react";

interface Data {
    data?: string

}

const DarkMode: React.FC<{ data: Data }> = ({}) => {

    return (
        <>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
                  rel="stylesheet"/>
            <span className="material-icons-outlined md-36">
dark_mode
</span>
            {/*<span className="material-icons md-36">face</span>*/}
        </>
    )
}

export default DarkMode