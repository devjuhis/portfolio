const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".toc a");


const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(entry);
                
                links.forEach(link => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === `#${entry.target.id}`
                    );
                });
            }
        });
    },
    {
        threshold: 0.25
    }
);

sections.forEach(section => observer.observe(section));
