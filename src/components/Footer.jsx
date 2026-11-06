const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='sheet'>
      <div className='revision'>
        <span><strong>Última revisión</strong> · noviembre {year}</span>
        <span><strong>Construido con</strong> · Preact, Vite y Tailwind CSS</span>
        <span><strong>Santiago Martínez</strong> · Mallorca, España</span>
      </div>
    </footer>
  )
}

export default Footer
