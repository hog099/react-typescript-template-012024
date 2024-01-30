/* eslint-disable @typescript-eslint/no-explicit-any */
import { Routes, Route } from 'react-router-dom';
import PATHS from './paths';
import { AuthGuardRoutes } from '@/guards/AuthGuardRoutes/AuthGuardRoutes';
import { SignIn } from '@/screens/SignIn/SignIn';
import { dashboardRoutes } from './routesGroup/dashboardRoutes';

const routesPrivateMap = [...dashboardRoutes];

export const RoutesApp = () => {
    return (
        <Routes>
            <Route path={PATHS?.index} element={<SignIn />} />

            {routesPrivateMap.map((route: any, index: number) => {
                const Component = route?.component;
                return (
                    <Route
                        key={index}
                        path={route.path}
                        //  element={route.component}
                        element={
                            <AuthGuardRoutes>
                                <Component />
                            </AuthGuardRoutes>
                        }
                    />
                );
            })}
        </Routes>
    );
};
