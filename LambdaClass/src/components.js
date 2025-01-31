function loadFooter() {
    return `
    <footer class="h-full justify-center bg-[#a8dadc] py-12 lg:py-24 overflow-x-hidden">
        <img src="/edc-logo-blue.svg" alt="" class="px-8 md:px-24 w-[75%] md:w-[50%] py-12">
        <div class="md:grid md:grid-cols-2 md:gap-24 relative px-8 md:px-24">
            <div class="md:mt-0">
                <h2 class="text-[#1D3557] font-Gambetta italic text-xl mb-6">(Pages)</h2>
                <ul class="text-[#1D3557]">
                    <li class="mb-2 font-Inter font-semibold text-xl">
                        <a href="#" class="hover:underline">Home</a>
                    </li>
                    <li class="mb-2 font-Inter font-semibold text-xl">
                        <a href="#" class="hover:underline">Service</a>
                    </li>
                    <li class="mb-2 font-Inter font-semibold text-xl">
                        <a href="#" class="hover:underline">About</a>
                    </li>
                    <li class="mb-2 font-Inter font-semibold text-xl">
                        <a href="#" class="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <div class="col-start-2 mt-12 mb-12 md:mt-0">
                <h2 class="text-[#1D3557] font-Gambetta italic text-xl mb-6">(More)</h2>
                <ul class="text-[#1D3557]">
                    <li class="mb-2 font-Inter font-semibold text-xl">
                        <a href="#" class="hover:underline">Privacy Policy</a>
                    </li>
                    <li class="mb-2 font-Inter font-semibold text-xl">
                        <a href="#" class="hover:underline">Terms of Service</a>
                    </li>
                    <li class="mb-2 font-Inter font-semibold text-xl">
                        <a href="#" class="hover:underline">FAQ</a>
                    </li>
                    <li class="mb-2 font-Inter font-semibold text-xl">
                        <a href="#" class="hover:underline">Support</a>
                    </li>
                </ul>
            </div>
            <a href="#home-section" class="text-[#1D3557] font-Inter font-semibold text-xl underline underline-offset-2">Back to Top</a>
        </div>
    </footer>
    `;
}

document.addEventListener("DOMContentLoaded", function () {
    const footerContainer = document.getElementById("footer-container");
    if (footerContainer) {
        footerContainer.innerHTML = loadFooter();
    }
});

function loadNav() {
    return `
   <header id="navbar" class="fixed top-0 left-0 z-50 w-full font-semibold transition-transform duration-300 bg-[#1d3557]">
    <!-- Sección del Logo y Menú -->
    <div class="flex items-center justify-between px-6 md:px-12 lg:px-24 py-4">
        <!-- Logo -->
        <img src="/edc-logo.svg" alt="Logo" class="w-6 md:w-16 lg:w-20">
        
        <!-- Menú y Botón en una sola línea -->
        <nav class="flex items-center gap-6 md:gap-12">
            <ul class="flex items-center gap-6 md:gap-8">
                <a href="#projects"><li class="cursor-pointer hover:underline text-[#fc5151] text-xs md:text-base lg:text-lg">Work</li></a>
                <a href="#projects"><li class="cursor-pointer hover:underline text-[#fc5151] text-xs md:text-base lg:text-lg">Services</li></a>
                <a href="#home-section"><li class="cursor-pointer hover:underline text-[#fc5151] text-xs md:text-base lg:text-lg">About</li></a>
            </ul>
            <button class="underline text-[#fc5151] text-xs md:text-lg">Let's Talk!</button>
        </nav>
    </div>
</header>
    `;
}

document.addEventListener("DOMContentLoaded", function () {
    const navContainer = document.getElementById("nav-container");
    if (navContainer) {
        navContainer.innerHTML = loadNav();
    }

    
});





