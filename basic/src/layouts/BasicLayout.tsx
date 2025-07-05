import type { JSX } from 'react';
import { Outlet } from 'react-router-dom';

export default function BasicLayout(): JSX.Element {
  return <Outlet />;
}
