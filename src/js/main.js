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
        const programmingSkills = [
            {
                title: 'PHP',
                progress: 90
            }, {
                title: 'Java Script',
                progress: 90
            },  {
                title: 'SQL',
                progress: 90
            },  {
                title: 'NOSQL',
                progress: 75
            }, {
                title: 'Shell scripting',
                progress: 50
            }, {
                title: 'HTML, CSS',
                progress: 50
            }
        ];  

        new SkillsWidget('#programming_skills', programmingSkills);

        const frameworks = [
            {
                title: 'Magento 2',
                progress: 85
            }, {
                title: 'Magento 1',
                progress: 75
            }, {
                title: 'Yii2',
                progress: 75
            }, {
                title: 'NestJS',
                progress: 70
            }, {
                title: 'Angular 2+',
                progress: 65
            }, {
                title: 'Bootstrap 4(3)',
                progress: 70
            }
        ];

        new SkillsWidget('#frameworks', frameworks);
    });
})();