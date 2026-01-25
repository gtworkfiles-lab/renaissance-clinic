'use client';

import { NextStudio } from 'next-sanity/studio'; // Виправлено шлях тут
import config from '../../../../sanity.config';

export default function AdminPage() {
  return <NextStudio config={config} />;
}