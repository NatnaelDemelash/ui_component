const Container = ({title, description, children}: 
    {title:string, description:string, children:React.ReactNode}) => {
  return (
   <>
    <header>
        <h1 className="font-bold text-2xl sm:text-3xl text-gray-800">{title}</h1>
        <p className="mt-2 text-lg text-gray-800">{description}</p>
    </header>
    <div className="space-y-10 md:space-y-16">
        {children}
    </div>
   </>
   
  )
}

export default Container