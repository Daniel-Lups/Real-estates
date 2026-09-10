import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Properties } from './pages/Properties';
import { PropertyDetail } from './pages/PropertyDetail';
import { About } from './pages/About';
import { Agents } from './pages/Agents';
import { Contact } from './pages/Contact';
import { ScheduleInspection } from './pages/ScheduleInspection';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="properties" element={<Properties />} />
          <Route path="property/:id" element={<PropertyDetail />} />
          <Route path="about" element={<About />} />
          <Route path="agents" element={<Agents />} />
          <Route path="contact" element={<Contact />} />
          <Route path="schedule-inspection" element={<ScheduleInspection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
