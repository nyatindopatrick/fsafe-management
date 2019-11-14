import React from 'react';
import JumbotronWrapper from '../components/JumbotronWrapper';
import DashboardPage from '../components/dashboard/Dashboard';
import Messages from '../components/messsages/messages'

// Private routes.
const AdminOnly = () => <JumbotronWrapper title="Admin Only" />;
const Users = () => <JumbotronWrapper title="Users" />;
const Dashboard = () => <DashboardPage />;
const Sacco = () => <JumbotronWrapper title="Sacco" />;
const Riders = () => <JumbotronWrapper title="Riders" />;
const Multistep = () => <JumbotronWrapper title="Multistep" />;
const Sms = () => <Messages />;
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
