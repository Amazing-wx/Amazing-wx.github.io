

const content_dir = 'contents/'
const config_file = 'config.yml'
const section_names = ['home', 'publications', 'awards', 'researchs']


window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    // Yaml
    fetch(content_dir + config_file)
        .then(response => response.text())
        .then(text => {
            const yml = jsyaml.load(text);
            console.log('Loaded config:', yml);
            Object.keys(yml).forEach(key => {
                try {
                    const element = document.getElementById(key);
                    if (element) {
                        element.innerHTML = yml[key];
                        console.log('Set', key, 'to', yml[key]);
                    } else {
                        console.log("Element not found for id:", key);
                    }
                } catch (error) {
                    console.log("Error setting " + key + ":", error);
                }
            })
        })
        .catch(error => console.log('Config loading error:', error));


    // Marked
    marked.use({ mangle: false, headerIds: false })
    section_names.forEach((name, idx) => {
        console.log('Loading section:', name);
        fetch(content_dir + name + '.md')
            .then(response => {
                console.log('Response for', name, ':', response.status, response.statusText);
                return response.text();
            })
            .then(markdown => {
                console.log('Markdown content for', name, ':', markdown.substring(0, 200) + '...');
                const html = marked.parse(markdown);
                const element = document.getElementById(name + '-md');
                if (element) {
                    element.innerHTML = html;
                    console.log('Successfully loaded', name, 'section');
                    
                    // 检查图片是否正确加载
                    if (name === 'researchs') {
                        setTimeout(() => {
                            const images = element.querySelectorAll('img');
                            console.log('Found', images.length, 'images in researchs section');
                            images.forEach((img, index) => {
                                console.log('Image', index, ':', img.src);
                                img.addEventListener('load', () => {
                                    console.log('Image loaded successfully:', img.src);
                                });
                                img.addEventListener('error', () => {
                                    console.log('Image failed to load:', img.src);
                                });
                            });
                        }, 1000);
                    }
                } else {
                    console.log('Element not found for', name + '-md');
                }
            }).then(() => {
                // MathJax
                MathJax.typeset();
            })
            .catch(error => console.log('Error loading', name, ':', error));
    })

}); 
