'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

interface DashboardStats {
  totalSubmissions: number;
  pendingBookings: number;
  totalDevices: number;
  activeServices: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [contactRes, bookingRes, devicesRes, servicesRes] = await Promise.all([
          fetch('/api/contact'),
          fetch('/api/bookings'),
          fetch('/api/devices'),
          fetch('/api/repair-services'),
        ]);

        const contact = await contactRes.json();
        const booking = await bookingRes.json();
        const devices = await devicesRes.json();
        const services = await servicesRes.json();

        setStats({
          totalSubmissions: contact.length,
          pendingBookings: booking.filter((b: any) => b.status === 'pending').length,
          totalDevices: devices.length,
          activeServices: services.length,
        });
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Welcome to the Teqpadi admin panel</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading ? (
          <>
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-32" />
            ))}
          </>
        ) : stats ? (
          <>
            <Card className="p-6 bg-card border-border">
              <p className="text-sm text-muted-foreground mb-2">Contact Submissions</p>
              <p className="text-3xl font-bold text-foreground">{stats.totalSubmissions}</p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <p className="text-sm text-muted-foreground mb-2">Pending Bookings</p>
              <p className="text-3xl font-bold text-accent">{stats.pendingBookings}</p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <p className="text-sm text-muted-foreground mb-2">Total Devices</p>
              <p className="text-3xl font-bold text-foreground">{stats.totalDevices}</p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <p className="text-sm text-muted-foreground mb-2">Services Available</p>
              <p className="text-3xl font-bold text-primary">{stats.activeServices}</p>
            </Card>
          </>
        ) : null}
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6 bg-card border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Visit the respective sections to manage submissions, bookings, and content.</p>
          </div>
        </Card>

        <Card className="p-6 bg-card border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
          <div className="space-y-2">
            <a href="/admin/submissions" className="block text-primary hover:underline">View Contact Submissions</a>
            <a href="/admin/bookings" className="block text-primary hover:underline">Manage Bookings</a>
            <a href="/admin/devices" className="block text-primary hover:underline">Manage Devices</a>
            <a href="/admin/testimonials" className="block text-primary hover:underline">Manage Testimonials</a>
          </div>
        </Card>
      </div>
    </div>
  );
}
