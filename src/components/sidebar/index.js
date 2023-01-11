import { 
    UilHome,
    UilBox,
    UilFavorite,
    UilClipboardAlt,
    UilChart,
    UilSetting
} from '@iconscout/react-unicons'


export const SidebarData = [
    {
        icon: UilFavorite,
        heading: "Rate your services"
    },
    {
        icon: UilClipboardAlt,
        heading: "Shopping history"
    },
    {
        icon: UilBox,
        heading: "Services"
    },
    {
        icon: UilSetting ,
        heading: "Settings"
    }
]

//const admin = JSON.parse(window.localStorage.getItem("admin"));
// let SidebarData = []

// admin === true ? SidebarData = [
//     {
//         icon: UilHome,
//         heading: "Dashboard"
//     },
//     {
//         icon: UilFavorite,
//         heading: "Rate your services"
//     },
//     {
//         icon: UilClipboardAlt,
//         heading: "Shopping history"
//     },
//     {
//         icon: UilBox,
//         heading: "Services"
//     },
//     {
//         icon: UilSetting ,
//         heading: "Settings"
//     }
// ] :
//     SidebarData = [
//     {
//         icon: UilFavorite,
//         heading: "Rate your services"
//     },
//     {
//         icon: UilClipboardAlt,
//         heading: "Shopping history"
//     },
//     {
//         icon: UilBox,
//         heading: "Services"
//     },
//     {
//         icon: UilSetting ,
//         heading: "Settings"
//     }
// ]

// export default SidebarData