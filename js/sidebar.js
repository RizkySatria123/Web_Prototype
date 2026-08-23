/**
 * AGRIVISION â€” Shared Sidebar Renderer
 * Satu sumber sidebar untuk setiap role.
 * Panggil renderSidebar('board'|'manager'|'superadmin', 'file.html') dari setiap halaman.
 */

const LOGO_SVG = `
<svg viewBox="0 0 581 581" xmlns="http://www.w3.org/2000/svg" width="38" height="38">
  <g id="Daun">
    <path fill="#7ed957" stroke="#c8ddad" stroke-width="2" stroke-miterlimit="10" d="M198.01,399.87c24.92,22.53,57.44,33.02,87,30.71,2.56-26.73-9.04-56.13-33.96-78.66-24.92-22.53-57.44-33.02-87-30.71-2.56,26.73,9.04,56.13,33.96,78.66Z"/>
    <path fill="#7ed957" stroke="#c8ddad" stroke-width="2" stroke-miterlimit="10" d="M326.35,351.91c-24.92,22.53-36.52,51.94-33.96,78.66,29.56,2.31,62.08-8.17,87-30.71,24.92-22.53,36.52-51.94,33.96-78.66-29.56-2.31-62.08,8.17-87,30.71Z"/>
  </g>
  <path fill="#fdb134" stroke="#fdb134" stroke-width="3" stroke-miterlimit="10" d="M361.48,495.36c15.57,11.34,23.36,17.02,22.93,22.01-1.44,16.91-86.86,34.25-165.88,14.87-34.1-8.36-56.79-21.01-65.36-26.16-9.95-5.98-35.67-22.46-61.33-53.23-9.79-11.74-26.38-32.07-37.93-63.15-8.41-22.65-15.72-42.34-7.95-63.1,5.38-14.35,15.91-23.72,28.43-34.85,13.31-11.84,26.16-19.31,35.22-23.85-.53,18,1.33,32.9,3.3,43.59,2.4,13.03,7.56,39.54,25.68,67.39,8.03,12.34,15.92,20.8,20.08,25.22,15.92,16.92,30.86,26.74,35.47,29.68,4.62,2.95,19.88,12.37,42.19,19.72,7.14,2.36,8.52,2.55,43.52,10.89,35.34,8.42,43.01,10.49,54.11,15.37,12.84,5.65,21.48,11.2,27.52,15.59Z"/>
  <path fill="#126a3a" stroke="#116a3a" stroke-width="3" stroke-miterlimit="10" d="M120.26,217.45c7.4-17.78,25.56-54.12,65.12-81.63,7.21-5.02,72.04-48.53,152.88-26.42,20.32,5.56,62.48,20.95,94.58,62.9,27.78,36.31,33.7,73.76,35.3,90.1,4.19-15.13,13.94-58.11-4.62-106.85-16.23-42.64-45.13-66.04-56.18-74.75-46.28-36.5-96.36-39.44-116.81-40.36-52.75-2.35-91.7,15.09-110.66,23.85-26.66,12.31-73.57,39.46-109.15,93.55-40.67,61.84-43.03,123.17-42.74,146.55,2.79-10.55,10.47-33.87,31.73-54.83,23.5-23.16,49.93-29.96,60.54-32.1Z"/>
  <path fill="#fdb134" stroke="#fdb134" stroke-width="3" stroke-miterlimit="10" d="M508.23,271.56c-16.94,8.67-30.02,18.45-39.44,26.6-1.2,15.13-5.09,39.53-18.68,66.07-4.82,9.4-18.65,34.3-46.44,56.84-21.65,17.56-42.95,26.53-56.87,31.18,6.7.63,26.44,3.37,44.03,19.26,14.78,13.35,20.19,28.91,22.11,35.66,41.93-26.96,68.63-57.07,84.28-77.85,10.77-14.29,30-40.69,43.11-80.71,12.6-38.47,13.75-72.09,12.84-93.55-12.18,2.86-27.87,7.77-44.94,16.51Z"/>
</svg>`;

/**
 * Navigasi canonical per role.
 * Terminologi mengikuti draw.io entity diagram Agrivision.
 * Roles: Super Admin | Manager | Board (Investor)
 */
