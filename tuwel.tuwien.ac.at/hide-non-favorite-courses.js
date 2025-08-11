const favoriteLinks = [...document.querySelectorAll(".popover-region-content a")].map(a => a.href)

const myCoursesDropdown = document.querySelector(".carousel-inner")

let separatorCount = 0;
for(const children of myCoursesDropdown.children) {
    if(children.tagName === 'DIV') {
        separatorCount++;
        continue;
    }

    if(separatorCount !== 1) {
        continue;
    }

    if(favoriteLinks.includes(children.href)) {
        continue;
    }

    children.style.display = 'none'
}

