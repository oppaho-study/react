import { Outlet, NavLink } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div>
      {/* Header */}
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/basic">Basic</NavLink>
        </nav>
      </header>
      {/* Main, Content */}
      <main id="content">
        <Outlet />
      </main>
      {/* Footer */}
      <footer />
    </div>
  );
}
