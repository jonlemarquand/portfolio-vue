<template>
    <h1>About Me</h1>
    <div class="aboutPage">
        <div class="skills">
            <div className="skillsbox">
                    <h2>Front-End</h2>
                    <div className="skillsline">
                        <AboutIcon iconName="Vue" iconSrc="vue" />
                        <AboutIcon iconName="React" iconSrc="react"/>
                    </div>
                    <div className="skillsline">
                        <AboutIcon iconName="Sass" iconSrc="sass"/>
                        <AboutIcon iconName="Less" iconSrc="less"/>
                    </div>
                    <div className="skillsline">
                        <AboutIcon iconName="HTML5" iconSrc="html5"/>
                        <AboutIcon iconName="CSS3" iconSrc="css3"/>
                        <AboutIcon iconName="Javascript" iconSrc="javascript"/>
                    </div>
                </div>
                <div className="skillsbox">
                <h2>Back-End</h2>
                <div className="skillsline">
                        <AboutIcon iconName="Laravel" iconSrc="laravel"/>                     
                        <AboutIcon iconName="Node" iconSrc="nodejs"/>
                        <AboutIcon iconName="ExpressJS" iconSrc="express"/>
                        <AboutIcon iconName="PHP" iconSrc="php"/>
                </div>
                <div className="skillsline">
                            <AboutIcon iconName="MySQL" iconSrc="mysql"/>
                            <AboutIcon iconName="PostgreSQL" iconSrc="postgres"/>
                            <AboutIcon iconName="MongoDB" iconSrc="mongodb"/>
                            <AboutIcon iconName="Redis" iconSrc="redis"/>
                    </div>
                </div>
                <div className="skillsbox">
                    <h2>Other</h2>
                    <div className="skillsline">
                            <AboutIcon iconName="Photoshop" iconSrc="photoshop"/>
                            <AboutIcon iconName="InDesign" iconSrc="indesign"/>
                            <AboutIcon iconName="Figma" iconSrc="figma"/>
                            <AboutIcon iconName="Jest" iconSrc="jest"/>
                    </div>
                </div>
        </div>
        <div className="about-me">
            <p>I’m a web developer, looking to take on big and small projects. I’ve always been a big fan of messing around with computers ever since being surprised with a mousemat, which I assumed had been for dad’s old Amstrad. Instead, it was for our family’s first computer, complete with a whopping 3gb hard drive. After watching the Weezer video that shipped with Windows 95, I was hooked. And then came the internet…</p>
            <p>When I was around 11, armed with a basic knowledge of HTML, I made what I like to think of as a gaming website that was just on the cusp of becoming a global hit. In reality, it had a mustard yellow and black colour theme, with more than enough gifs of bouncing spike balls to go with "Spyke's Gaming Site". So cool.</p>
            <p>From there, I’ve always kept an interest in websites, even if my professional career initially started with graphic design. However, armed with a basic knowledge of HTML and CSS, I began to update pre-built sites in my professional career and, wanting to know more, embarked on a programme of self-learning in HTML, CSS and Javascript.</p>
            <p>Since then, I’ve built a range of websites using many different languages including SASS, node.js, PHP, MySQL and the ever reliable jQuery. Want to see more of what I’ve done? Look above for some of the things I’ve worked on, look below for some musings and snippets. Want to add your name to the list? Get in touch below and I’ll see what I can do</p>.
        </div>
    </div>
</template>

<script>

import AboutIcon from './AboutIcon'

export default {
    components: {
        AboutIcon
    },
}
</script>

<style lang="scss" scoped>

h1 {
    text-align: center;
}

.aboutPage {
    display: flex;
    max-width: 1200px;
    p {
        color: $dblue;
        font-family: 'Open Sans', sans-serif;
    }
    h2 {
        margin-bottom: 20px;
    }
    .skills {
        width: 50%;
        margin-right: 30px;
        text-align: right;

        .skillsline {
            display: flex;
            justify-content: flex-end;
        }
    
    }
    .skillsbox {
        margin-bottom: 40px;
    }

    .about-me {
        width: 50%;
        margin-left: 30px;
    }
    @media (max-width: $phoneWidth) {
        flex-direction: column;
        align-items: center;
        max-width: 100%;

        .skills {
            width: 90%;
            margin-right: 0;
        }

        .skillsbox {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100%;
            margin-bottom: 20px;
        }

        .about-item {
            margin: 0 5px;
        }

        .about-me {
            width: 90%;
            margin: 0;
        }

    }
}
</style>