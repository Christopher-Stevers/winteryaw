
const gear1 = document.querySelector(".terminal>img:nth-child(1)");
const gear2 = document.querySelector(".terminal>img:nth-child(2)");
const gear3 = document.querySelector(".terminal>img:nth-child(3)");
const gears = document.querySelectorAll(".terminal>img");
const sentence1 = `I develop websites.`;
const sentence2 = `I develop web apps.`;
const sentence3 = `I develop software.`;
let active = {
    value: false,
    currentSentence: 0,
    gear1rot: 90,
    gear2rot: -40,
    gear3rot: -70


}
const arrOfSentences = [sentence1, sentence2, sentence3];
const typeOut = () => {

    if (active.value || active.currentSentence === 3) return

    active.value = true;

    gear1.style.transform = `rotate(${active.gear1rot.toString()}deg)`;
    gear2.style.transform = `rotate(${active.gear2rot.toString()}deg)`;
    gear3.style.transform = `rotate(${active.gear3rot.toString()}deg)`;
    active.gear1rot = active.gear1rot + 90;
    active.gear2rot = active.gear2rot - 90;
    active.gear3rot = active.gear3rot - 90;

    const sentence = arrOfSentences[active.currentSentence];
    gears.forEach(elem => {
        const time = sentence.length * 200;
        elem.style.transitionDuration = time.toString() + "ms";

    });

    const sentenceArr = [...sentence];
    let activeSentence = "";
    const elem = document.createElement("p");
    const terminal = document.querySelector(".terminal");
    terminal.appendChild(elem);
    const elem1 = document.querySelector(".i-develop");
    const elem2 = document.querySelector(".websites");
    elem1.innerText = "";
    elem2.innerText = "";
    elem.innerText = `console.log(${sentence});`;
    const recursivePrinting = (activeSentence) => {
        if (activeSentence.length > sentence.length) {
            active.value = false;
            active.currentSentence = active.currentSentence + 1;
            return
        }
        if (activeSentence.length < 10) {
            setTimeout(() => {
                const newSentence = activeSentence.concat(sentenceArr[activeSentence.length]);

                elem1.innerText = activeSentence;

                recursivePrinting(newSentence)
            }, 100);


        }
        else {
            setTimeout(() => {
                const newSentence = activeSentence.concat(sentenceArr[activeSentence.length]);
                elem2.innerText = activeSentence.slice(10);
                recursivePrinting(newSentence)
            }, 100);


        }
    }
    recursivePrinting(activeSentence);
}
gears.forEach(elem => {
    elem.addEventListener('mouseover', () => {
        typeOut();

    });
})
if (document.querySelector(".terminal").style.display !== "none") typeOut();
const portfolio = [
    {
        path: "kanbeano.png",
        copy: `
    <li>Kanbeano is my take on the Kanban board.</li>
    <li>It allows the user to build shareable lists, save and edit them, all in a
    beautiful, responsive UI.</li>
    <li>Kanbeano is built with MongoDB and leverages Next.js for server-side rendering and serveless
    functions.</li>`,
        secondary: "",
        site: "https://new-kanbeano.vercel.app/",
        code: "https://github.com/Christopher-Stevers/NewKanbeano"
    },
    {
        path: "unknown.png",
        copy: `
    <li>My indie dev team needed a marketing website to showcase our coming release. </li>
    <li>We wanted to showcase our game with striking visuals, direct the user to points of sale, and allow them to
        contact us.</li>
    <li>I created this site on Nuxt3 , with editing through Netlify CMS.</li>`,
        secondary: "cms.png",
        site: "https://friendly-brown-1d77de.netlify.app/",
        code: "https://github.com/Christopher-Stevers/Soul-Runner-Site"
    },
    {
        path: "whirlcreekfarm.ga_-min.webp",
        copy: `
    <li>
    My parent's farm was lacking in online presence, which could be a valuable asset for their organic direct sales.</li>
    <li>To
    solve this problem I created a modern website which allows the user to browse products, contact us, and send their
    orders to my email. As this site is currently a demo, orders from it will not be filled, and the contact information is
    not accurate.</li>
    <li>I built this site with create-react-app, SCSS and css modules.</li>`,
        secondary: "",
        site: "https://whirlcreekfarm.ga/",
        code: "https://github.com/Christopher-Stevers/actual-react-whirl"
    },
  /*  {
        path: "scribo.png",
        copy: `
    <li>I wanted a personal blog which combined a good authoring experience with full control over styles</li>
    <li>Using a modern static site generator I was able to template out my site with my own styles.
    I then integrated Netlify CMS with my github repo, for a great authoring experience.</li>
    <li>I created this site with eleventy, with editing through Netlify CMS.</li>`,
        secondary: "",
        site: "https://christopherstevers.cf/",
        code: "https://github.com/Christopher-Stevers/Scribo"
    },
    {
        path: "ration.png",
        copy: `
    <li>
    My family had to go through the tedious task of finding the cost of production on our hogs, and I wanted a more sophisticated method.</li>
    <li>This tool allows the user to input some simple data which can be found in farm records, and then
    calculates the cost of feed used from that data.</li>
    <li>This little tool was created with HTML, CSS, and JS.</li>`,
        secondary: "",
        site: "https://christopher-stevers.github.io/Feed-Calc/",
        code: "https://github.com/Christopher-Stevers/Feed-Calc/"
    },*/

];
const hideModal = () => {

    document.querySelector(".overlay").classList.add("hidden");
}
const openModal = (e) => {
    const index = parseInt(e.target.dataset.index);
    const main = document.querySelector(".main-img");
    const sec = document.querySelector(".secondary-img");
    main.src = portfolio[index].path;
    sec.src = portfolio[index].secondary;
    if (!portfolio[index].secondary) { sec.style.display = "none" }
    else { sec.style.display = "static" };
    const list = document.querySelector(".modal>ul");
    list.innerHTML = portfolio[index].copy;
    const listItem = document.createElement("li");
    listItem.className = "links";
    list.appendChild(listItem);
    listItem.innerHTML = `<a href="${portfolio[index].site}">Site</a><a href="${portfolio[index].code}">Code</a>`


    setTimeout(() => { document.querySelector(".hidden").classList.remove("hidden"); }, 50)


}
document.querySelectorAll("button.portfolio-img").forEach((elem, index) => { elem.addEventListener("click", openModal) });
document.getElementById("exit-list").addEventListener("click", hideModal);