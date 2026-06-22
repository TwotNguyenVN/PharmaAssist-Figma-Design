document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize icons if lucide is available
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Create Toast Container
    if (!document.getElementById('toast-container')) {
        const toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.className = 'fixed bottom-4 right-4 z-[9999] flex flex-col gap-2';
        document.body.appendChild(toastContainer);
    }

    // 3. Global Toast Function
    window.showToast = function(message, type = 'info') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        
        let bgColor = 'bg-white';
        let borderColor = 'border-[#e8e8e8]';
        let textColor = 'text-[#1a1a1a]';
        let icon = '<i data-lucide="info" class="w-4 h-4 text-[#024ad8]"></i>';

        if (type === 'success') {
            borderColor = 'border-emerald-200';
            icon = '<i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600"></i>';
        } else if (type === 'warning') {
            borderColor = 'border-amber-200';
            icon = '<i data-lucide="alert-triangle" class="w-4 h-4 text-amber-500"></i>';
        }

        toast.className = `flex items-center gap-3 px-4 py-3 rounded-[8px] shadow-lg border ${borderColor} ${bgColor} transform transition-all duration-300 translate-y-10 opacity-0`;
        toast.innerHTML = `
            ${icon}
            <span class="text-sm font-medium ${textColor}">${message}</span>
        `;
        
        container.appendChild(toast);
        
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        // Animate in
        requestAnimationFrame(() => {
            toast.classList.remove('translate-y-10', 'opacity-0');
        });

        // Animate out and remove after 3s
        setTimeout(() => {
            toast.classList.add('translate-y-10', 'opacity-0');
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, 3000);
    };

    // 4. Attach click event to all buttons that don't have onclick and aren't form submits
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        // If button has specific roles like tab switching, don't show "Coming soon" unless we want to
        if (!btn.hasAttribute('onclick') && btn.type !== 'submit' && !btn.classList.contains('tab-btn') && !btn.classList.contains('role-btn')) {
            // Also ignore buttons that have specific IDs often used by custom JS
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                window.showToast('Tính năng đang được phát triển', 'info');
            });
        }
    });

    // 5. Catch empty a tags
    const links = document.querySelectorAll('a[href="#"], a[href=""]');
    links.forEach(link => {
        if (!link.hasAttribute('onclick')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                window.showToast('Tính năng đang được phát triển', 'info');
            });
        }
    });
});
