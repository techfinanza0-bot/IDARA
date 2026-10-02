import React from 'react';
import { Home, ChevronRight, BookOpen, Calendar, Users, Phone, Sparkles } from 'lucide-react';

interface BreadcrumbProps {
  activeTab: string;
  onNavigate: (tabId: string) => void;
  selectedScholarName?: string | null;
  selectedBookTitle?: string | null;
  onClearSelectedItem?: () => void;
}

interface CrumbItem {
  id: string;
  label: string;
  isClickable: boolean;
  onClick?: () => void;
  icon?: React.ElementType;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  activeTab,
  onNavigate,
  selectedScholarName,
  selectedBookTitle,
  onClearSelectedItem,
}) => {
  // Build hierarchy based on active tab and any active sub-selection
  const crumbs: CrumbItem[] = [
    {
      id: 'home',
      label: 'Home',
      isClickable: activeTab !== 'home' || !!selectedScholarName || !!selectedBookTitle,
      onClick: () => {
        if (onClearSelectedItem) onClearSelectedItem();
        onNavigate('home');
      },
      icon: Home,
    },
  ];

  if (activeTab === 'home') {
    crumbs.push({
      id: 'home-overview',
      label: 'Central Academy & Institutional Archives',
      isClickable: false,
    });
  } else if (activeTab === 'conferences') {
    crumbs.push({
      id: 'conferences-main',
      label: 'Conferences & Events',
      isClickable: false,
      icon: Calendar,
    });
    crumbs.push({
      id: 'conferences-archive',
      label: '45 Annual Assemblies Archive (1981–2025)',
      isClickable: false,
    });
  } else if (activeTab === 'about') {
    crumbs.push({
      id: 'about-main',
      label: 'About & Governance',
      isClickable: !!selectedScholarName,
      onClick: () => {
        if (onClearSelectedItem) onClearSelectedItem();
        onNavigate('about');
      },
      icon: Users,
    });

    if (selectedScholarName) {
      crumbs.push({
        id: 'about-scholar',
        label: selectedScholarName,
        isClickable: false,
      });
    } else {
      crumbs.push({
        id: 'about-sub',
        label: '40-Year Scholarly Retrospective & Executive Council',
        isClickable: false,
      });
    }
  } else if (activeTab === 'publications') {
    crumbs.push({
      id: 'publications-main',
      label: 'Research & Publications',
      isClickable: !!selectedBookTitle,
      onClick: () => {
        if (onClearSelectedItem) onClearSelectedItem();
        onNavigate('publications');
      },
      icon: BookOpen,
    });

    if (selectedBookTitle) {
      crumbs.push({
        id: 'publications-book',
        label: selectedBookTitle,
        isClickable: false,
      });
    } else {
      crumbs.push({
        id: 'publications-sub',
        label: "Mahnama Ma'arif-e-Raza & 164+ Books Catalog",
        isClickable: false,
      });
    }
  } else if (activeTab === 'contact' || activeTab === 'offices') {
    crumbs.push({
      id: 'contact-main',
      label: 'Central Secretariat & Regional Bureaus',
      isClickable: false,
      icon: Phone,
    });
    crumbs.push({
      id: 'contact-sub',
      label: 'Karachi HQ & Islamabad Federal Bureau',
      isClickable: false,
    });
  }

  return (
    <nav 
      aria-label="Breadcrumb navigation trail" 
      className="bg-[#f2eee7] border-b border-stone-300 text-stone-600 text-xs py-2 px-4 sm:px-6 transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Breadcrumb Trail */}
        <ol className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto whitespace-nowrap py-0.5 no-scrollbar">
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;
            const Icon = crumb.icon;

            return (
              <li key={crumb.id} className="flex items-center gap-1.5 sm:gap-2">
                {index > 0 && (
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0 select-none" aria-hidden="true" />
                )}

                {crumb.isClickable ? (
                  <button
                    onClick={crumb.onClick}
                    className="inline-flex items-center gap-1.5 font-medium text-[#5c544d] hover:text-[#a0876e] transition-colors cursor-pointer px-1 py-0.5 focus:outline-hidden"
                  >
                    {Icon && <Icon className="w-3.5 h-3.5 text-stone-500 shrink-0" />}
                    <span>{crumb.label}</span>
                  </button>
                ) : (
                  <span
                    aria-current={isLast ? 'page' : undefined}
                    className={`inline-flex items-center gap-1.5 px-1 py-0.5 ${
                      isLast 
                        ? 'font-semibold text-[#020404]' 
                        : 'font-medium text-[#5c544d]'
                    }`}
                  >
                    {Icon && <Icon className="w-3.5 h-3.5 text-stone-500 shrink-0" />}
                    <span className="truncate max-w-[200px] sm:max-w-xs md:max-w-md">{crumb.label}</span>
                  </span>
                )}
              </li>
            );
          })}
        </ol>

        {/* Right Institutional Accreditation */}
        <div className="hidden md:flex items-center gap-2 shrink-0 text-[11px] text-[#5c544d] font-sans">
          <span className="w-1.5 h-1.5 rounded-full bg-[#a0876e]" />
          <span className="font-medium text-[#020404]">Official Portal</span>
          <span className="text-stone-400">|</span>
          <span className="font-mono text-[#5c544d]">Regd. 1400 AH / 1980 CE</span>
        </div>
      </div>
    </nav>
  );
};
