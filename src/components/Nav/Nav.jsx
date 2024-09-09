import Link from "../Link/Link";

const Nav = () => {
    const routes = [
        { id: 1, path: '/home', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/profile/:id', name: 'Profile' }
      ];
      
    return (
        <nav >
            <ul className="md:flex">
                {
                    routes.map(route => <Link key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Nav;