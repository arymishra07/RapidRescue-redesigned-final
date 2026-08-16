import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useApp } from "./state/AppContext";
import Login from "./pages/Login";
import CitizenHome from "./pages/citizen/CitizenHome";
import ReportEmergency from "./pages/citizen/ReportEmergency";
import LocationStep from "./pages/citizen/LocationStep";
import PriorityStep from "./pages/citizen/PriorityStep";
import PriorityResult from "./pages/citizen/PriorityResult";
import Tracking from "./pages/citizen/Tracking";
import Helper from "./pages/citizen/Helper";
import HelperAlert from "./pages/citizen/HelperAlert";
import DriverDashboard from "./pages/driver/DriverDashboard";
import DispatcherDashboard from "./pages/dispatcher/DispatcherDashboard";
import Analytics from "./pages/dispatcher/Analytics";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import AppShell from "./components/layout/AppShell";

function Protected({ children, roles }) {
  const { currentUser } = useApp();
  if (!currentUser) return <Navigate to="/login" replace />;
  if (roles && !roles.includes(currentUser.role)) return <Navigate to={currentUser.role === "dispatcher" ? "/dispatcher" : currentUser.role === "driver" ? "/driver" : "/citizen"} replace />;
  return children;
}

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route element={<Protected><AppShell /></Protected>}>
        <Route path="/citizen" element={<Protected roles={["citizen"]}><CitizenHome /></Protected>} />
        <Route path="/citizen/report" element={<Protected roles={["citizen"]}><ReportEmergency /></Protected>} />
        <Route path="/citizen/location" element={<Protected roles={["citizen"]}><LocationStep /></Protected>} />
        <Route path="/citizen/priority" element={<Protected roles={["citizen"]}><PriorityStep /></Protected>} />
        <Route path="/citizen/priority-result" element={<Protected roles={["citizen"]}><PriorityResult /></Protected>} />
        <Route path="/citizen/emergency/:id" element={<Protected roles={["citizen"]}><Tracking /></Protected>} />
        <Route path="/citizen/helper" element={<Protected roles={["citizen"]}><Helper /></Protected>} />
        <Route path="/citizen/helper/alert" element={<Protected roles={["citizen"]}><HelperAlert /></Protected>} />
        <Route path="/driver" element={<Protected roles={["driver"]}><DriverDashboard /></Protected>} />
        <Route path="/dispatcher" element={<Protected roles={["dispatcher"]}><DispatcherDashboard /></Protected>} />
        <Route path="/dispatcher/analytics" element={<Protected roles={["dispatcher"]}><Analytics /></Protected>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
