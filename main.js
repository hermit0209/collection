
let color1 = "color:#039090;"
const about = document.querySelector(".about > p");
about.innerHTML = `Hi Friends, I'm <span style=${color1}>Wayne Chang</span>.<br>
A self learner.<br>
Interesting in <span style=${color1}>Design</span> and <br>
<span style=${color1}>Web Technology</span>.<br>
Also, I care <span style=${color1}>UI/UX</span> a lot.<br>
Let me show you around`;

const infograph = document.querySelector(".infograph");
infograph.innerHTML = "Infographics & SVG & Canvas";
const infograph_content = document.querySelector(".infograph + p");
infograph_content.innerHTML = `Visuals are a great way to communicate with readers.
Also, people care information which gives the true and fair view. 
That's why I crazy about inforgraphics and the skills it needs to have.
SVG and Canvas.`;

const graphic = document.querySelector(".graphic");
graphic.innerHTML = "Graphic Design";
const graphic_content = document.querySelector(".graphic + p");
graphic_content.innerHTML = `I have Graphic Design Skills like Photoshop and Illustrator.
I have basic knowledge of sketching.`;

const interaction = document.querySelector(".interaction");
interaction.innerHTML = "Interaction Design";
const interaction_content = document.querySelector(".interaction + p");
interaction_content.innerHTML = `I have two year's experience working in 
Interaction Design Team.<br>
This is a team who got IF communication design award.

`;

const modeling = document.querySelector(".modeling");
modeling.innerHTML = "3D modeling & Generative Design";
const modeling_content = document.querySelector(".modeling + p");
modeling_content.innerHTML = `I can do 3D modeling ,rendering 
and manipulate a software called Grasshopper.
And a few knowledge of WebGL`;