const SIDEBAR_MENUS = {

  // ── BOARD (Investor / Klien) ────────────────────────────────
  board: {
    roleLabel: 'Board',
    userAvatar: 'FR',
    userName: 'Fitrah Ramadhan',
    userRole: 'Investor · Board',
    avatarBg: '',
    sections: [
      { label: 'Utama', items: [
        { href: 'board-dashboard.html', icon: 'dashboard',   text: 'Dashboard' },
        { href: 'board-reports.html',   icon: 'description', text: 'Laporan' }
      ]}
    ]
  },

  // ── MANAGER ────────────────────────────────────────────
  manager: {
    roleLabel: 'Manager',
    userAvatar: 'AD',
    userName: 'Ahmad Dani',
    userRole: 'Manager · Agrivision',
    avatarBg: 'var(--color-dark-amber)',
    sections: [
      { label: 'Menu Utama', items: [
        { href: 'manager-dashboard.html', icon: 'dashboard',         text: 'Dashboard' },
        { href: 'manager-clients.html',   icon: 'grass',             text: 'Lahan / Proyek' },
        { href: 'manager-indices.html',   icon: 'data_thresholding', text: 'Index Observasi' },
        { href: 'manager-reports.html',   icon: 'summarize',         text: 'Laporan & Analitik' },
        { href: 'manager-profile.html',   icon: 'person',            text: 'Profil' },
      ]},
    ]
  },


  // ── SUPER ADMIN ───────────────────────────────────────────────
  superadmin: {
    roleLabel: 'Super Admin',
    userAvatar: 'SA',
    userName: 'Rizky Satria',
    userRole: 'Super Admin',
    avatarBg: '#6d28d9',
    sections: [
      { label: 'Utama', items: [
        { href: 'superadmin-dashboard.html', icon: 'dashboard',       text: 'Dashboard' },
        { href: 'superadmin-users.html',     icon: 'manage_accounts', text: 'Kelola Pengguna' },
      ]},
      { label: 'Bisnis', items: [
        { href: 'superadmin-revenue.html',       icon: 'payments',        text: 'Pendapatan' },
        { href: 'superadmin-subscriptions.html', icon: 'card_membership', text: 'Paket Langganan' },
      ]},
      { label: 'Platform', items: [
        { href: 'superadmin-platform.html', icon: 'settings_applications', text: 'Konfigurasi Platform' },
        { href: 'superadmin-audit.html',    icon: 'policy',                text: 'Audit Log' },
        { href: 'superadmin-reports.html',  icon: 'bar_chart',             text: 'Laporan Bisnis' },
      ]},
    ]
  }
};

/**
 * Render sidebar ke elemen #sidebar-placeholder.
 * @param {string} role        - 'board' | 'manager' | 'superadmin'
 * @param {string} currentPage - nama file html saat ini (e.g. 'manager-dashboard.html')
 */
function renderSidebar(role, currentPage) {
  const cfg = SIDEBAR_MENUS[role];
  if (!cfg) return;

  const showSectionLabels = cfg.sections.length > 1;
  let navHTML = '';
  cfg.sections.forEach(section => {

    if (showSectionLabels) {
      navHTML += `<div class="sidebar-section-label">${section.label}</div>`;
    }
    section.items.forEach(item => {
      const isActive = item.href === currentPage;
      const badgeHTML = item.badge
        ? `<span class="notif-badge" style="margin-left:auto;">${item.badge}</span>`
        : '';
      navHTML += `
        <a href="${item.href}" class="sidebar-nav-item${isActive ? ' active' : ''}">
          <span class="material-symbols-outlined">${item.icon}</span>${item.text}${badgeHTML}
        </a>`;
    });
  });


  const avatarStyle = cfg.avatarBg ? `style="background:${cfg.avatarBg};"` : '';

  const html = `
  <aside class="sidebar">
    <div class="sidebar-brand">
      <div class="sidebar-logo">${LOGO_SVG}</div>
      <div style="display:flex;flex-direction:column;justify-content:center;padding-top:2px;">
        <div class="sidebar-brand-name"><span style="color:#053b26;">Agri</span><span style="color:#fdb134;">vision</span></div>
        <div style="font-size:9px;font-weight:600;color:var(--color-text-muted);letter-spacing:0.06em;text-transform:uppercase;margin:2px 0 4px;">See · Regenerate · Prosper</div>
        <div class="sidebar-brand-role">${cfg.roleLabel}</div>
      </div>
    </div>
    <nav class="sidebar-nav">${navHTML}</nav>
    <div class="sidebar-footer">
      <div class="sidebar-user">
        <div class="sidebar-avatar" ${avatarStyle}>${cfg.userAvatar}</div>
        <div>
          <div class="sidebar-user-name">${cfg.userName}</div>
          <div class="sidebar-user-role">${cfg.userRole}</div>
        </div>
      </div>
      <button class="sidebar-logout" onclick="window.location.href='login.html'">
        <span class="material-symbols-outlined" style="font-size:18px;">logout</span>Keluar
      </button>
    </div>
  </aside>`;

  const placeholder = document.getElementById('sidebar-placeholder');
  if (placeholder) placeholder.outerHTML = html;
}

