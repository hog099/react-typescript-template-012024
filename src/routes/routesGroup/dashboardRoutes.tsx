import PATHS from '../paths';
import { DashBoard } from '@/screens/DashBoard/DashBoard';

export const dashboardRoutes = [
    {
        path: PATHS?.dashboard?.index,
        component: ()=><DashBoard />,
    },
];
