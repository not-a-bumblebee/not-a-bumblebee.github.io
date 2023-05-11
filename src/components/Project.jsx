import { motion } from "framer-motion"
import { useState } from "react"
const data = [{ name: 'Always Sunny Intro Maker', desc: "An Intro maker for the popular sitcom It's Always Sunny In Philadelphia", src: '#', stack: [] }, { name: "Movie Star Rater", desc: 'Search for celebrities, and see if they suck from the average score of their shows and movies!', src: '#', stack: [] }, {
    name: 'Array UI Sort', desc: 'An app made using react d-n-d. It allows you to enter an array, and then sort it with a drag and drop ui.', src: '#', stack: []
}]

export default function ProjectContainer() {
    const [showModal, setShowModal] = useState(false)
    const [currentModal, setCurrentModal] = useState(null)

    console.log(showModal, currentModal);

    const Project = (props) => {

        const { name, desc, src, stack } = props
        console.log(props);

        return (
            <div id="project-item-container" className="flex flex-col rounded-lg w-40  cursor-pointer bg-amber-300" onClick={() => { enableModal(props) }}>
                <img id="thumbnail" className=" border rounded-lg" src={src || '/vite.svg'} />
                <h3 className="text-xl font-semibold text-center">{name}</h3>
                <p className="p-3">{desc}</p>
                <div id="tech-stack"></div>
            </div>)
    }


    const Modal = ({ name, desc, src, stack,href }) => {
        console.log(name, desc, src);
        return (
            <div className="fixed top-0 left-0 bg-opacity-70  w-full h-full z-10 flex justify-center items-center">
                <div className="fixed top-0 left-0 bg-black bg-opacity-70  w-full h-full " onClick={disableModal}></div>
                <motion.div className="rounded-3xl w-2/3 h-2/3 bg-slate-100 relative shadow-2xl z-20 p-5 flex flex-col "
                    initial={{ y: 10, opacity: 0, scale: 0.5 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}>
                    <button className="absolute right-7 top-3 text-2xl hover:text-red-600" onClick={disableModal}>X</button>
                    <img id="thumbnail" className="w-2/5 self-center" src={src} alt={name} />
                    <a className="font-extrabold text-center text-blue-500 text-lg" href={href}>Link to website (The free hosting takes a couple more seconds to load)</a>
                    <p className="text-2xl">Project: {name}</p>
                    <p className="text-2xl">Stack: {stack}</p>


                </motion.div>
            </div>
        )
    }

    const enableModal = (props) => {

        setShowModal(true)
        setCurrentModal(props)
    }

    const disableModal = (e) => {
        console.log(e);

        setShowModal(false)
        setCurrentModal(null)
    }


    return (
        <>
            <h2 className="text-left font-bold" id="projects" >Projects</h2>
            <div className="flex justify-start items-start  flex-wrap gap-x-8 gap-y-3 mx-7">

                <Project name={"Always Sunny Intro Maker"} desc={"An Intro maker made with vanilla JS and FFMPEG."} href={"https://always-sunny-intro.onrender.com/"} src={"/sunny.png"} stack={"Made using vanilla JS, and a little Node JS to allow CORS(cross origin resource sharing) which is required to use FFMPEG."} />
                <Project name={"Array UI Sort"} desc={'A drag and drop UI oriented React app to sort arrays manually.'} href={"https://not-a-bumblebee.github.io/dnd-kit-demo/"} src={"/drag.png"} stack={"Made with React, DnD-Kit, and Tailwind CSS"} />
                <Project name={"Movie Star Rater"} desc={'Webscrapes the average critic and audience scores and shows the average for each. May take a minute to load each result due to the free plan.'} href={"https://movie-man-rater-api.onrender.com/"} src={"/movie.png"} stack={"Made with React, Chakra UI, Node JS, Express, and Playwright."} />
                <Project name={"Lacuna"} desc={"An astrology website that generates daily horoscopes using ChatGPT"} href={"https://lacuna-horoscopes.onrender.com/"}  src={"/lacuna.png"} stack={"Made with Astro, some React, OpenAI API, Node JS, Express, and Tailwind CSS"} />
                <Project name={"Pokemon Nuzlocke Tracker (WIP)"} desc={"For tracking your progress for the popular Pokemon challenge. (Work in progress)"} href={"https://nuzlocke-app.onrender.com/"} src={"/nuzzle.png"} stack={"Made with React, Node JS, Express, Mongo DB, Chakra UI, GraphQL, Tailwind CSS, and some outside Python to webscrape some data."} />
                {showModal && <Modal name={currentModal.name} desc={currentModal.desc} src={currentModal.src} stack={currentModal.stack} href={currentModal.href} />}

            </div>
        </>
    )
}

