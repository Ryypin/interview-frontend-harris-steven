import { DashboardSection } from '@features/dashboard';
import { PicturesSection } from '@features/pictures';
import { HomePage, LoginPage, PicturePage } from '@pages';
import { Guard } from '@utils';
import { Navigate, Route, Routes } from 'react-router-dom';

/**
 * Main Router
 */
function Router() {
    return (
        <Routes>
            <Route path="/" element={<Guard target={<HomePage />} guards={['authenticated']} />}>
                <Route index element={<DashboardSection />} />
            </Route>
            <Route path="/picture" element={<Guard target={<PicturePage />} guards={['authenticated']} />}>
                <Route index element={<PicturesSection />} />
            </Route>
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
}

export default Router;
