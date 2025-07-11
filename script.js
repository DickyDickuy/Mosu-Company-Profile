/**
 * NioLand Landing Page JavaScript
 * Author: Professional Development Team
 * Description: Interactive functionality for the NioLand analytics landing page
 */

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeComponents();
});

/**
 * Initialize all page components
 */
function initializeComponents() {
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize smooth scroll navigation
    initSmoothScroll();
    
    // Initialize navbar scroll effects
    initNavbarEffects();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize stats counter animation
    initStatsCounter();
    
    // Initialize newsletter form
    initNewsletterForm();
    
    // Initialize pricing card interactions
    initPricingCards();
    
    // Initialize testimonial carousel (if needed)
    initTestimonialCarousel();
    
    // Initialize lazy loading for images
    initLazyLoading();
    
    // Initialize team section animations
    initTeamAnimations();
    
    // Add floating particles to team section
    addTeamParticles();
    
    console.log('MOSU landing page initialized successfully!');
}

/**
 * Mobile Menu Functionality
 */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.querySelector('nav');
    
    if (!mobileMenuBtn || !mobileMenu) {
        console.error('Mobile menu elements not found');
        return;
    }
    
    let isMenuOpen = false;
    
    function updateMobileMenuStyle() {
        // Apply glass effect to mobile menu if navbar has glass effect
        if (navbar && navbar.classList.contains('navbar-glass')) {
            mobileMenu.classList.add('navbar-glass');
        } else {
            mobileMenu.classList.remove('navbar-glass');
        }
    }
    
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            // Show menu
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('mobile-menu-enter');
            mobileMenu.classList.remove('mobile-menu-exit');
            
            // Update mobile menu style based on navbar state
            updateMobileMenuStyle();
            
            // Update button icon to close icon
            mobileMenuBtn.innerHTML = `
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            `;
        } else {
            // Hide menu
            mobileMenu.classList.add('mobile-menu-exit');
            mobileMenu.classList.remove('mobile-menu-enter');
            
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('mobile-menu-exit', 'navbar-glass');
            }, 300);
            
            // Update button icon to hamburger icon
            mobileMenuBtn.innerHTML = `
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            `;
        }
    }
    
    // Toggle menu on button click
    mobileMenuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });
    
    // Close mobile menu when clicking on menu links
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (isMenuOpen) {
                toggleMenu();
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (isMenuOpen && !mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            toggleMenu();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && isMenuOpen) {
            // Close mobile menu on desktop
            isMenuOpen = false;
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('mobile-menu-enter', 'mobile-menu-exit', 'navbar-glass');
            mobileMenuBtn.innerHTML = `
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            `;
        }
    });
    
    console.log('Mobile menu initialized successfully');
}

/**
 * Smooth Scroll Navigation
 */
function initSmoothScroll() {
    // Get all anchor links that start with #
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calculate offset for fixed navbar
                const navbarHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    document.getElementById('mobile-menu-btn').innerHTML = `
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    `;
                }
                
                // Update active navigation link
                updateActiveNavLink(targetId);
            }
        });
    });
}

/**
 * Update active navigation link
 */
function updateActiveNavLink(targetId) {
    // Remove active class from all nav links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.classList.remove('text-primary');
        link.classList.add('text-gray-700');
    });
    
    // Add active class to current link
    const activeLink = document.querySelector(`nav a[href="${targetId}"]`);
    if (activeLink) {
        activeLink.classList.remove('text-gray-700');
        activeLink.classList.add('text-primary');
    }
}

/**
 * Navbar Scroll Effects
 * Simple scroll effects without glass/translucent effects
 */
function initNavbarEffects() {
    const navbar = document.querySelector('nav');
    if (!navbar) return;
    
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateNavbar() {
        const currentScrollY = window.scrollY;
        
        // Add glass effect when scrolling down
        if (currentScrollY > 50) {
            navbar.classList.add('navbar-glass');
            navbar.classList.remove('navbar-solid');
        } else {
            navbar.classList.remove('navbar-glass');
            navbar.classList.add('navbar-solid');
        }
        
        // Navbar is always visible (no auto-hide functionality)
        lastScrollY = currentScrollY;
        
        // Update active section in navigation
        updateActiveSection();
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }
    
    // Simple direct scroll listener - more reliable
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        
        if (scrollY > 50) {
            navbar.classList.add('navbar-glass');
            navbar.classList.remove('navbar-solid');
        } else {
            navbar.classList.remove('navbar-glass');
            navbar.classList.add('navbar-solid');
        }
    }, { passive: true });
    
    // Initialize navbar state
    updateNavbar();
}

/**
 * Update active section based on scroll position
 */
function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navbarHeight = document.querySelector('nav').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            updateActiveNavLink(`#${section.id}`);
        }
    });
}

