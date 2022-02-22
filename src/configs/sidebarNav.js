import { Icon } from '@iconify/react';
const sidebarNav =[
    {
        link:'/',
        section: 'home',
        icon:<Icon icon="bx:bx-home-alt" />,
        text:'Home',
    },
    {
        link:'/orders',
        section: 'orders',
        icon:<Icon icon="bx:bx-receipt" />,
        text:'Orders',
    },
    {
        link:'/products',
        section: 'products',
        icon:<Icon icon="bx:bx-cube" />,
        text:'Products',
    },
    {
        link:'/customers',
        section: 'customers',
        icon:<Icon icon="bx:bx-user" />,
        text:'Customer',
    },
    {
        link:'/stats',
        section: 'stats',
        icon:<Icon icon="bx:bx-line-chart" />,
        text:'Stats',
    },
    {
        link:'/settings',
        section: 'stats',
        icon:<Icon icon="ant-design:setting-outlined" />,
        text:'Settings',
    },
    {
        link:'/settings',
        section: 'stats',
        icon:<Icon icon="bx:bx-menu-alt-right" />
        ,
        text:'Settings',
    },
]
export default sidebarNav