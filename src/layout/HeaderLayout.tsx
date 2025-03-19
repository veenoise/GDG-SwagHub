import { Link } from "react-router"

type TypeLink = {
    name: string,
    endpoint: string,
    icon: React.ElementType
    func ?: React.MouseEventHandler<HTMLAnchorElement>
}

const HeaderLayout = ({links} : {links:TypeLink[]}) => {
  return (
    <header>
        <nav className="bg-gray-900 text-white py-6 px-2 flex justify-between">
            <h1 className="text-2xl font-bold">GDG Swag Hub</h1>
            <div className="flex gap-4">
                {
                    links ? 
                    links.map((item, key) => {
                        return (
                            <div key={key} className="flex items-center">
                                <Link to={item.endpoint} className="hidden md:block" onClick={item.func || (() => {})}>{item.name}</Link>
                                <Link to={item.endpoint} className="md:hidden" onClick={item.func || (() => {})}>
                                    <item.icon size={20} />
                                </Link>
                                
                            </div>
                        )
                    }) :
                    <></>
                }
            </div>
        </nav>
        
    </header>
  )
}

export default HeaderLayout