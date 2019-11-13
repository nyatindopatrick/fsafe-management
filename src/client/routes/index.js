import React from 'react';
import JumbotronWrapper from '../components/JumbotronWrapper';
import DashboardPage from '../components/dashboard/Dashboard';
import Saccotable from '../components/Sacco/saccotable'

// Private routes.
const AdminOnly = () => <JumbotronWrapper title="Admin Only" />;
const Users = () => <JumbotronWrapper title="Users" />;
const Dashboard = () => <DashboardPage />;
const Sacco = () => <Saccotable/>;
const Riders = () => <JumbotronWrapper title="Riders" />;
const Multistep = () => <JumbotronWrapper title="Multistep" />;
const Sms = () => <JumbotronWrapper title="Sms" />;
const Profile = () => <JumbotronWrapper title="Profile" />;
const Home = () => <DashboardPage />;

export {
	AdminOnly,
	Users,
	Dashboard,
	Sacco,
	Riders,
	Multistep,
	Sms,
	Profile,
	Home
};
