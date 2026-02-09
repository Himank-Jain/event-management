export default function Footer() {
    return (
        <footer className="bg-[var(--footer-blue)] text-white py-8 mt-auto">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                <div>
                    <h3 className="font-bold mb-4 text-lg">Event Manager</h3>
                    <p className="opacity-90">
                        Streamlining campus events and activities.
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold mb-3">Quick Links</h4>
                    <ul className="space-y-2 opacity-90">
                        <li><a href="/events" className="hover:underline">All Events</a></li>
                        <li><a href="/dashboard" className="hover:underline">My Dashboard</a></li>
                        <li><a href="/about" className="hover:underline">About Us</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-3">Contact</h4>
                    <p className="opacity-90">admin@college.edu</p>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-8 pt-4 border-t border-white/20 text-center opacity-75 text-xs">
                <p>&copy; {new Date().getFullYear()} Event Management Portal. All rights reserved.</p>
            </div>
        </footer>
    );
}
