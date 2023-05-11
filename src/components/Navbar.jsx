const Navbar = () => {

    const scroll = (position) => {
        window.scrollTo(position)
    }

    return (
        <header className="bg-red-400 flex justify-center items-center p-6 gap-x-36 mb-12 w-full fixed top-0 z-10 shadow-md px-64">
            <div id="title logo container">
                <h1 className="text-3xl min-w-20">My Portfolio Page</h1>
            </div>
            <nav id="navbar-container" className="">
                <ul className='flex items-center gap-9 text-lg font-medium'>
                    <li><a onClick={() => scroll({ top: 0 })} >C̵̳͔̭̹̥̗̗̄̈́ủ̴̢̟͔̩̠̰͋̈́̕b̴̛̲͖͍͋́̉̌e̵͙̅̄̔̅</a></li>
                    <li><a onClick={() => scroll({ top: 1300 })}>Tech Stack</a></li>
                    <li><a onClick={() => scroll({ top: 2000 })}>Projects</a></li>
                    <li><a onClick={() => scroll({ top: document.documentElement.scrollHeight })}>Contact</a></li>
                </ul>

                {/* <p></p>
                <p>Tech stack</p>
                <HashLink to={'/#projects'}>Projects</HashLink>
                <a href={'#projects'}>Projects</a> */}

            </nav>

        </header>
    )
}

export default Navbar