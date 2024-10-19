import React from 'react';
import { Col } from 'react-bootstrap';
import '../CssFiles/sideBar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckIcon from '@mui/icons-material/Check';
import NotificationsIcon from '@mui/icons-material/Notifications';
import VerifiedIcon from '@mui/icons-material/Verified';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import FaceIcon from '@mui/icons-material/Face';
import PaidIcon from '@mui/icons-material/Paid';

function DashboardSidebar() {
  return (
    <Col xs={12} md={2} className="sidebar">
      <ul className="dasboarditems">
        <li className="SideListItem"><a href='' className="PagesLink active">
          <div className="Icon-Container">
            <DashboardIcon />
            <p>Dashboard</p>
          </div>
        </a>
        </li>
        <li className="SideListItem"><a href='' className="PagesLink">
          <div className="Icon-Container">
            <TrendingUpIcon />
            <p>Market Watch</p>
          </div>
        </a></li>
        <li className="SideListItem"><a href='' className="PagesLink">
          <div className="Icon-Container">
            <NotificationsIcon />
            <p>Notifications</p>
          </div>
        </a></li>
        <li className="SideListItem"><a href='' className="PagesLink">
          <div className="Icon-Container">
            <VerifiedIcon />
            <p>Active Positions</p>
          </div>
        </a></li>
        <li className="SideListItem"><a href='' className="PagesLink">
          <div className="Icon-Container">
            <VerifiedIcon />
            <p>Closed Positions</p>
          </div>
        </a></li>
        <li className="SideListItem"><a href='' className="PagesLink">
          <div className="Icon-Container">
            <LabelImportantIcon />
            <p>Trades</p>
          </div>
        </a></li>
        <li className="SideListItem"><a href='' className="PagesLink">
          <div className="Icon-Container">
            <PendingActionsIcon />
            <p>Pending Orders</p>
          </div>
        </a></li>
        <li className="SideListItem"><a href='' className="PagesLink">
          <div className="Icon-Container">
            <FaceIcon />
            <p>Trading Clients</p>
          </div>
        </a></li>
        <li className="SideListItem"><a href='' className="PagesLink">
          <div className="Icon-Container">
            <PaidIcon />
            <p>Trader Funds</p>
          </div>
        </a></li>
      </ul>
    </Col>
  );
}

export default DashboardSidebar;
