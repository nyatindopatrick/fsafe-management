import React from 'react';
import SaccoTable from '../components/sacco/SaccoTable';
import DashboardPage from '../components/dashboard/Dashboard'

// Private routes.
const AdminOnly = () => <JumbotronWrapper title="Admin Only" />;
const Users = () => <JumbotronWrapper title="Users" />;
const Dashboard = () => <DashboardPage />;
const Sacco = () => <SaccoTable />
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
