import { FaDashcube, FaFileAlt, FaUserAlt, FaUserAstronaut, FaUserFriends } from 'react-icons/fa'
import { BiMoney } from 'react-icons/bi'
interface SidebarInterface {
    title: string;
    icon: React.ReactNode
    link: string;
}
const sidebarData: SidebarInterface[] = [
    {
        title: 'Dashboard',
        icon: <FaDashcube />,
        link: '/dashboard'
    },
    {
        title: 'Employee',
        icon: <FaUserAlt />,
        link: '/employee'
    },
    {
        title: 'Customer',
        icon: <FaUserFriends />,
        link: '/employee   '
    },
    {
        title: 'Attendence',
        icon: <FaFileAlt />,
        link: ''
    },
    {
        title: 'Shipment',
        icon: <FaUserAlt />,
        link: ''
    },
    {
        title: 'User',
        icon: <FaUserAlt />,
        link: ''
    }
]
export default sidebarData;