// src/routes/AppRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import VoteList from '../pages/vote-list/VoteList';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/reports" element={<VoteList />} />
    </Routes>
  );
}
