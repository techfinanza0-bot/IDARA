import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar.tsx';
import { HomeFeed } from './components/HomeFeed.tsx';
import { AboutLeadershipSection } from './components/AboutLeadershipSection.tsx';
import { ConferenceSection } from './components/ConferenceSection.tsx';
import { PublicationsSection } from './components/PublicationsSection.tsx';
import { OfficesSection } from './components/OfficesSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ScholarModal } from './components/ScholarModal.tsx';
import { BookDetailModal } from './components/BookDetailModal.tsx';
import { RegistrationModal } from './components/RegistrationModal.tsx';
import { QuickSearchModal } from './components/QuickSearchModal.tsx';
import { ScholarLeader, PublishedWork, ConferenceArchiveItem } from './data/organizationData.ts';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedScholar, setSelectedScholar] = useState<ScholarLeader | null>(null);
  const [selectedBook, setSelectedBook] = useState<PublishedWork | null>(null);
  const [registrationModalOpen, setRegistrationModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Clean page navigation router
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard shortcut listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-neutral-800 flex flex-col font-sans selection:bg-[#288a61] selection:text-white">
      {/* Top Corporate Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenRegister={() => setRegistrationModalOpen(true)}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Distinct Dedicated Pages */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <HomeFeed
                onNavigate={handleTabChange}
                onOpenRegister={() => setRegistrationModalOpen(true)}
                onSelectConference={() => handleTabChange('conferences')}
                onSelectBook={(book) => setSelectedBook(book)}
                onOpenSearch={() => setSearchModalOpen(true)}
              />
            </motion.div>
          )}

          {activeTab === 'conferences' && (
            <motion.div
              key="conferences"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <ConferenceSection
                onOpenRegister={() => setRegistrationModalOpen(true)}
              />
            </motion.div>
          )}

          {activeTab === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <AboutLeadershipSection
                onSelectScholar={(scholar) => setSelectedScholar(scholar)}
              />
            </motion.div>
          )}

          {activeTab === 'publications' && (
            <motion.div
              key="publications"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <PublicationsSection
                onSelectBook={(book) => setSelectedBook(book)}
                onOpenRegister={() => setRegistrationModalOpen(true)}
              />
            </motion.div>
          )}

          {(activeTab === 'contact' || activeTab === 'offices') && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <OfficesSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Large Premium Footer */}
      <Footer
        onNavigate={handleTabChange}
        onOpenRegister={() => setRegistrationModalOpen(true)}
      />

      {/* Modals */}
      <ScholarModal
        scholar={selectedScholar}
        onClose={() => setSelectedScholar(null)}
      />

      <BookDetailModal
        book={selectedBook}
        onClose={() => setSelectedBook(null)}
        onOpenRegister={() => setRegistrationModalOpen(true)}
      />

      <RegistrationModal
        isOpen={registrationModalOpen}
        onClose={() => setRegistrationModalOpen(false)}
      />

      <QuickSearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectBook={(book) => setSelectedBook(book)}
        onSelectConference={() => handleTabChange('conferences')}
        onNavigate={handleTabChange}
      />
    </div>
  );
}
