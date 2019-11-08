import React from 'react';
import JumbotronWrapper from '../components/JumbotronWrapper';
import Multisteper from '../components/Multistep';
import DashboardPage from '../components/dashboard/Dashboard'

// Private routes.
const AdminOnly = () => <JumbotronWrapper title="Admin Only" />;
const Users = () => <JumbotronWrapper title="Users" />;
const Dashboard = () => <DashboardPage />;
const Sacco = () => <JumbotronWrapper title="Sacco" />;
const Riders = () => <JumbotronWrapper title="Riders" />;
const Multistep = () => <Multisteper />;
const Sms = () => <JumbotronWrapper title="Sms" />;
const Profile = () => <JumbotronWrapper title="Profile" />;
const Home = () => <JumbotronWrapper title="Home" />;

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
