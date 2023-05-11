import React from "react";

const TechStack = () => {
    const techIcons = [
        { name: "Python", src: "https://cdn.svgporn.com/logos/python.svg" },
        { name: "JS", src: "https://cdn.svgporn.com/logos/javascript.svg" },
        { name: "HTML", src: "https://cdn.svgporn.com/logos/html-5.svg" },
        { name: "CSS", src: "https://cdn.svgporn.com/logos/css-3.svg" },
        { name: "GQL", src: "https://cdn.svgporn.com/logos/graphql.svg" },
        { name: "MongoDB", src: "https://cdn.svgporn.com/logos/mongodb.svg" },
        { name: "Express", src: "https://cdn.svgporn.com/logos/express.svg" },
        { name: "React", src: "https://cdn.svgporn.com/logos/react.svg" },
        { name: "NodeJS", src: "https://cdn.svgporn.com/logos/nodejs-icon.svg" },
        { name: "Framer Motion", src: "https://cdn.svgporn.com/logos/framer.svg" },
        { name: "Three JS", src: "https://cdn.svgporn.com/logos/threejs.svg" },
        { name: "Tailwind", src: "https://cdn.svgporn.com/logos/tailwindcss-icon.svg" }
    ];

    return (
        <>
            <h2 className="text-left justify-self-start font-bold">Stuff I know</h2>
            <div id="stack-section" className=" p-6">

                <div className="flex gap-6 flex-wrap items-center">

                    {techIcons.map((icon) => (

                        <div id="stack" className="flex flex-col justify-center items-center">
                            <img className="w-12 h-20" key={icon.name} src={icon.src} alt={icon.name} />
                            <p className="text-center font-semibold">{icon.name}</p>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
};

export default TechStack;
