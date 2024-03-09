import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import usePicturePageStyle from './PicturePage.style';
import SideBar from '../../components/CollapsableCard/SideBar/SideBar';
import TopBar from '../../components/CollapsableCard/TopBar/TopBar';
import { Fab } from '@mui/material';

function PicturePage() {
    const [sideBarOpen, setSidebarOpen] = useState(true);
    const { classes } = usePicturePageStyle({ sideBarOpen });

    const toggleSideBar = () => {
        setSidebarOpen((sideBarOpen) => !sideBarOpen);
    };

    return (
        <div className={classes.container}>
            <TopBar className={classes.topbar} />
            <div className={classes.section}>
                <div className={classes.sidebar}>
                    <SideBar />
                    <div className={`hoverableCollapseBtn ${classes.hoverableCollapseBtn}`} />
                    <Fab
                        aria-label="collapse"
                        className={`${classes.sideBarCollapseBtn} sideBarCollapseBtn`}
                        size="small"
                        onClick={toggleSideBar}
                    ></Fab>
                </div>
                <div className={classes.content}>
                    {/* This outlet is a new way to handle sub routers within main router. 
                    Check router to see what components are user here */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default PicturePage;
