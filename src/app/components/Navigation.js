// app/components/Navigation.js
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Dodaj obsługę kliknięcia poza menu
  const handleClickOutside = (e) => {
    if (isOpen && !e.target.closest('.nav-menu') && !e.target.closest('.navButton')) {
      setIsOpen(false);
    }
  };

  // Dodaj efekt przy montowaniu/odmontowywaniu
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    
    // Cleanup przy odmontowywaniu
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <header>
        <h1>Agroturystyka Łysogóry</h1>
        <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><Link href="/" onClick={() => setIsOpen(false)}>Strona główna</Link></li>
            <li><Link href="/o_nas" onClick={() => setIsOpen(false)}>O nas</Link></li>
            <li><Link href="/noclegi" onClick={() => setIsOpen(false)}>Noclegi</Link></li>
            <li><Link href="/atrakcje" onClick={() => setIsOpen(false)}>Atrakcje</Link></li>
            <li><Link href="/galeria" onClick={() => setIsOpen(false)}>Galeria</Link></li>
          </ul>
        </nav>
        <button 
          className={`navButton ${isOpen ? 'open' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>
      </header>
    </>
  );
}