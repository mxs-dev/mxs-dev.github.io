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
                title: 'Magento 2',
                progress: 90
            }, {
                title: 'NestJS 6',
                progress: 85
            }, {
                title: 'Laravel 5/6',
                progress: 83
            }, {
                title: 'Yii2',
                progress: 75
            }, {
                title: 'Angular 2+',
                progress: 70
            }, {
                title: 'Magento 1',
                progress: 65
            }
        ];

        const programmingSkills = [
            {
                title: 'PHP',
                progress: 90
            }, {
                title: 'Type Script',
                progress: 90
            }, {
                title: 'Java Script',
                progress: 90
            },  {
                title: 'SQL',
                progress: 85
            },  {
                title: 'NOSQL',
                progress: 75
            }, {
                title: 'Shell scripting',
                progress: 60
            }, {
                title: 'C/C++',
                progress: 50
            }
        ];  

        new SkillsWidget('#frameworks', frameworks);
        new SkillsWidget('#programming_skills', programmingSkills);
    });
})();