/**
 * Scroll Animations
 */
function initScrollAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                
                // Add staggered animation for child elements
                const children = entry.target.querySelectorAll('.grid > div, .flex > div');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-fade-in');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe all sections and cards
    document.querySelectorAll('section, .card-hover').forEach(element => {
        observer.observe(element);
    });
}

/**
 * Stats Counter Animation
 */
function initStatsCounter() {
    const statsCounters = document.querySelectorAll('.stats-counter');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsCounters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

/**
 * Animate number counter
 */
function animateCounter(element) {
    const target = parseInt(element.textContent.replace(/[^\d]/g, ''));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Format number with suffix
        const text = element.textContent;
        if (text.includes('K')) {
            element.textContent = Math.floor(current) + 'K';
        } else if (text.includes('%')) {
            element.textContent = Math.floor(current) + '%';
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

/**
 * Newsletter Form Functionality
 */
function initNewsletterForm() {
    const newsletterForm = document.querySelector('#contact form, .newsletter-form');
    const emailInput = document.querySelector('input[type="email"]');
    const subscribeBtn = document.querySelector('button[type="submit"], button:contains("Subscribe")');
    
    if (emailInput && subscribeBtn) {
        subscribeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            
            if (validateEmail(email)) {
                // Simulate subscription process
                showNotification('Thank you for subscribing!', 'success');
                emailInput.value = '';
            } else {
                showNotification('Please enter a valid email address.', 'error');
            }
        });
    }
}

/**
 * Email validation
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Show notification
 */
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full`;
    
    // Set notification style based on type
    if (type === 'success') {
        notification.classList.add('bg-green-500', 'text-white');
    } else if (type === 'error') {
        notification.classList.add('bg-red-500', 'text-white');
    } else {
        notification.classList.add('bg-blue-500', 'text-white');
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

/**
 * Pricing Cards Interaction
 */
function initPricingCards() {
    const pricingCards = document.querySelectorAll('.pricing-card, .pricing-card-featured');
    
    pricingCards.forEach(card => {
        const button = card.querySelector('button');
        
        if (button) {
            button.addEventListener('click', function() {
                const planName = card.querySelector('h3').textContent;
                showNotification(`Selected ${planName} plan! Redirecting to checkout...`, 'success');
                
                // Here you would typically redirect to a checkout page
                setTimeout(() => {
                    console.log(`Redirecting to checkout for ${planName} plan`);
                }, 1500);
            });
        }
    });
}

/**
 * Testimonial Carousel (if implemented)
 */
function initTestimonialCarousel() {
    // This can be extended if you want to add carousel functionality
    // For now, we'll just add some hover effects
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('card-hover');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('card-hover');
        });
    });
}

/**
 * Team Section Animations
 */
function initTeamAnimations() {
    // Intersection Observer for team cards
    const teamCards = document.querySelectorAll('.team-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const teamObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate-fade-in');
                    entry.target.style.opacity = '1';
                }, index * 150); // Stagger animation
            }
        });
    }, observerOptions);
    
    teamCards.forEach(card => {
        card.style.opacity = '0';
        teamObserver.observe(card);
    });
    
    // Add click events for team cards
    teamCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add ripple effect
            const ripple = document.createElement('div');
            ripple.className = 'absolute inset-0 bg-white/20 rounded-full animate-ping';
            ripple.style.pointerEvents = 'none';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

/**
 * Add floating particles effect to team section
 */
function addTeamParticles() {
    const teamSection = document.querySelector('#team');
    if (!teamSection) return;
    
    // Create floating particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full opacity-30';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.animation = 'float 20s linear infinite';
        
        teamSection.appendChild(particle);
    }
}

/**
 * Lazy Loading for Images (when real images are added)
 */
function initLazyLoading() {
    const imageContainers = document.querySelectorAll('.image-placeholder');
    
    const lazyImageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add shimmer effect when image placeholder becomes visible
                entry.target.classList.add('loading');
                
                // Simulate image loading
                setTimeout(() => {
                    entry.target.classList.remove('loading');
                }, 1000);
                
                lazyImageObserver.unobserve(entry.target);
            }
        });
    });
    
    imageContainers.forEach(container => {
        lazyImageObserver.observe(container);
    });
}

/**
 * Utility Functions
 */

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Add resize listener for responsive behavior
window.addEventListener('resize', debounce(() => {
    // Handle responsive changes
    const mobileMenu = document.getElementById('mobile-menu');
    if (window.innerWidth >= 768 && mobileMenu) {
        mobileMenu.classList.add('hidden');
    }
}, 250));

// Export functions for potential external use
window.NioLand = {
    showNotification,
    validateEmail,
    updateActiveNavLink
};
