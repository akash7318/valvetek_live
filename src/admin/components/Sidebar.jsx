import React from 'react';
import { useLocation } from 'react-router';
import './Sidebar.css';
import '../Admin.css';
import PageNavi from './PageNavi';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import InventoryIcon from '@mui/icons-material/Inventory';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import GradingIcon from '@mui/icons-material/Grading';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import AddBusinessIcon from '@mui/icons-material/AddBusiness';

function Sidebar() {
    const location = useLocation();
    const pages = [
        {
            name: 'Dashboard',
            icon: <DashboardIcon />,
            link: '/admin/dashboard',
            hasChildren: false,
            addClass: location.pathname === "/admin/dashboard" ? "active" : null
        },
        {
            name: 'Site Information',
            icon: <SettingsApplicationsIcon />,
            link: '/admin/site-info',
            hasChildren: false,
            addClass: location.pathname === "/admin/site-info" ? "active" : null
        },
        {
            name: 'Banner',
            icon: <ViewCarouselIcon />,
            link: '/admin/banner',
            hasChildren: false,
            addClass: location.pathname === "/admin/banner" ? "active" : null
        },
        {
            name: 'Pages',
            icon: <AutoStoriesIcon />,
            link: '/admin/pages',
            hasChildren: false,
            addClass: location.pathname === "/admin/pages" ? "active" : null
        },
        {
            name: 'Product',
            icon: <InventoryIcon />,
            link: '/admin/product',
            hasChildren: false,
            addClass: location.pathname === "/admin/product" ? "active" : null
        },
        {
            name: 'Promotional Category',
            icon: <GradingIcon />,
            link: '/admin/promotionalCategory',
            hasChildren: false,
            addClass: location.pathname === "/admin/promotionalCategory" ? "active" : null
        },
        {
            name: 'Keyword In City',
            icon: <ApartmentIcon />,
            link: '/admin/keywordInCity',
            hasChildren: false,
            addClass: location.pathname === "/admin/keywordInCity" ? "active" : null
        },
        {
            name: 'Our Presence In City',
            icon: <AddLocationAltIcon />,
            link: '/admin/ourPresenceInCity',
            hasChildren: false,
            addClass: location.pathname === "/admin/ourPresenceInCity" ? "active" : null
        },
        {
            name: 'Location',
            icon: <LocationOnIcon />,
            link: '/admin/location',
            hasChildren: false,
            addClass: location.pathname === "/admin/location" ? "active" : null
        },
        // {
        //     name: 'Product',
        //     icon: <InventoryIcon />,
        //     link: '#',
        //     hasChild: true,
        //     addClass: location.pathname.includes('product') ? "active" : null,
        //     childs: [
        //         {
        //             name: 'All Product',
        //             link: '/admin/all-product',
        //             addChildClass: location.pathname === "/admin/all-product" ? "active" : null
        //         },
        //         {
        //             name: 'Product Data',
        //             link: '/admin/product-data',
        //             addChildClass: location.pathname === "/admin/product-data" ? "active" : null
        //         }
        //     ]
        // }
    ];

    return (
        <div className='sidebar'>
            {
                pages.map((value, index) =>
                    <PageNavi
                        key={index}
                        pageName={value.name}
                        pageIcon={value.icon}
                        link={value.link}
                        hasChild={value.hasChild}
                        addClass={value.addClass}
                        childrens={value.childs ? value.childs : null}
                    />
                )
            }

        </div>
    )
}

export default Sidebar