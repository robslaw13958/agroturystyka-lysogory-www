// app/components/Navigation.js
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {

  return (
    <>
      <header>
        <h1>Agroturystyka Łysogóry</h1>
        <nav>
          <ul>
            <li><Link href="/">Strona główna</Link></li>
            <li><Link href="/o_nas">O nas</Link></li>
            <li><Link href="/noclegi">Noclegi</Link></li>
            <li><Link href="/atrakcje">Atrakcje</Link></li>
            <li><Link href="/galeria">Galeria</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}