'use client';

import { NextStudio } from 'sanity/next-studio';
import config from '../../../../sanity.config';

export default function AdminPage() {
  return <NextStudio config={config} />;
}