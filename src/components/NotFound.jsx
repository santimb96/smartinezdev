const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center h-[100dvh] gap-5 text-center text-pretty p-5'>
            <h1 className='text-[2.5rem]'>404 | Página no encontrada</h1>
            <h2 className='text-[1.5rem]'>Lo siento pero la página que estás buscando no existe o no está disponible.</h2>
            <a href='/' className='buttonLink mt-5'>Volver al inicio</a>
        </div>
    )
}

export default NotFound