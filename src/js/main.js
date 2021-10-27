(function () {

    class SkillsWidget {
        /**
         * 
         * @param {string} selector 
         * @param {{'title': string, 'progress': number}[]} skills 
         */
        constructor (selector, skills) {
            this.skills = skills;
            this.element = document.querySelector(selector);

            if (this.element) {
                this.renderOptions();
            }
        }

        generatePercentColor (percent) {
            var hue = '' + 140 * percent / 100;
            return ["hsl(", hue, ", 80%,50%)"].join("");
        }

        renderOptions () {
            this.skills.forEach((skill) => {
                let color = this.generatePercentColor(skill['progress']);
                let progressCss = `width: ${skill['progress']-15}%; background-color: ${color};`;
                let row = `<div class="row"><div class="skill-title">${skill['title']}</div><div class="skill-progress" style="${progressCss}"><span>${skill['title']}</span></div></div>`;
                this.element.innerHTML += row;
            });
        }
    }

    window.addEventListener('load', (e) => {
        
        const frameworks = [
            {
                title: 'Angular 2+',
                progress: 90
            }, {
                title: 'NestJS 6',
                progress: 85
            }, {
                title: 'Magento 2',
                progress: 85
            },  {
                title: 'Laravel 5/6',
                progress: 80
            }, {
                title: 'Yii2',
                progress: 77
            }, {
                title: 'Magento 1',
                progress: 50
            }
        ];

        const programmingSkills = [
            {
                title: 'Type Script',
                progress: 95
            }, {
                title: 'Java Script',
                progress: 95
            }, {
                title: 'PHP',
                progress: 95
            }, {
                title: 'SQL',
                progress: 85
            },  {
                title: 'NOSQL',
                progress: 82
            }, {
                title: 'Bash / Shell scripting',
                progress: 55
            }, {
                title: 'C/C++',
                progress: 40
            }
        ];  

        new SkillsWidget('#frameworks', frameworks);
        new SkillsWidget('#programming_skills', programmingSkills);
    });
})();